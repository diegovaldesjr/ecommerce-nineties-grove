'use client';

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export const ProductGridItem = ({product}) => {
    const [displayImage, setDisplayImage] = useState(product.images[0].src)

  return (
    <div className="rounded-md overflow-hidden fade-in">
        <Link href={`/product/${product.slug}`}>
            <Image 
                src={displayImage}
                alt={product.name}
                className="w-full object-cover rounded"
                width={ 500 }
                height={ 500 }
                onMouseEnter={() => setDisplayImage(product.images[1].src)}
                onMouseLeave={() => setDisplayImage(product.images[0].src)}
                priority
            />
        </Link>

        <div className="p-4 flex flex-col">
            <Link href={`/product/${product.slug}`} className="hover:text-blue-600">
                {product.name}
            </Link>
            <span className="font-bold">${product.price}</span>
        </div>
    </div>
  )
}