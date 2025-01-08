interface DocumentsLayoutProps {
  children: React.ReactNode
}

const DocumentsLayout = ({ children }: DocumentsLayoutProps) => (
  <main className="flex flex-col gap-y-4">
    <nav className="w-full bg-red-500">Document navbar</nav>
    {children}
  </main>
)

export default DocumentsLayout
