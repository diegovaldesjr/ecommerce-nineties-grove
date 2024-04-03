import Link from "next/link";

import { ProductsInCart } from "./(checkout)/ui/ProductsInCart";
import { PlaceOrderForm } from "./(checkout)/ui/PlaceOrderForm";
import { auth } from "@/auth.config";
import { getCustomer } from "@/actions";

export default async function() {
  const session = await auth()

  if (!session?.user) {
    return (
      <h3 className='text-5xl'>500 - No hay sesión de usuario.</h3>
    )
  }

  const customer = await getCustomer(session.user.id)
  
  const customerFormData = {
    firstNameAddress: customer?.shipping?.first_name,
    lastNameAddress: customer?.shipping?.last_name,
    addressAddress: customer?.shipping?.address_1,
    address2Address: customer?.shipping?.address_2,
    postalCodeAddress: customer?.shipping?.postcode,
    cityAddress: customer?.shipping?.city,
    countryAddress: customer?.shipping?.country,
    stateAddress: customer?.shipping?.state,
    phoneAddress: customer?.shipping?.phone,
    
    firstNameBilling: customer?.billing?.first_name,
    lastNameBilling: customer?.billing?.last_name,
    addressBilling: customer?.billing?.address_1,
    address2Billing: customer?.billing?.address_2,
    postalCodeBilling: customer?.billing?.postcode,
    cityBilling: customer?.billing?.city,
    countryBilling: customer?.billing?.country,
    stateBilling: customer?.billing?.state,
    phoneBilling: customer?.billing?.phone,
    emailBilling: customer?.billing?.email
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">

      {/* Carrito */}
      <div className="flex flex-col bg-gray-100 p-8 md:p-16 md:order-last">
        <h2 className="mb-2 text-3xl">Resumen de orden</h2>
        <span className="mb-5">
          Si quieres hacer un ajuste en tus productos puedes volver al carrito <Link href="/cart" className="underline">aqui</Link>.
        </span>

        <div className="w-full h-0.5 rounded bg-black mb-5" />

        <ProductsInCart className="md:pr-16" />
      </div>

      {/* Checkout */}
      <div className="p-8 md:p-16">
        <PlaceOrderForm customerFormData={customerFormData} />
      </div>

    </div>
  );
}
