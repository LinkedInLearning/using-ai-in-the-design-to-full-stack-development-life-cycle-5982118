import { fetchPets } from "@/lib/contentful";
import Image from "next/image";

export default async function Body() {
  const pets = await fetchPets()

  return (
    <section className="body" data-testid="body">
      <div className="body-container">
        <div className="body-content">
          <div className="body-text pets">
            <h1 className="body-title" role="heading">Adoptable Pets</h1>
            <div className="pet-list">
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
          </div>
        </div>
      </div>
    </section>
  );
}