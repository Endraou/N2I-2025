import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hintbtn } from './hintbtn';

describe('Hintbtn', () => {
  let component: Hintbtn;
  let fixture: ComponentFixture<Hintbtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hintbtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hintbtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
