import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchPets() {
  const response = await client.getEntries({ content_type: 'petInfo' });

  return response.items.map((item) => ({
    id: item.sys.id,
    name: item.fields.petName,
    age: item.fields.petAge,
    photo: item.fields.petPhoto?.fields?.file?.url
      ? `https:${item.fields.petPhoto.fields.file.url}` // Ensure "https:" is included
      : '',
  }));
}

