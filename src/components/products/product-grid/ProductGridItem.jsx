'use client';

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export const ProductGridItem = ({product}) => {
    const [displayImage, setDisplayImage] = useState(product.images[0].src)
    const [displayImageAlt, setDisplayImageAlt] = useState(product.images[0].alt)

    const setImage = image => {
        setDisplayImage(image.src)
        setDisplayImageAlt(image.alt)
    }

  return (
    <div className="rounded-md overflow-hidden fade-in">
        <Link href={`/product/${product.slug}`} scroll={true}>
            <Image 
                src={displayImage}
                alt={displayImageAlt}
                className="w-full object-cover rounded"
                width={ 500 }
                height={ 500 }
                onMouseEnter={() => setImage(product.images[1])}
                onMouseLeave={() => setImage(product.images[0])}
                priority
            />
        </Link>

        <div className="p-4 flex flex-col">
            <Link href={`/product/${product.slug}`} className="text-xl font-bold hover:text-red-600">
                {product.name}
            </Link>
            <span className="font-bold text-xl">${product.price}</span>
        </div>
    </div>
  )
}