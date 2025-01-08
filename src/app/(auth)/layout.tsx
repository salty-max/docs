interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <main className="flex flex-col gap-y-4">
    <nav className="w-full bg-red-500">Auth navbar</nav>
    {children}
  </main>
)

export default AuthLayout
