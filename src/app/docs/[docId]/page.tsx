interface DocPageProps {
  params: Promise<{ docId: string }>
}

const DocPage = async ({ params }: DocPageProps) => {
  const { docId } = await params
  return <div>Doc id: {docId}</div>
}

export default DocPage
