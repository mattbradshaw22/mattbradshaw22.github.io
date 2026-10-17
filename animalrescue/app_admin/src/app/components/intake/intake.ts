// Defines the Angular animal intake form component and validation rules.
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnimalDataService } from '../../services/animal-data.services';
import { Animal } from '../../models/animal';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-intake',
  styleUrl: './intake.css',
  templateUrl: './intake.html',
})
export class Intake {
  intakeForm: FormGroup;
  submitting = false;
  submitMessage = '';
  submitError = ''

  constructor(private fb: FormBuilder, private animalDataService: AnimalDataService) {
    this.intakeForm = this.fb.group({
      // Animal type selection
      animalType: ['', Validators.required],

      // Common fields for all animals
      name: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      weight: ['', [Validators.required, Validators.min(0)]],

      acquisitionDate: ['', Validators.required],
      
      // Acquisition location
      city: ['', Validators.required],
      state: [''],
      country: ['', Validators.required],
      latitude: ['', [
        Validators.required,
        Validators.min(-90),
        Validators.max(90)
      ]],
      longitude: ['', [
        Validators.required,
        Validators.min(-180),
        Validators.max(180)
      ]],

      trainingStatus: ['', Validators.required],
      reserved: [false],

      graduationDate: [''],
      // save for later
      // imagePath: [''],    

      // animal specific fields
      breed: [''],

      species: [''],
      tailLength: [''],
      height: [''],
      bodyLength: [''],
      
      description: [''],
    });
  }

  // Getter for animal type to determine which fields to show
  get animalType(): string {
    return this.intakeForm.get('animalType')?.value;
  }

  // function for handling changes in animal type selection
  onAnimalTypeChange(): void {

    const type = this.animalType;

    const breed = this.intakeForm.get('breed');
    const species = this.intakeForm.get('species');
    const tailLength = this.intakeForm.get('tailLength');
    const height = this.intakeForm.get('height');
    const bodyLength = this.intakeForm.get('bodyLength');

    breed?.clearValidators();
    species?.clearValidators();
    tailLength?.clearValidators();
    height?.clearValidators();
    bodyLength?.clearValidators();

    if (type === 'Dog') {

      breed?.setValidators([
        Validators.required
      ]);

      species?.setValue('');
      tailLength?.setValue('');
      height?.setValue('');
      bodyLength?.setValue('');
    }

    if (type === 'Monkey') {

      species?.setValidators([
        Validators.required
      ]);

      tailLength?.setValidators([
        Validators.required,
        Validators.min(0)
      ]);

      height?.setValidators([
        Validators.required,
        Validators.min(0)
      ]);

      bodyLength?.setValidators([
        Validators.required,
        Validators.min(0)
      ]);

      // No separate breed input needed for monkeys
      breed?.setValue('');
    }

    breed?.updateValueAndValidity();
    species?.updateValueAndValidity();
    tailLength?.updateValueAndValidity();
    height?.updateValueAndValidity();
    bodyLength?.updateValueAndValidity();
  }

  onSubmit(): void {

    if (this.intakeForm.valid) {

      const formValue = this.intakeForm.value;

      const animal: Animal = {
        name: formValue.name,
        animalType: formValue.animalType,

        breed:
          formValue.animalType === 'Monkey'
            ? formValue.species
            : formValue.breed,

        species:
          formValue.animalType === 'Monkey'
            ? formValue.species
            : undefined,

        gender: formValue.gender,
        age: formValue.age,
        weight: formValue.weight,

        tailLength:
          formValue.animalType === 'Monkey'
            ? formValue.tailLength
            : undefined,

        height:
          formValue.animalType === 'Monkey'
            ? formValue.height
            : undefined,

        bodyLength:
          formValue.animalType === 'Monkey'
            ? formValue.bodyLength
            : undefined,

        acquisitionDate: formValue.acquisitionDate,

        acquisitionLocation: {
          city: formValue.city,
          state: formValue.state,
          country: formValue.country,
          latitude: formValue.latitude,
          longitude: formValue.longitude
        },

        trainingStatus: formValue.trainingStatus,
        reserved: formValue.reserved,

        graduationDate:
          formValue.graduationDate || null,

        description:
          formValue.description || ''
      };

      this.submitting = true;
      this.submitMessage = '';
      this.submitError = '';

      this.animalDataService.addAnimal(animal)
        .subscribe({
        next: (createdAnimal: Animal) => {
          console.log('Animal added successfully:',
          console.log(createdAnimal));

          this.submitMessage = 
          `${createdAnimal.name} was added successfully!`;

          this.submitError = '';
          this.submitting = false;
          this.intakeForm.reset({
            animalType: '',
            state: '',
            trainingStatus: '',
            reserved: false
          });

          // Clear success message after 3 seconds
          setTimeout(() => {
            this.submitMessage = '';
          }, 3000);
        },
        error: (error: any) => {
          console.error('Error adding animal:');
          console.error(error);

          this.submitError = 
          'Failed to add animal.';
          this.submitting = false;
        }
      });

    } else {
      this.intakeForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
}
