import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gamebtn } from './gamebtn';

describe('Gamebtn', () => {
  let component: Gamebtn;
  let fixture: ComponentFixture<Gamebtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gamebtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gamebtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
