import cars from "../data/cars";
import CarCard from "../components/CarCard";

export default function Cars() {
  return (
    <div className="font-outfit">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Daftar Mobil</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
