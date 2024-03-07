import { Title } from '@/components';
import { AddressForm } from './ui/AddressForm';
import { getCustomer } from '@/actions';
import { auth } from '@/auth.config';

export default async function() { 
  const session = await auth()

  if (!session?.user) {
    return (
      <h3 className='text-5xl'>500 - No hay sesión de usuario.</h3>
    )
  }

  const customer = await getCustomer(session.user.id)
  
  const customerAddress = {
    firstName: customer.shipping.first_name,
    lastName: customer.shipping.last_name,
    address: customer.shipping.address_1,
    address2: customer.shipping.address_2,
    postalCode: customer.shipping.postcode,
    city: customer.shipping.city,
    country: customer.shipping.country,
    state: customer.shipping.state,
    phone: customer.shipping.phone
  }

  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10">
      <div className="w-full xl:w-[1000px] flex flex-col justify-center text-left mt-10">
        
        <Title title="Dirección" subtitle="Dirección de entrega"/>
        <AddressForm customerAddress={customerAddress}/>

      </div>

    </div>
  );
}