// Displays the information for a single rescue animal.

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Animal } from '../../models/animal';

@Component({
  selector: 'app-animal-card',
  imports: [CommonModule],
  templateUrl: './animal-card.html',
  styleUrl: './animal-card.css'
})
export class AnimalCard {

  @Input() animal!: Animal;

}