import { fetchPets } from '@/lib/contentful';
import Image from 'next/image';

export const revalidate = 60; // ISR: Revalidate every 60 seconds

export default async function PetsPage() {
  const pets = await fetchPets();

  return (
    <main>
      <h1>Adoptable Pets</h1>
      <div style={{ display: 'grid', gap: '20px' }}>
        {pets.map((pet) => (
          <div key={pet.id}>
            <Image
              src={pet.photo}
              alt={pet.name}
              width={300}
              height={300}
              priority
            />
            <h2>{pet.name}</h2>
            <p>Age: {pet.age}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
