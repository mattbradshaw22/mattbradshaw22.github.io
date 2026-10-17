// Provides the Angular interface for searching rescue animals.
import { Component, ChangeDetectorRef } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnimalDataService } from '../../services/animal-data.services';
import { Animal } from '../../models/animal';
import { AnimalCard } from '../animal-card/animal-card';

// TODO: Refactor to split the components
import { FindNearbyAnimal } from '../find-nearby-animal/find-nearby-animal';


@Component({
  imports: [ CommonModule, ReactiveFormsModule, AnimalCard, FindNearbyAnimal ],
  selector: 'app-find-animal',
  styleUrl: './find-animal.css',
  templateUrl: './find-animal.html',
})

export class FindAnimal {

  searchName = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(1)]
  });

  selectedAnimal: Animal | null = null;
  searchError: string | null = null;
  searching: boolean = false;
  
  constructor(private animalDataService: AnimalDataService, private cdRef: ChangeDetectorRef) {}

  // Searches for a rescue animal by name.
  findAnimalByName(): void {
    const name = this.searchName.value.trim();
    if (!name) {
      this.searchError = 'Please enter a name to search.';
      this.selectedAnimal = null;
      return;
    }

    this.searching = true;
    this.searchError = '';
    this.selectedAnimal = null;

    this.animalDataService.getAnimalByName(name)
      .subscribe({
        next: (animal: Animal) => {
          this.selectedAnimal = animal;
          this.searching = false;
          this.cdRef.detectChanges();
      },

      error: (error) => {
        console.error ('An error occurred while searching for the animal.', error);
        this.selectedAnimal = null;
        this.searching = false;
        
        if (error.status ===404) {
          this.searchError = `No animal found with the name "${name}".`;
        } else {
          this.searchError = 'An error occurred while searching for the animal. Please try again later.';
        }
        
        this.cdRef.detectChanges();
      }
    });
  }
}