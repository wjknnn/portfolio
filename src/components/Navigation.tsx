import { Link } from '@tanstack/react-router'

export const Navigation = () => {
  return (
    <header className="flex w-full justify-center px-10 py-5">
      <nav className="max-w-[1200px] w-full flex items-center bg-white/60 p-1 rounded-full border border-zinc-200 backdrop-blur-lg">
        <Link to="/" className="py-1 px-3 text-[14px] relative">
          Home
        </Link>
        <Link to="/about" className="py-1 px-3 text-[14px] relative">
          About
        </Link>
      </nav>
    </header>
  )
}
