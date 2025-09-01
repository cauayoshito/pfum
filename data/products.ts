export type Product = {
  id: string;
  name: string;
  collection: 'dream'|'arabe'|'originais'|'splash'|'lotion';
  family?: string;
  intensity?: 'suave'|'media'|'alta';
  gender?: 'feminino'|'masculino'|'unissex';
  volume?: string;
  price: number;
  rating?: number;
};

export const PRODUCTS: Product[] = [
  { id: 'dream-009', name: 'Dream Nº009', collection: 'dream', family:'floral ambarado', intensity:'media', gender:'feminino', volume:'50ml', price:129.90, rating: 4.8 },
  { id: 'arabe-oud', name: 'Árabe Oud Intense', collection: 'arabe', family:'amadeirado especiado', intensity:'alta', gender:'masculino', volume:'50ml', price:149.90, rating: 4.9 },
  { id: 'splash-adorable', name: 'Body Splash Adorable', collection: 'splash', family:'floral', intensity:'suave', volume:'250ml', price:59.90, rating: 4.7 },
  { id: 'lotion-velvet', name: 'Body Lotion Velvet', collection: 'lotion', volume:'200ml', price:69.90, rating: 4.6 },
  { id: 'dream-007', name: 'Dream Nº007', collection: 'dream', family:'frutado floral', intensity:'media', gender:'unissex', volume:'50ml', price:129.90, rating: 4.5 },
  { id: 'orig-sense', name: 'Original Sense', collection: 'originais', family:'cítrico ambarado', intensity:'media', gender:'unissex', volume:'50ml', price:139.90, rating: 4.6 },
];
