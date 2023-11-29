import { ThemeProvider } from '@/components/theme-provider'

export default function App() {
  return (
    <ThemeProvider>
      <div className="h-screen flex justify-center items-center gap-4 bg-slate-100 text-blue-600 dark:bg-slate-900 dark:text-blue-300">
        <span className="i-carbon-logo-react text-5xl"></span>
        <h1 className="font-bold font-serif text-3xl ">React Tmpl</h1>
      </div>
    </ThemeProvider>
  )
}
