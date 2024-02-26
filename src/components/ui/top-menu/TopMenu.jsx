import { titleFont } from "@/config/fonts"
import Link from "next/link"
import { IoCartOutline, IoPersonOutline } from 'react-icons/io5'

export const TopMenu = () => {
  return (
    <nav className="flex px-5 py-8 justify-between items-center w-full text-white bg-slate-900">
        <div>
            <Link href="/">
                <span className={`${titleFont.className} antialiased font-bold text-xl`}>Nineties Grove</span>
            </Link>
        </div>

        <div className="flex items-center">
            <Link href="/auth/login" className="mx-2">
                <IoPersonOutline className="w-5 h-5"/>
            </Link>
            <Link href="/cart" className="mx-2">
                <div className="relative">
                    <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">3</span>
                    <IoCartOutline className="w-5 h-5"/>
                </div>
            </Link>
        </div>
    </nav>
  )
}
