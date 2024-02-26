import { titleFont } from "@/config/fonts"
import Link from "next/link"
import { IoCartOutline, IoPersonOutline } from 'react-icons/io5'

export const TopMenu = () => {
  return (
    <nav className="flex px-5 py-6 justify-between items-center w-full text-white bg-black">
        <div>
            <Link href="/">
                <span className={`${titleFont.className} antialiased font-bold text-4xl`}>Nineties Grove</span>
            </Link>
        </div>

        <div className="flex items-center">
            <Link href="/auth/login" className="mx-2">
                <IoPersonOutline className="w-6 h-6"/>
            </Link>
            <Link href="/cart" className="mx-2">
                <div className="relative">
                    <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-red-600 text-white">3</span>
                    <IoCartOutline className="w-6 h-6"/>
                </div>
            </Link>
        </div>
    </nav>
  )
}
