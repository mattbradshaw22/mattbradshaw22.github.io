import { Animal } from '../models/animal';

export function animalFixture(overrides: Partial<Animal> = {}): Animal {
  return {
    name: 'Rocky', animalType: 'Dog', breed: 'Labrador', gender: 'Male',
    age: 3, weight: 50, acquisitionDate: '2026-01-01',
    acquisitionLocation: {
      city: 'Boston', state: 'MA', country: 'USA', latitude: 42.36, longitude: -71.06
    },
    trainingStatus: 'Intake', reserved: false, ...overrides
  };
}
