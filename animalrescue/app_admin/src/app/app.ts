// Defines the root Angular application component and imports the intake experience.
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: '#angular-app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
