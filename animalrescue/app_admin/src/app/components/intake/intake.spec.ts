import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { vi } from 'vitest';
import { Intake } from './intake';
import { AnimalDataService } from '../../services/animal-data.services';
import { Animal } from '../../models/animal';
import { animalFixture } from '../../testing/animal.fixture';

describe('Intake', () => {
  let component: Intake;
  let fixture: ComponentFixture<Intake>;
  let response: Subject<Animal>;
  let service: { addAnimal: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    response = new Subject<Animal>();
    service = { addAnimal: vi.fn(() => response.asObservable()) };
    await TestBed.configureTestingModule({
      imports: [Intake],
      providers: [{ provide: AnimalDataService, useValue: service }]
    }).compileComponents();
    fixture = TestBed.createComponent(Intake);
    component = fixture.componentInstance;
    await fixture.whenStable();
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  function fillDog() {
    const animal = animalFixture();
    component.intakeForm.patchValue({ ...animal, ...animal.acquisitionLocation });
    component.onAnimalTypeChange();
  }

  it('marks invalid fields touched without submitting', () => {
    component.onSubmit();
    expect(service.addAnimal).not.toHaveBeenCalled();
    expect(component.intakeForm.get('name')?.touched).toBe(true);
    expect(component.submitting).toBe(false);
  });

  it('switches required fields and clears fields belonging to the previous animal type', () => {
    fillDog();
    component.intakeForm.patchValue({ breed: '' });
    expect(component.intakeForm.valid).toBe(false);
    component.intakeForm.patchValue({ breed: 'Labrador', animalType: 'Monkey' });
    component.onAnimalTypeChange();
    expect(component.intakeForm.get('breed')?.value).toBe('');
    expect(component.intakeForm.valid).toBe(false);
    component.intakeForm.patchValue({ species: 'Capuchin', tailLength: 10, height: 20, bodyLength: 30 });
    expect(component.intakeForm.valid).toBe(true);
    component.intakeForm.patchValue({ animalType: 'Dog' });
    component.onAnimalTypeChange();
    for (const field of ['species', 'tailLength', 'height', 'bodyLength']) {
      expect(component.intakeForm.get(field)?.value).toBe('');
    }
    component.intakeForm.patchValue({ breed: 'Labrador' });
    expect(component.intakeForm.valid).toBe(true);
  });

  it.each([
    ['age', -1], ['weight', -1], ['latitude', -91], ['latitude', 91],
    ['longitude', -181], ['longitude', 181]
  ])('rejects out-of-range %s = %s', (field, value) => {
    fillDog();
    component.intakeForm.get(field as string)?.setValue(value);
    component.onSubmit();
    expect(component.intakeForm.valid).toBe(false);
    expect(service.addAnimal).not.toHaveBeenCalled();
  });

  it.each(['tailLength', 'height', 'bodyLength'])('rejects a negative monkey %s', field => {
    fillDog();
    component.intakeForm.patchValue({ animalType: 'Monkey', species: 'Capuchin', tailLength: 10, height: 20, bodyLength: 30 });
    component.onAnimalTypeChange();
    component.intakeForm.get(field)?.setValue(-1);
    component.onSubmit();
    expect(service.addAnimal).not.toHaveBeenCalled();
  });

  it('submits a dog with nested location and resets after success', () => {
    vi.useFakeTimers();
    fillDog();
    component.onSubmit();
    expect(component.submitting).toBe(true);
    expect(service.addAnimal).toHaveBeenCalledWith({
      ...animalFixture(), species: undefined, tailLength: undefined, height: undefined,
      bodyLength: undefined, graduationDate: null, description: ''
    });
    response.next(animalFixture());
    expect(component.submitting).toBe(false);
    expect(component.submitMessage).toBe('Rocky was added successfully!');
    expect(component.intakeForm.get('name')?.value).toBeNull();
    expect(component.intakeForm.get('reserved')?.value).toBe(false);
    vi.advanceTimersByTime(3000);
    expect(component.submitMessage).toBe('');
  });

  it('includes monkey-specific measurements in the submission', () => {
    fillDog();
    component.intakeForm.patchValue({ animalType: 'Monkey', species: 'Capuchin', tailLength: 10, height: 20, bodyLength: 30 });
    component.onAnimalTypeChange();
    component.onSubmit();
    expect(service.addAnimal).toHaveBeenCalledWith(expect.objectContaining({
      animalType: 'Monkey', breed: 'Capuchin', species: 'Capuchin', tailLength: 10, height: 20, bodyLength: 30
    }));
  });

  it('preserves the form and stops submitting after an API failure', () => {
    fillDog();
    component.onSubmit();
    response.error(new Error('Request failed'));
    expect(component.submitting).toBe(false);
    expect(component.submitError).toBe('Failed to add animal.');
    expect(component.intakeForm.get('name')?.value).toBe('Rocky');
  });
});
