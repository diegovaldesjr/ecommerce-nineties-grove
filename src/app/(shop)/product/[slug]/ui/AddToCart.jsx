'use client'

import { useEffect, useState } from "react"
import { SizeSelector } from "@/components"
import { useCartStore } from "@/store"

export const AddToCart = ({product}) => {
  const addProductToCart = useCartStore(state => state.addProductToCart)

  const [sizes, setSizes] = useState([])
  const [size, setSize] = useState()
  const [posted, setPosted] = useState(false)
  // const [quantity, setQuantity] = useState(1)

  const addToCart = () => {
    setPosted(true)
    if (!size) return
    
    const cartProduct = {
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      size: size,
      image: product.images[0].src,
      quantity: 1
    }
    addProductToCart(cartProduct)
    
    setPosted(false)
    setSize(undefined)
  }

  useEffect(() =>{
    const sizesAtt = product.attributes.find( (attribute) => attribute.name === 'sizes')
    
    if (sizesAtt) {
      setSizes(sizesAtt.options)
      setSize(sizesAtt.options[0])
    }
  }, [])

  return (
    <>
      {
        posted && !size && (
          <span className="mt-2 text-red-500 fade-in">
            Debe seleccionar una talla*
          </span>
        )
      }

      <SizeSelector availableSizes={sizes} selectedSize={size} onSizeChanged={setSize}/>
      {/* <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity}/> */}
      {/* <ColorSelector colors={product.colors} /> */}
      
      <button className="btn-primary mb-8" onClick={addToCart}>
        Agregar al carrito
      </button>
    </>
  )
}
