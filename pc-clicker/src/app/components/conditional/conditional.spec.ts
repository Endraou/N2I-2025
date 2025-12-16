import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conditional } from './conditional';

describe('Conditional', () => {
  let component: Conditional;
  let fixture: ComponentFixture<Conditional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conditional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conditional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
