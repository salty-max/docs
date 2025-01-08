import { Editor } from "@/components/editor"
import { Toolbar } from "@/components/toolbar"

interface DocumentPageProps {
  params: Promise<{ docId: string }>
}

const DocumentPage = async ({ params }: DocumentPageProps) => {
  const { docId } = await params

  return (
    <div className="min-h-screen bg-neutral-50">
      <Toolbar />
      <Editor />
    </div>
  )
}

export default DocumentPage
