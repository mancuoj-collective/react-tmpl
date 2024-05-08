import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div className="text-center">
      <span className="i-lucide-smile size-20" />
    </div>
  )
}
