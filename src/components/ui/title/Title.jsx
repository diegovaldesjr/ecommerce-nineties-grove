import { titleFont } from "@/config/fonts"

export const Title = ({title, subtitle, underline = false, className}) => {
  return (
    <div className={`${className}`}>
      <h1 className={`${titleFont.className} antialiased text-4xl font-semibold`}>
        {title}
        {
          underline && (
            <div className="w-full h-1.5 bg-red-600 mt-2 mb-10" />
          )
        }
      </h1>

      {
        subtitle && (
          <h3 className="text-xl mb-10">{subtitle}</h3>
        )
      }
    </div>
  )
}