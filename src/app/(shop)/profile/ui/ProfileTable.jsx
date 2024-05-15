export const ProfileTable = async({user}) => {
  const textContent = {
    firtsName: 'Nombre',
    lastName: 'Apellidos',
    email: 'Email',
    phone: 'Teléfono',
    address: 'Dirección',
  }

  return (
    <div className="border-4 border-black p-4 mt-8">
      <div className="flex mb-4">
        <p className="font-bold mr-4">{textContent.firtsName}</p>
        <p className="font-light">{user.first_name}</p>
      </div>

      <div className="flex mb-4">
        <p className="font-bold mr-4">{textContent.lastName}</p>
        <p className="font-light">{user.last_name}</p>
      </div>

      <div className="flex mb-4">
        <p className="font-bold mr-4">{textContent.email}</p>
        <p className="font-light">{user.email}</p>
      </div>

      <div className="flex mb-4">
        <p className="font-bold mr-4">{textContent.phone}</p>
        <p className="font-light">{user.phone}</p>
      </div>

      <div className="flex mb-4">
        <p className="font-bold mr-4">{textContent.address}</p>
        <p className="font-light">
          {`${user.shipping.address_1} ${user.shipping.addres_2 ? user.shipping.addres_2 : ''}, ${user.shipping.city}, ${user.shipping.postcode}, ${user.shipping.state ? user.shipping.state : ''}, ${user.shipping.country}`}
        </p>
      </div>
    </div>
  )
}
