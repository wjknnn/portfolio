import { Navigation } from '@/components/Navigation'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  return (
    <main className="min-h-dvh w-dvw flex flex-col items-center">
      <Navigation />
      <Outlet />
      <TanStackRouterDevtools />
    </main>
  )
}
