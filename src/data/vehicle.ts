export interface IVehicle {
  id: number;
  brand: string;
  range: string;
  passengers: number;
  gearbox: 'automatico' | 'mecanico';
  description: string;
  image: string;
}
