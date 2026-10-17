import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { vi } from 'vitest';
import { FindNearbyAnimal } from './find-nearby-animal';
import { AnimalDataService } from '../../services/animal-data.services';
import { NearbyAnimalResponse } from '../../models/animal';
import { animalFixture } from '../../testing/animal.fixture';

describe('FindNearbyAnimal', () => {
  let component: FindNearbyAnimal;
  let fixture: ComponentFixture<FindNearbyAnimal>;
  let response: Subject<NearbyAnimalResponse>;
  let service: { getNearbyAnimals: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    response = new Subject<NearbyAnimalResponse>();
    service = { getNearbyAnimals: vi.fn(() => response.asObservable()) };
    await TestBed.configureTestingModule({
      imports: [FindNearbyAnimal],
      providers: [{ provide: AnimalDataService, useValue: service }]
    }).compileComponents();
    fixture = TestBed.createComponent(FindNearbyAnimal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => vi.restoreAllMocks());

  it.each(['', '1234', '123456', 'abcde'])('rejects invalid ZIP %j without an API call', zip => {
    component.searchZip.setValue(zip);
    component.findNearbyAnimals();
    expect(service.getNearbyAnimals).not.toHaveBeenCalled();
    expect(component.searchError).toBe('Please enter a valid five-digit ZIP code.');
    expect(component.nearbyAnimals).toEqual([]);
  });

  it('trims ZIP input, clears old results, and renders successful results', () => {
    const animal = { ...animalFixture(), distanceMiles: 12, rank: 5, resultPosition: 1 };
    component.nearbyAnimals = [animal];
    component.searchError = 'Previous error';
    component.searchZip.setValue(' 02108 ');
    fixture.nativeElement.querySelector('button').click();
    expect(service.getNearbyAnimals).toHaveBeenCalledWith('02108');
    expect(component.searching).toBe(true);
    expect(component.searchError).toBe('');
    expect(component.nearbyAnimals).toEqual([]);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button').disabled).toBe(true);
    response.next({ zip: '02108', userLocation: { latitude: 42, longitude: -71 }, resultCount: 1, animals: [animal] });
    expect(component.searching).toBe(false);
    expect(component.nearbyAnimals).toEqual([animal]);
    expect(fixture.nativeElement.textContent).toContain('Rocky');
    expect(fixture.nativeElement.querySelector('button').disabled).toBe(false);
  });

  it('explains when no animals are available within range', () => {
    component.searchZip.setValue('02108');
    component.findNearbyAnimals();
    response.next({ zip: '02108', userLocation: { latitude: 42, longitude: -71 }, resultCount: 0, animals: [] });
    expect(component.searching).toBe(false);
    expect(fixture.nativeElement.textContent).toContain('No available animals were found within 2,000 miles.');
  });

  it.each([
    [{ status: 400, error: { message: 'ZIP code was not found.' } }, 'ZIP code was not found.'],
    [{ status: 400 }, 'Please enter a valid five-digit ZIP code.'],
    [{ status: 500 }, 'An error occurred while searching for nearby animals. Please try again later.']
  ])('handles an API failure %j', (error, message) => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    component.searchZip.setValue('02108');
    component.findNearbyAnimals();
    response.error(error);
    expect(component.searching).toBe(false);
    expect(component.nearbyAnimals).toEqual([]);
    expect(component.searchError).toBe(message);
    expect(fixture.nativeElement.textContent).toContain(message);
  });
});
