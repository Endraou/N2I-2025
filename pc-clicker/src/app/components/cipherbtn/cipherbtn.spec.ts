import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cipherbtn } from './cipherbtn';

describe('Cipherbtn', () => {
  let component: Cipherbtn;
  let fixture: ComponentFixture<Cipherbtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cipherbtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cipherbtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
