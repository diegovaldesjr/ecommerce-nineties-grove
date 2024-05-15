import clsx from "clsx"
import { IoCardOutline } from "react-icons/io5"

export const OrderStatus = ({status}) => {
  const textContent = {
    paid: 'Pagado',
    notPaid: 'Procesando'
  }
  
  return (
    <div className={
        clsx(
          "flex items-center py-2 px-3.5 text-xs font-bold text-white mb-5",
          {
            'bg-red-500': !status,
            'bg-green-700': status
          }
        )
      }
    >
      <IoCardOutline size={30}/>
      <span className="mx-2">{status ? textContent.paid : textContent.notPaid}</span>
    </div>
  )
}
