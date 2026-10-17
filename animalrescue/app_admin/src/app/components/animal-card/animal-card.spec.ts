import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalCard } from './animal-card';
import { animalFixture } from '../../testing/animal.fixture';

describe('AnimalCard', () => {
  let component: AnimalCard;
  let fixture: ComponentFixture<AnimalCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('animal', animalFixture());
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
