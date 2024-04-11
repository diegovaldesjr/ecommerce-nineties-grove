'use client'

import { SkeletonText } from "@/components"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { AddressForm } from "./AddressForm"
import { PaymentForm } from "./PaymentForm"

export const PlaceOrderForm = ({customerFormData}) => {

  const { data: session } = useSession({
    required: true
  })

  const [loaded, setLoaded] = useState(false)
  const [step, setStep] = useState(1)

  useEffect(()=> {
    setLoaded(true)
  }, [])


  if (!loaded) {
    return <SkeletonText />
  }

  return (
    <div className="bg-white">
      {
        step === 1 && (
          <AddressForm 
          customerFormData={customerFormData} 
          session={session}
          setStep={setStep}/>
        )
      }
      {
        step === 2 && (
          <PaymentForm />
        )
      }
    </div>
  )
}
