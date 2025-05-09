import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPrincipalComponent } from './cards-principal.component';

describe('CardsPrincipalComponent', () => {
  let component: CardsPrincipalComponent;
  let fixture: ComponentFixture<CardsPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
