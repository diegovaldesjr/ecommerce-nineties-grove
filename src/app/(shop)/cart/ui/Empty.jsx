import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export const Empty = () => {
  const textContent = {
    title: 'Tu carrito está vacío',
    subtitle: 'Agregue artículos a su carrito',
    back: 'Volver'
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-[800px]">
      <IoCartOutline size={80} className="mb-8" />
      <h1 className="text-4xl font-bold mb-4">{textContent.title}</h1>
      <span className="mb-8">{textContent.subtitle}</span>
      <Link href="/" className="btn-primary text-center">
        {textContent.back}
      </Link>
    </div>
  );
}
