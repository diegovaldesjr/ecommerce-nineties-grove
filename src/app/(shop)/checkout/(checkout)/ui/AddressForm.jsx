'use client'

import { setCustomerAddress } from "@/actions"
import { countries } from "@/seed/seed-countries"
import { useAddressStore } from "@/store"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

export const AddressForm = ({customerFormData, session, setStep}) => {

  const {handleSubmit, register, formState: {isValid}, reset} = useForm({
    defaultValues: {
      ...customerFormData,
      rememberAddress: false
    }
  })

  const setAddress = useAddressStore(state => state.setAddress)
  const storeAddress = useAddressStore(state => state.address)

  const [isSaveAddress, setIsSaveAddress] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const textContent = {
    title: 'Datos de envío',
    subtitle: 'Ingrese su dirección.',
    firstName: 'Nombres',
    lastName: 'Apellidos',
    address: 'Dirección',
    address2: 'Dirección 2 (opcional)',
    country: 'País',
    city: 'Ciudad',
    state: 'Estado o provincia',
    postalCode: 'Código postal',
    phone: 'Teléfono',
    rememberAddress: 'Guardar dirección',
    btnText: 'Siguiente'
  }

  useEffect(() => {
    if (storeAddress.firstName) {
      reset(storeAddress)
    }
  }, [])

  const onSubmit = async(data) => {
    setIsSaveAddress(true)
    const {rememberAddress, ...addressData} = data
    setAddress(addressData)

    if (rememberAddress) {
      await setCustomerAddress(session.user.id, addressData)
    }

    setStep(2)
  }

  return (
    <>
      <h2 className="text-3xl">{textContent.title}</h2>
      <p className="mb-8">{textContent.subtitle}</p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center">

        {/* Shipping address */}
        <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
          <div className="flex flex-col mb-2">
            <span>{textContent.firstName}</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
              {... register('firstName', {required: true})}
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>{textContent.lastName}</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
              {... register('lastName', {required: true})}
            />
          </div>  
        </div>

        <div className="flex flex-col mb-2 md:col-span-2">
          <span>{textContent.address}</span>
          <input 
            type="text" 
            className="p-2 border rounded-md bg-gray-200"
            {... register('address', {required: true})}
          />
        </div>

        <div className="flex flex-col mb-2 md:col-span-2">
          <span>{textContent.address2}</span>
          <input 
            type="text" 
            className="p-2 border rounded-md bg-gray-200"
            {... register('address2')}
          />
        </div>

        <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
          <div className="flex flex-col mb-2">
            <span>{textContent.country}</span>
            <select 
              className="p-2 border rounded-md bg-gray-200"
              {... register('country', {required: true})}
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
            <span>{textContent.city}</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
              {... register('city', {required: true})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
          <div className="flex flex-col mb-2">
            <span>{textContent.state}</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
              {... register('state', {required: true})}
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>{textContent.postalCode}</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
              {... register('postalCode', {required: true})}
            />
          </div>
        </div>

        <div className="flex flex-col mb-2 md:col-span-2">
          <span>{textContent.phone}</span>
          <input 
            type="text" 
            className="p-2 border rounded-md bg-gray-200"
            {... register('phone', {required: true})}
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

          <span>{textContent.rememberAddress}</span>
        </div>

        <div className="mt-5 mb-2 md:col-span-2">
          <p className="text-red-500">{errorMessage}</p>

          <button 
            className={clsx(
              "flex justify-center w-full",
              {
                'btn-primary': !isSaveAddress && isValid,
                'btn-disabled': isSaveAddress || !isValid,
              }
            )}
            disabled={isSaveAddress && !isValid}
            type="submit"
          >
            {textContent.btnText}
          </button>
        </div>
      </form> 
    </>
  )
}
