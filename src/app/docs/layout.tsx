interface DocumentsLayoutProps {
  children: React.ReactNode
}

const DocumentsLayout = ({ children }: DocumentsLayoutProps) => (
  <main className="min-h-screen flex flex-col gap-y-4">{children}</main>
)

export default DocumentsLayout
