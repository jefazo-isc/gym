import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionesPrincipalComponent } from './ubicaciones-principal.component';

describe('UbicacionesPrincipalComponent', () => {
  let component: UbicacionesPrincipalComponent;
  let fixture: ComponentFixture<UbicacionesPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UbicacionesPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicacionesPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
