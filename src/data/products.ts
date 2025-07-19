import { Product } from "@/components/ProductCard";
import kitMinnie from "@/assets/kit-minnie.jpg";
import kitFlash from "@/assets/kit-flash.jpg";
import kitFutebol from "@/assets/kit-futebol.jpg";
import kitLiloStitch from "@/assets/kit-lilo-stitch.jpg";

export const products: Product[] = [
  // MAIS ALUGADOS
  {
    id: "minnie",
    name: "Kit Pegue e Monte Minnie",
    price: 290,
    image: kitMinnie,
    category: "Infantil Feminino",
    badge: "Mais Alugado",
    rating: 5,
  },
  {
    id: "tardezinha",
    name: "Kit pegue e monte Tardezinha",
    price: 280,
    image: kitMinnie, // Placeholder - substituir por imagem real
    category: "Festa Adulto",
    badge: "Mais Alugado",
    rating: 5,
  },
  {
    id: "futebol",
    name: "Kit Pegue e Monte Futebol",
    price: 280,
    image: kitFutebol,
    category: "Infantil Masculino",
    badge: "Mais Alugado",
    rating: 5,
  },
  {
    id: "lilo-stitch",
    name: "KIT PEGUE E MONTE LILO & STITCH",
    price: 280,
    image: kitLiloStitch,
    category: "Temáticos",
    badge: "Mais Alugado",
    rating: 5,
  },
  {
    id: "atletico-3",
    name: "Kit Pegue e Monte Atlético 3",
    price: 300,
    image: kitFutebol, // Placeholder
    category: "Infantil Masculino",
    badge: "Mais Alugado",
    rating: 4,
  },

  // LANÇAMENTOS
  {
    id: "flash",
    name: "Locação kit pegue e monte Flash",
    price: 200,
    originalPrice: 260,
    image: kitFlash,
    category: "Infantil Masculino",
    badge: "Lançamento",
    rating: 5,
  },
  {
    id: "dino-baby",
    name: "Kit Pegue e Monte Dino Baby",
    price: 330,
    image: kitMinnie, // Placeholder
    category: "Infantil Masculino",
    badge: "Lançamento",
    rating: 5,
  },
  {
    id: "b-day",
    name: "Kit Pegue e Monte B-Day",
    price: 300,
    image: kitMinnie, // Placeholder
    category: "Festa Adulto",
    badge: "Lançamento",
    rating: 4,
  },
  {
    id: "floral-adulto",
    name: "Kit Pegue e Monte Floral Adulto",
    price: 300,
    image: kitMinnie, // Placeholder
    category: "Festa Adulto",
    badge: "Lançamento",
    rating: 4,
  },

  // INFANTIL FEMININO
  {
    id: "barbie",
    name: "Kit Pegue e Monte Barbie",
    price: 280,
    image: kitMinnie, // Placeholder
    category: "Infantil Feminino",
    rating: 5,
  },
  {
    id: "moana-adulta",
    name: "Kit Pegue e Monte Moana Adulta",
    price: 280,
    image: kitMinnie, // Placeholder
    category: "Infantil Feminino",
    rating: 4,
  },
  {
    id: "ariel",
    name: "Kit Pegue e Monte Ariel",
    price: 280,
    image: kitMinnie, // Placeholder
    category: "Infantil Feminino",
    rating: 5,
  },
  {
    id: "branca-neve",
    name: "Kit Pegue e Monte Branca de Neve",
    price: 310,
    image: kitMinnie, // Placeholder
    category: "Infantil Feminino",
    rating: 4,
  },
  {
    id: "sereia",
    name: "Kit Pegue e Monte Sereia",
    price: 280,
    image: kitMinnie, // Placeholder
    category: "Infantil Feminino",
    rating: 5,
  },
  {
    id: "bailarina",
    name: "Locação Pegue e Monte Bailarina",
    price: 320,
    image: kitMinnie, // Placeholder
    category: "Infantil Feminino",
    rating: 4,
  },
  {
    id: "minnie-rosa",
    name: "Kit Pegue e Monte Minnie Rosa",
    price: 280,
    image: kitMinnie, // Placeholder
    category: "Infantil Feminino",
    badge: "Lançamento",
    rating: 5,
  },

  // INFANTIL MASCULINO
  {
    id: "hotwheels",
    name: "Kit Pegue e Monte Hotwheels",
    price: 320,
    image: kitFlash, // Placeholder
    category: "Infantil Masculino",
    rating: 5,
  },
  {
    id: "hulk",
    name: "Kit Pegue e Monte Hulk",
    price: 280,
    image: kitFlash, // Placeholder
    category: "Infantil Masculino",
    rating: 4,
  },
  {
    id: "homem-aranha-baby",
    name: "Kit Pegue e Monte Homem Aranha Baby",
    price: 200,
    image: kitFlash, // Placeholder
    category: "Infantil Masculino",
    rating: 5,
  },
  {
    id: "naruto",
    name: "Kit Pegue e Monte Naruto",
    price: 280,
    image: kitFlash, // Placeholder
    category: "Infantil Masculino",
    rating: 4,
  },
  {
    id: "mickey",
    name: "Kit Pegue e Monte Mickey",
    price: 280,
    image: kitFlash, // Placeholder
    category: "Infantil Masculino",
    rating: 5,
  },
  {
    id: "vingadores",
    name: "Kit Pegue e Monte Vingadores",
    price: 280,
    image: kitFlash, // Placeholder
    category: "Infantil Masculino",
    rating: 5,
  },
  {
    id: "astronauta",
    name: "Kit Pegue e Monte Astronauta",
    price: 280,
    image: kitFlash, // Placeholder
    category: "Infantil Masculino",
    rating: 4,
  },

  // TEMÁTICOS/DIVERSOS
  {
    id: "motocross",
    name: "Kit Pegue e Monte Motocross",
    price: 200,
    originalPrice: 280,
    image: kitFutebol, // Placeholder
    category: "Temáticos",
    badge: "Promoção",
    rating: 4,
  },
  {
    id: "roblox",
    name: "Kit pegue e monte Roblox",
    price: 280,
    image: kitLiloStitch, // Placeholder
    category: "Temáticos",
    rating: 5,
  },
  {
    id: "minecraft",
    name: "Kit Pegue e Monte Minecraft",
    price: 280,
    image: kitLiloStitch, // Placeholder
    category: "Temáticos",
    rating: 5,
  },
  {
    id: "bob-esponja",
    name: "Kit Pegue e Monte Bob Esponja",
    price: 280,
    image: kitLiloStitch, // Placeholder
    category: "Temáticos",
    rating: 4,
  },
  {
    id: "baby-shark",
    name: "Kit Pegue e Monte Baby Shark",
    price: 280,
    image: kitLiloStitch, // Placeholder
    category: "Temáticos",
    rating: 5,
  },
  {
    id: "galinha-pintadinha",
    name: "Kit Pegue e Monte Galinha Pintadinha",
    price: 280,
    image: kitLiloStitch, // Placeholder
    category: "Temáticos",
    rating: 4,
  },
];

export const categories = [
  "Todos",
  "Infantil Feminino",
  "Infantil Masculino", 
  "Festa Adulto",
  "Chá Revelação",
  "Chá de Bebê",
  "Temáticos",
];

export const priceRanges = [
  { label: "Todos os preços", min: 0, max: Infinity },
  { label: "R$ 200 - R$ 250", min: 200, max: 250 },
  { label: "R$ 250 - R$ 300", min: 250, max: 300 },
  { label: "R$ 300+", min: 300, max: Infinity },
];

export const sortOptions = [
  { label: "Mais Popular", value: "popular" },
  { label: "Menor Preço", value: "price-asc" },
  { label: "Maior Preço", value: "price-desc" },
  { label: "Lançamentos", value: "newest" },
];