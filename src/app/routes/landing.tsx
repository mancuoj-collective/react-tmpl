import { useNavigate } from 'react-router-dom'

import { Header } from '@/components/layout'
import { Head } from '@/components/seo'
import { Button } from '@/components/ui/button'
import { Cobe } from '@/components/ui/cobe'
import Particles from '@/components/ui/particles'
import { useDark } from '@/hooks/use-dark'

export function LandingRoute() {
  return (
    <>
      <Head description="Welcome to React Tmpl" />
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-1 flex-col items-center justify-center">
          <Hero />
        </div>
      </div>
    </>
  )
}

function Hero() {
  const { isDark } = useDark()
  const navigate = useNavigate()

  function handleStart() {
    navigate('/auth/login')
  }

  return (
    <div className="relative mx-auto flex min-h-[52rem] max-w-[800px] flex-col items-center justify-center gap-2 p-12 md:p-28">
      <Particles
        className="fixed inset-0 -z-30"
        quantity={200}
        staticity={100}
        ease={10}
        refresh
        color={isDark ? '#FFF' : '#000'}
      />
      <Cobe
        className="-z-20 max-w-[1000px]"
        config={{ mapBrightness: 2, width: 1000, height: 1000 }}
      />
      <span
        className="fixed top-0 -z-10 h-screen w-full bg-background/50"
      />
      <h1 className="mb-6 text-center font-lora text-3xl font-bold">
        The Latest React Starter Template
      </h1>
      <div className="flex items-center gap-2">
        <Button onClick={handleStart}>
          Get Started
        </Button>
        <Button variant="outline" asChild className="gap-1">
          <a href="https://github.com/mancuoj-collective/react-tmpl" target="_blank" rel="noreferrer">
            <div className="i-tabler-brand-github text-lg" />
            GitHub
          </a>
        </Button>
      </div>
    </div>
  )
}
