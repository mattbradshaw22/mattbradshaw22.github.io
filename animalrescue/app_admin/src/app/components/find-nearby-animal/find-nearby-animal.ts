// Provides the Angular interface for finding available rescue animals
// near a user's ZIP code.

import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { AnimalDataService } from '../../services/animal-data.services';
import { NearbyAnimal } from '../../models/animal';
import { AnimalCard } from '../animal-card/animal-card';

@Component({
  selector: 'app-find-nearby-animal',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AnimalCard
  ],
  templateUrl: './find-nearby-animal.html',
  styleUrl: './find-nearby-animal.css'
})
export class FindNearbyAnimal {

  searchZip = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.pattern(/^\d{5}$/)
    ]
  });

  nearbyAnimals: NearbyAnimal[] = [];
  searchError: string | null = null;
  searching: boolean = false;

  constructor(
    private animalDataService: AnimalDataService,
    private cdRef: ChangeDetectorRef
  ) {}

  // Searches for available rescue animals near the entered ZIP code.
  findNearbyAnimals(): void {
    const zip = this.searchZip.value.trim();

    if (!/^\d{5}$/.test(zip)) {
      this.searchError = 'Please enter a valid five-digit ZIP code.';
      this.nearbyAnimals = [];
      return;
    }

    this.searching = true;
    this.searchError = '';
    this.nearbyAnimals = [];

    this.animalDataService.getNearbyAnimals(zip)
      .subscribe({
        next: (response) => {
          this.nearbyAnimals = response.animals;
          this.searching = false;

          if (response.animals.length === 0) {
            this.searchError =
              'No available animals were found within 2,000 miles.';
          }

          this.cdRef.detectChanges();
        },

        error: (error) => {
          console.error(
            'An error occurred while searching for nearby animals.',
            error
          );

          this.nearbyAnimals = [];
          this.searching = false;

          if (error.status === 400) {
            this.searchError =
              error.error?.message ||
              'Please enter a valid five-digit ZIP code.';
          } else {
            this.searchError =
              'An error occurred while searching for nearby animals. Please try again later.';
          }

          this.cdRef.detectChanges();
        }
      });
  }
}