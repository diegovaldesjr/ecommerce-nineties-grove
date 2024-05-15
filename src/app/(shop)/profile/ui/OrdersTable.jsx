import Link from "next/link"
import { IoCardOutline } from "react-icons/io5"

export const OrdersTable = ({orders = []}) => {
  const textContent = {
    tableTitles: {
      id: '#ID',
      name: 'Nombre completo',
      status: 'Estado',
      options: 'Opciones'
    },
    tableBody: {
      statusPaid: 'Pagado',
      statusNotPaid: 'No Pagada',
      order: 'Ver orden'
    }
  }

  return (
    <div className="my-10 border-4 border-black">
      <table className="min-w-full">
        <thead className="bg-black border-b">
          <tr>
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4 text-left"
            >
              {textContent.tableTitles.id}
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4 text-left"
            >
              {textContent.tableTitles.name}
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4 text-left"
            >
              {textContent.tableTitles.status}
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4 text-left"
            >
              {textContent.tableTitles.options}
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {order.id}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {order.shipping?.first_name} {order.shipping?.last_name}
              </td>
              <td className="flex items-center text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {order.status !== 'pending' ? (
                  <>
                    <IoCardOutline className="text-green-800" />
                    <span className="mx-2 text-green-800">{textContent.tableBody.statusPaid}</span>
                  </>
                ) : (
                  <>
                    <IoCardOutline className="text-red-800" />
                    <span className="mx-2 text-red-800">{textContent.tableBody.statusNotPaid}</span>
                  </>
                )}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 ">
                <Link href={`/orders/${ order.id }`} className="hover:underline">
                {textContent.tableBody.order}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
