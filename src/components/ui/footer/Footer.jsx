import { titleFont } from "@/config/fonts"
import Link from "next/link"
import { IoLogoInstagram, IoLogoTiktok } from "react-icons/io5"

export const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center md:flex-row justify-center md:justify-between text-xs mb-8 px-5">
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>Nineties Groove</span>
          <span>© {new Date().getFullYear()}</span>
        </Link>

        <Link href="/" className="mx-3">
          Privacidad & Legal
        </Link>
      </div>
      
      <div className="flex mt-4 md:mt-0">
        <a href="#" className="mr-2">
          <IoLogoInstagram size={24} />
        </a>
        <a href="#">
          <IoLogoTiktok size={24} />
        </a>
      </div>
    </div>
  )
}
