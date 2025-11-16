import cars from "../data/cars";
import CarCard from "../components/CarCard";

export default function Cars() {
  return (
    <div className="font-outfit">
      <h1 className="text-2xl text-center m-8   font-semibold text-gray-900 mb-6">
        Pilihan Armada di BJB Rentcar Palembang
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
