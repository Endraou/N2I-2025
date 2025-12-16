import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cipherpage } from './cipherpage';

describe('Cipherpage', () => {
  let component: Cipherpage;
  let fixture: ComponentFixture<Cipherpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cipherpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cipherpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
