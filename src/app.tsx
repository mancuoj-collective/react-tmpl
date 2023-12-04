export default function App() {
  return (
    <div className="h-screen flex justify-center items-center gap-4 select-none">
      <label className="swap swap-flip text-5xl">
        <input type="checkbox" />
        <div className="swap-on">😈</div>
        <div className="swap-off">😎</div>
      </label>
      <h1 className="font-bold font-serif text-3xl">React Tmpl</h1>
    </div>
  )
}
