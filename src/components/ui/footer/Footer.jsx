import { titleFont } from "@/config/fonts"
import Link from "next/link"
import { IoLogoInstagram, IoLogoTiktok } from "react-icons/io5"

export const Footer = () => {
  const textContent = {
    title: 'Nineties Grove',
    privacy: 'Privacidad & Legal'
  }

  return (
    <div className="flex w-full flex-col items-center md:flex-row justify-center md:justify-between text-xs my-8 px-5">
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>{textContent.title}</span>
          <span>© {new Date().getFullYear()}</span>
        </Link>

        <Link href="/" className="mx-3">
          {textContent.privacy}
        </Link>
      </div>
      
      <div className="flex mt-4 md:mt-0">
        <a href="#" className="mr-3">
          <IoLogoInstagram size={28} className="hover:text-red-600"/>
        </a>
        <a href="#">
          <IoLogoTiktok size={28} className="hover:text-red-600"/>
        </a>
      </div>
    </div>
  )
}
