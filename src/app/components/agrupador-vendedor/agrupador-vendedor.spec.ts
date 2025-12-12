import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrupadorVendedor } from './agrupador-vendedor';

describe('AgrupadorVendedor', () => {
  let component: AgrupadorVendedor;
  let fixture: ComponentFixture<AgrupadorVendedor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrupadorVendedor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrupadorVendedor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
