import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"

export const QuantitySelector = ({quantity, onQuantityChanged, className}) => {

    const onValueChanged = (value) => {
        if (quantity + value < 1 ) return
        onQuantityChanged(quantity + value)
    }
    
  return (
    <div className={`flex ${className}`}>
      <button onClick={() => onValueChanged(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>

      <span className="w-20 mx-3 px-5 border-2 border-black bg-gray-100 text-center">
        {quantity}
        </span>

      <button onClick={() => onValueChanged(1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  )
}
