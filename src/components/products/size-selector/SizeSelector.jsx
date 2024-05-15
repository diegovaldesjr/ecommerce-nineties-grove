import { clsx } from 'clsx';

export const SizeSelector = ({availableSizes, selectedSize = null, onSizeChanged}) => {
  const title = 'Tallas disponibles'

  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">{title}</h3>

      <div className="flex">
        {
          availableSizes.map(size => (
            <button 
              key={size}
              onClick={ () => onSizeChanged(size)}
              className={
                clsx(
                  "mx-2 border-4 px-4 py-2 hover:border-black text-lg",
                  {
                    'border-black': size === selectedSize
                  },
                  {
                    'border-white': size !== selectedSize
                  }
                )
              }
            >
              {size}
            </button>
          ))
        }
      </div>
    </div>
  )
}
