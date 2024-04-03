'use client'

import { placeOrder, setCustomerAddress } from "@/actions"
import { SkeletonText } from "@/components"
import { countries } from "@/seed/seed-countries"
import { useCartStore } from "@/store"
import clsx from "clsx"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

export const PlaceOrderForm = ({customerFormData}) => {
  const router = useRouter()

  const {handleSubmit, register, formState: {isValid}} = useForm({
    defaultValues: {
      ...customerFormData,
      rememberAddress: false
    }
  })

  const { data: session } = useSession({
    required: true
  })

  const [loaded, setLoaded] = useState(false)
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const cart = useCartStore(state => state.cart)
  const clearCart = useCartStore(state => state.clearCart)

  useEffect(()=> {
    setLoaded(true)
  }, [])

  const onSubmit = async(data) => {
    setIsPlacingOrder(true)
    const {rememberAddress, ...addressData} = data
    
    if (rememberAddress) {
      await setCustomerAddress(session.user.id, addressData)
    }

    const productsToOrder = cart.map(product => ({
      product_id: product.id,
      quantity: product.quantity,
      size: product.size
    }))

    // Validar pago y guardar billing info

    const res = await placeOrder(addressData, productsToOrder)

    if (!res.ok) {
      setIsPlacingOrder(false)
      setErrorMessage(res.message)
      return
    }

    clearCart()
    router.replace(`/orders/${res.orderId}`)
  }

  if (!loaded) {
    return <SkeletonText />
  }

  return (
    <div className="bg-white">
      <h2 className="text-3xl">Datos de envío</h2>
      <p className="mb-8">Ingrese su dirección.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center">

        {/* Shipping address */}
        <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
          <div className="flex flex-col mb-2">
            <span>Nombres</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
              {... register('firstNameAddress', {required: true})}
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Apellidos</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
              {... register('lastNameAddress', {required: true})}
            />
          </div>  
        </div>

        <div className="flex flex-col mb-2 md:col-span-2">
          <span>Dirección</span>
          <input 
            type="text" 
            className="p-2 border rounded-md bg-gray-200"
            {... register('addressAddress', {required: true})}
          />
        </div>

        <div className="flex flex-col mb-2 md:col-span-2">
          <span>Dirección 2 (opcional)</span>
          <input 
            type="text" 
            className="p-2 border rounded-md bg-gray-200"
            {... register('address2Address')}
          />
        </div>

        <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
          <div className="flex flex-col mb-2">
            <span>País</span>
            <select 
              className="p-2 border rounded-md bg-gray-200"
              {... register('countryAddress', {required: true})}
            >
              <option value=""></option>
              {
                countries.map((country) => (
                  <option key={country.id} value={country.id}>{country.name}</option>    
                ))
              }
            </select>
          </div>

          <div className="flex flex-col mb-2">
            <span>Ciudad</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
              {... register('cityAddress', {required: true})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
          <div className="flex flex-col mb-2">
            <span>Estado o provincia</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
              {... register('stateAddress', {required: true})}
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Código postal</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
              {... register('postalCodeAddress', {required: true})}
            />
          </div>
        </div>

        <div className="flex flex-col mb-2 md:col-span-2">
          <span>Teléfono</span>
          <input 
            type="text" 
            className="p-2 border rounded-md bg-gray-200"
            {... register('phoneAddress', {required: true})}
          />
        </div>

        
        <div className="inline-flex items-center md:col-span-2">
          <label
            className="relative flex cursor-pointer items-center rounded-full p-3"
            htmlFor="checkbox"
          >
            <input
              type="checkbox"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-600 checked:bg-red-600 checked:before:bg-red-600 hover:before:opacity-10"
              id="checkbox"
              {... register('rememberAddress')}
            />
            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </label>

          <span>Guardar dirección</span>
        </div>

        {/* Billing info */}
        <div className="col-span-2 mt-8">
          <h2 className="text-3xl">Facturación</h2>
          <p className="mb-8">Ingrese información de facturación.</p>
        </div>


        <div className="mt-5 mb-2 md:col-span-2">
          <p className="mb-5">
            <span className="text-xs">
              Al hacer click en <strong>completar orden</strong>, estas aceptando nuestros <a href="#" className="underline">términos y condiciones</a>.
            </span>
          </p>

          <p className="text-red-500">{errorMessage}</p>

          <button 
            className={clsx(
              "flex justify-center w-full",
              {
                'btn-primary': !isPlacingOrder && isValid,
                'btn-disabled': isPlacingOrder || !isValid,
              }
            )}
            disabled={isPlacingOrder && !isValid}
            // onClick={onPlaceOrder}
            type="submit"
          >
            Completar orden
          </button>
        </div>

      </form>
    </div>
  )
}
