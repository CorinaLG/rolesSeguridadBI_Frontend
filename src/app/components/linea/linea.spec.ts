import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Linea } from './linea';

describe('Linea', () => {
  let component: Linea;
  let fixture: ComponentFixture<Linea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Linea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Linea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
