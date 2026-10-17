import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindAnimal } from './find-animal';

describe('FindAnimal', () => {
  let component: FindAnimal;
  let fixture: ComponentFixture<FindAnimal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindAnimal],
    }).compileComponents();

    fixture = TestBed.createComponent(FindAnimal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
