import { Editor } from "@/components/editor"

interface DocumentPageProps {
  params: Promise<{ docId: string }>
}

const DocumentPage = async ({ params }: DocumentPageProps) => {
  const { docId } = await params

  return (
    <div className="min-h-screen bg-neutral-50">
      <Editor />
    </div>
  )
}

export default DocumentPage
