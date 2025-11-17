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
    image: "/src/assets/images/innova-reborn.png",
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
    image: "/src/assets/images/innova-zenix-g.png",
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
    image: "/src/assets/images/pajero.png",
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
    image: "/src/assets/images/fortuner.png",
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
    image: "/src/assets/images/hiace-commuter.png",
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
    image: "/src/assets/images/hilux.png",
    price: "Rp 700.000 / hari",
    seat: 5,
    transmission: "MT",
    features: ["AC dingin", "Lepas kunci / Driver"],
    year: 2022,
    category: "Pickup",
  },
  {
    id: 11,
    name: "Triton",
    image: "/src/assets/images/triton.png",
    price: "Rp 1.100.000 / hari",
    seat: 5,
    transmission: "MT",
    features: ["AC dingin", "Lepas kunci / Driver"],
    year: 2023,
    category: "Pickup",
  },
  {
    id: 12,
    name: "Alphard Gen 4",
    image: "/src/assets/images/alphard-gen-4.png",
    price: "Rp 2.500.000 / hari",
    seat: 7,
    transmission: "AT",
    features: ["AC dingin", "Lepas kunci / Driver", "Sunroof"],
    year: 2024,
    category: "Luxury",
  },
  {
    id: 13,
    name: "Pajero-44",
    image: "/src/assets/images/pajero-44.png",
    price: "Rp 1.350.000 / hari",
    seat: 7,
    transmission: "AT",
    features: ["AC dingin", "Lepas kunci / Driver"],
    year: 2023,
    category: "SUV",
  },
  {
    id: 14,
    name: "Land Cruiser",
    image: "/src/assets/images/land-cruiser.png",
    price: "Rp 2.200.000 / hari",
    seat: 7,
    transmission: "AT",
    features: ["AC dingin", "Lepas kunci / Driver", "4WD"],
    year: 2023,
    category: "SUV",
  },
  {
    id: 15,
    name: "Innova Zenix Q Modelista",
    image: "/src/assets/images/innova-zenix-q-modelista.png",
    price: "Rp 900.000 / hari",
    seat: 7,
    transmission: "AT",
    features: ["AC dingin", "Lepas kunci / Driver"],
    year: 2023,
    category: "MPV",
  },
  {
    id: 16,
    name: "Calya",
    image: "/src/assets/images/calya.png",
    price: "Rp 400.000 / hari",
    seat: 5,
    transmission: "AT",
    features: ["AC dingin", "Lepas kunci / Driver"],
    year: 2023,
    category: "Hatchback",
  },
];

export default cars;
