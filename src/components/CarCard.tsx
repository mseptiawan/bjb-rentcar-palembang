import { CarData } from "../data/cars";

export default function CarCard({ car }: { car: CarData }) {
  return (
    <div className="border border-gray-200 p-4 rounded-xl shadow hover:shadow-lg transition">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-40 object-cover rounded-lg"
      />

      <h3 className="text-lg font-bold text-gray-900 mt-3">{car.name}</h3>

      <p className="text-gray-700 text-sm mt-1">
        {car.transmission} • {car.seat} Seat
      </p>

      <p className="font-semibold text-yellow-500 text-lg mt-2">{car.price}</p>

      <p className="text-gray-600 text-sm mt-2">{car.features}</p>
    </div>
  );
}
