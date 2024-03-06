import Link from 'next/link';
import { Title } from '@/components';
import { AddressForm } from './ui/AddressForm';

export default function() {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10">
      <div className="w-full xl:w-[1000px] flex flex-col justify-center text-left mt-10">
        
        <Title title="Dirección" subtitle="Dirección de entrega"/>
        <AddressForm />

      </div>

    </div>
  );
}