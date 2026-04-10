import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  }
}

export default async function Category({params}: Props) {

  const { id } = await params;

  if(id === 'Kids' ) {
    notFound();
  }

  return (
    <div>Category page {id}</div>
  )
}
