export interface CarData {
  id: number;
  name: string;
  image: string;
  price: string;
  seat: number;
  transmission: "AT" | "MT";
  features: string[];
  year: number;
  category:
    | "Sedan"
    | "SUV"
    | "MPV"
    | "Hatchback"
    | "Minibus"
    | "Pickup"
    | "Luxury";
}

const cars: CarData[] = [
  {
    id: 1,
    name: "Avanza New",
    image: "/src/assets/images/avanza-new.png",
    price: "Rp 450.000 / hari",
    seat: 7,
    transmission: "AT",
    features: ["AC dingin", "Lepas kunci / Driver"],
    year: 2023,
    category: "MPV",
  },
  {
    id: 2,
    name: "Innova Reborn",
    image: "/src/assets/images/innova-reborn.jpg",
    price: "Rp 700.000 / hari",
    seat: 7,
    transmission: "AT",
    features: ["AC dingin", "Lepas kunci / Driver"],
    year: 2023,
    category: "MPV",
  },
  {
    id: 3,
    name: "Innova Zenix G Hybrid",
    image: "/src/assets/images/innova-zenix-g.jpeg",
    price: "Rp 850.000 / hari",
    seat: 7,
    transmission: "AT",
    features: ["AC dingin", "Lepas kunci / Driver"],
    year: 2023,
    category: "MPV",
  },
  {
    id: 4,
    name: "Pajero",
    image: "/src/assets/images/pajero.jpg",
    price: "Rp 1.200.000 / hari",
    seat: 7,
    transmission: "AT",
    features: ["AC dingin", "Lepas kunci / Driver"],
    year: 2022,
    category: "SUV",
  },
  {
    id: 5,
    name: "Fortuner",
    image: "/src/assets/images/fortuner.jpg",
    price: "Rp 1.300.000 / hari",
    seat: 7,
    transmission: "AT",
    features: ["AC dingin", "Lepas kunci / Driver"],
    year: 2022,
    category: "SUV",
  },
  {
    id: 6,
    name: "Brio",
    image: "/src/assets/images/brio.png",
    price: "Rp 350.000 / hari",
    seat: 5,
    transmission: "AT",
    features: ["AC dingin", "Lepas kunci / Driver"],
    year: 2023,
    category: "Hatchback",
  },
  {
    id: 7,
    name: "Alphard Gen 3",
    image: "/src/assets/images/alphard-gen-3.png",
    price: "Rp 2.000.000 / hari",
    seat: 7,
    transmission: "AT",
    features: ["AC dingin", "Lepas kunci / Driver"],
    year: 2023,
    category: "Luxury",
  },
  {
    id: 8,
    name: "Hiace Commuter",
    image: "/src/assets/images/hiace-commuter.jpg",
    price: "Rp 1.000.000 / hari",
    seat: 15,
    transmission: "MT",
    features: ["AC dingin", "Lepas kunci / Driver"],
    year: 2022,
    category: "Minibus",
  },
  {
    id: 9,
    name: "Hiace Premio",
    image: "/src/assets/images/hiace-premio.png",
    price: "Rp 1.300.000 / hari",
    seat: 12,
    transmission: "AT",
    features: ["AC dingin", "Lepas kunci / Driver"],
    year: 2023,
    category: "Minibus",
  },
  {
    id: 10,
    name: "Hilux",
    image: "/src/assets/images/hiluxx.png",
    price: "Rp 700.000 / hari",
    seat: 5,
    transmission: "MT",
    features: ["AC dingin", "Lepas kunci / Driver"],
    year: 2022,
    category: "Pickup",
  },
];

export default cars;
