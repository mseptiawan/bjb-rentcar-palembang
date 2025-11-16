export interface CarData {
  id: number;
  name: string;
  image: string;
  price: string;
  seat: number;
  transmission: "AT" | "MT";
  features: string;
}

const cars: CarData[] = [
  {
    id: 1,
    name: "Avanza New",
    image: "https://www.pngmart.com/files/22/Toyota-Avanza-PNG.png",
    price: "Rp 450.000 / hari",
    seat: 7,
    transmission: "AT",
    features: "AC dingin, Audio, Bisa lepas kunci / driver",
  },
  {
    id: 2,
    name: "Innova Reborn",
    image: "https://www.pngmart.com/files/22/Toyota-Innova-PNG.png",
    price: "Rp 700.000 / hari",
    seat: 7,
    transmission: "AT",
    features: "AC dingin, Kabin luas, Bisa driver",
  },
  {
    id: 3,
    name: "Innova Zenix G Hybrid",
    image: "https://www.pngmart.com/files/23/Toyota-Innova-Zenix-PNG.png",
    price: "Rp 850.000 / hari",
    seat: 7,
    transmission: "AT",
    features: "Hybrid, AC dingin, Audio premium, Driver only",
  },
  {
    id: 4,
    name: "Pajero",
    image: "https://www.pngmart.com/files/22/Mitsubishi-Pajero-PNG.png",
    price: "Rp 1.200.000 / hari",
    seat: 7,
    transmission: "AT",
    features: "SUV premium, AC dingin, Driver only",
  },
  {
    id: 5,
    name: "Fortuner",
    image: "https://www.pngmart.com/files/8/Toyota-Fortuner-PNG-Clipart.png",
    price: "Rp 1.300.000 / hari",
    seat: 7,
    transmission: "AT",
    features: "SUV premium, AC dingin, Driver only",
  },
  {
    id: 6,
    name: "Brio",
    image: "https://www.pngmart.com/files/22/Honda-Brio-PNG-Isolated-HD.png",
    price: "Rp 350.000 / hari",
    seat: 5,
    transmission: "AT",
    features: "Irit, AC dingin, Bisa lepas kunci",
  },
  {
    id: 7,
    name: "Alphard Gen 3",
    image: "https://www.pngmart.com/files/23/Toyota-Alphard-PNG.png",
    price: "Rp 2.000.000 / hari",
    seat: 7,
    transmission: "AT",
    features: "Mobil mewah, AC dingin, Driver only",
  },
  {
    id: 8,
    name: "Hiace Commuter",
    image: "https://www.pngmart.com/files/23/Toyota-Hiace-PNG.png",
    price: "Rp 1.000.000 / hari",
    seat: 15,
    transmission: "MT",
    features: "Mobil pariwisata, AC dingin, Driver only",
  },
  {
    id: 9,
    name: "Hiace Premio",
    image: "https://www.pngmart.com/files/23/Toyota-Hiace-Premio-PNG.png",
    price: "Rp 1.300.000 / hari",
    seat: 12,
    transmission: "AT",
    features: "Premium seat, AC dingin, Driver only",
  },
  {
    id: 10,
    name: "Hilux",
    image: "https://www.pngmart.com/files/22/Toyota-Hilux-PNG-Isolated-HD.png",
    price: "Rp 700.000 / hari",
    seat: 5,
    transmission: "MT",
    features: "Angkut barang, AC dingin, Bisa driver",
  },
];

export default cars;
