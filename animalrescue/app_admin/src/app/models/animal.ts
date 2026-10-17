/**
 * Defines the structure of rescue animal data exchanged
 * between the Angular application and the Express REST API.
 */

export interface AcquisitionLocation {
  city: string;
  state?: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface Animal {
  _id?: string;

  name: string;
  animalType: 'Dog' | 'Monkey';

  breed: string;
  species?: string;

  gender: string;
  age: number;
  weight: number;

  acquisitionDate: string;
  acquisitionLocation: AcquisitionLocation;

  trainingStatus:
    | 'Intake'
    | 'In Training'
    | 'Phase 2'
    | 'Phase 3'
    | 'Phase 4'
    | 'Completed'
    | 'In Service';

  reserved: boolean;

  graduationDate?: string | null;
  description?: string;
  imagePath?: string;

  tailLength?: number;
  height?: number;
  bodyLength?: number;
}

// Represents an animal returned by the nearby search algorithm.
// These values are calculated at runtime and are not stored in MongoDB.
export interface NearbyAnimal extends Animal {
  distanceMiles: number;
  rank: number;
  resultPosition: number;
}

// Represents the latitude and longitude of the user's ZIP code.
export interface UserLocation {
  latitude: number;
  longitude: number;
}

// Represents the complete response returned by
// GET /api/animals/nearby/:zip.
export interface NearbyAnimalResponse {
  zip: string;
  userLocation: UserLocation;
  resultCount: number;
  animals: NearbyAnimal[];
}