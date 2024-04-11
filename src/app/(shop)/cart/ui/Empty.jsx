import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export const Empty = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[800px]">
      <IoCartOutline size={80} className="mb-8" />
      <h1 className="text-4xl font-bold mb-4">Tu carrito está vacío</h1>
      <span className="mb-8">Agregue artículos a su carrito</span>
      <Link href="/" className="btn-primary text-center">
        Volver
      </Link>
    </div>
  );
}
