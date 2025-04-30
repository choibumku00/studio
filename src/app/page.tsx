'use client';

import Link from 'next/link';

const categories = [
  {
    name: 'flag',
    image: 'https://picsum.photos/400/300?random=1',
    description: 'Test your knowledge of national flags.',
  },
  {
    name: 'actors',
    image: 'https://picsum.photos/400/300?random=2',
    description: 'Identify actors from their photos.',
  },
  {
    name: 'words',
    image: 'https://picsum.photos/400/300?random=3',
    description: 'Find similar words.',
  },
  {
    name: 'category4',
    image: 'https://picsum.photos/400/300?random=4',
    description: 'Description for category 4.',
  },
  {
    name: 'category5',
    image: 'https://picsum.photos/400/300?random=5',
    description: 'Description for category 5.',
  },
  {
    name: 'category6',
    image: 'https://picsum.photos/400/300?random=6',
    description: 'Description for category 6.',
  },
  {
    name: 'category7',
    image: 'https://picsum.photos/400/300?random=7',
    description: 'Description for category 7.',
  },
  {
    name: 'category8',
    image: 'https://picsum.photos/400/300?random=8',
    description: 'Description for category 8.',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Similarity Game</h1>

      {/* Category Selection with Images */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat) => (
          <Link key={cat.name} href={`/game/${cat.name}`} className="block">
            <div className="relative rounded-md shadow-md overflow-hidden transition-transform hover:scale-105">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <h2 className="text-lg font-semibold text-white">{cat.name}</h2>
              </div>
            </div>
            <p className="text-sm mt-2">{cat.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
