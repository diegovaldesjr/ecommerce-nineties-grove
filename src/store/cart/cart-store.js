import { create } from "zustand";
import { persist } from "zustand/middleware"

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      clearCart: () => {
        set({cart: []})
      },

      getTotalItems: () => {
        const {cart} = get()
        return cart.reduce( (total, item) => total + item.quantity, 0 )
      },

      getSummaryInformation: () => {
        const {cart} = get()

        const subTotal = cart.reduce( (subTotal, product) => (product.quantity * product.price) + subTotal, 0)
        const itemsInCart = cart.reduce( (total, item) => total + item.quantity, 0 )

        return {
          itemsInCart: itemsInCart,
          subTotal: subTotal
        }
      },
  
      addProductToCart: (product) => {
        const { cart } = get()
  
        const productInCart = cart.some(
          (item) => item.id === product.id && item.size === product.size
        )
  
        if (!productInCart) {
          set({ cart: [...cart, product] })
          return
        }
  
        const updatedCartProducts = cart.map( (item) => {
  
          if (item.id === product.id && item.size === product.size) {
            return {...item, quantity: item.quantity + product.quantity}
          }
  
          return item
        })
  
        set({ cart: updatedCartProducts })
      },

      updateProductQuantity: (product, quantity) => {
        const { cart } = get()

        const updatedCartProducts = cart.map( (item) => {
  
          if (item.id === product.id && item.size === product.size) {
            return {...item, quantity: quantity}
          }
  
          return item
        })
  
        set({ cart: updatedCartProducts })
      },

      removeProduct: (product) => {
        const { cart } = get()

        const updatedCartProducts = cart.filter( 
          (item) => item.id !== product.id || item.size !== product.size
        )
        set({ cart: updatedCartProducts })
      }

    }), 
    {
      name:'shopping-cart'
    }
  )
)
