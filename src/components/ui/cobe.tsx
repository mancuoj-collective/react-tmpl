import type { COBEOptions } from 'cobe'
import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'
import { useSpring } from 'react-spring'

import { cn } from '@/lib/utils'

type GlobeProps = {
  className?: string
  config?: Partial<COBEOptions>
  mass?: number
  tension?: number
  friction?: number
  precision?: number
}

const DEFAULT_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1.2, 1.2, 1.2],
  markers: [
    { location: [31.2304, 121.4737], size: 0.1 },
  ],
}

export function Cobe({
  className,
  config,
  mass = 1,
  tension = 280,
  friction = 40,
  precision = 0.001,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass,
      tension,
      friction,
      precision,
    },
  }))

  useEffect(() => {
    let phi = 0
    let width = 0

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener('resize', onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...DEFAULT_CONFIG,
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) {
          // rotate speed
          phi += 0.002
        }
        state.phi = phi + r.get()
        state.width = width * 2
        state.height = width * 2
      },
    })

    // eslint-disable-next-line @eslint-react/web-api/no-leaked-timeout
    setTimeout(() => canvasRef.current!.style.opacity = '1')

    return () => {
      globe.destroy()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  function updatePointerInteraction(clientX: number | null) {
    if (clientX !== null) {
      pointerInteracting.current = clientX - (pointerInteractionMovement.current ?? clientX)
    }
    else {
      pointerInteracting.current = null
    }

    if (canvasRef.current) {
      canvasRef.current.style.cursor = clientX ? 'grabbing' : 'grab'
    }
  }

  function updateMovement(clientX: number) {
    if (pointerInteracting.current !== null) {
      const delta = clientX - (pointerInteracting.current ?? clientX)
      pointerInteractionMovement.current = delta
      api.start({
        r: delta / 200,
      })
    }
  }

  return (
    <div className={cn('absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]', className)}>
      <canvas
        className="size-full opacity-0 transition-opacity duration-1000 ease-in-out [contain:layout_paint_size]"
        ref={canvasRef}
        onPointerDown={e => updatePointerInteraction(e.clientX)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={e => updateMovement(e.clientX)}
        onTouchMove={e => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  )
}
