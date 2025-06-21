import Image from 'next/image';
export default function MaterialCard({ material }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="relative w-full h-[200px]">
        <Image src={material.image_url} alt={material.nome} fill style={{ objectFit: 'cover' }} />
      </div>
      <h3 className="mt-2 text-lg font-semibold">{material.nome}</h3>
      <p className="text-gray-600">{material.descrizione}</p>
    </div>
  );
}