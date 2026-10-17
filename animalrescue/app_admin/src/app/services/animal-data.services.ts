/**
 * Provides HTTP access to the rescue animal REST API.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Animal, NearbyAnimalResponse } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalDataService {

  private readonly animalsUrl = '/api/animals';

  constructor(private http: HttpClient) { }

  // GET: /api/animals
  // Retrieves all rescue animal records.
  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalsUrl);
  }

  // POST: /api/animals
  // Adds a new rescue animal record.
  addAnimal(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.animalsUrl, animal);
  }

  // GET: /api/animals/name/:name
  // Retrieves a specific rescue animal record by name.
  getAnimalByName(name: string): Observable<Animal> {
    return this.http.get<Animal>(`${this.animalsUrl}/name/${encodeURIComponent(name)}`);
  }

  // GET: /api/animals/nearby/:zip
  // Retrieves available rescue animals ranked by distance
  // from the user's ZIP code.
  getNearbyAnimals(zip: string): Observable<NearbyAnimalResponse> {
    return this.http.get<NearbyAnimalResponse>(
      `${this.animalsUrl}/nearby/${encodeURIComponent(zip)}`
    );
  }
}