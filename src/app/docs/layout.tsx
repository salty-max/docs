interface DocumentsLayoutProps {
  children: React.ReactNode
}

const DocumentsLayout = ({ children }: DocumentsLayoutProps) => (
  <main className="flex flex-col gap-y-4">{children}</main>
)

export default DocumentsLayout
