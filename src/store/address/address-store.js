import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAddressStore = create()(
  persist(
    (set, get) => ({
      address: {
        firstName: '',
        lasName: '',
        address: '',
        address2: '',
        postalCode: '',
        city: '',
        country: '',
        state: '',
        phone: ''
      },

      setAddress: (address) => {
        set({address})
      }
      
    }),
    {
      name: 'address-storage'
    }
  )
  
)
