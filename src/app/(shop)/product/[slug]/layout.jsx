import { Metadata } from "next";
import { getProductBySlug } from "@/actions";

export async function generateMetadata( { params }, parent ) {
  // read route params
  const slug = params.slug
 
  // fetch data
  const product = await getProductBySlug(slug)
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product?.name ?? 'Producto no encontrado',
    description: product?.description ?? '',
    openGraph: {
      title: product?.name,
      description: product?.description ?? '',
      images: [product.images[0].src],
    },
  }
}

export default function ProductLayout({ children }) {
    return (
        <>
            { children }
        </>
    );
}
