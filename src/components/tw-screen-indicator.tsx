export function TwScreenIndicator() {
  if (import.meta.env.PROD)
    return null

  return (
    <div className="fixed left-4 bottom-4 z-50 text-xl font-semibold">
      <div className="sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  )
}
