import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Madhapurbranch1Component } from './madhapurbranch1.component';

describe('Madhapurbranch1Component', () => {
  let component: Madhapurbranch1Component;
  let fixture: ComponentFixture<Madhapurbranch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Madhapurbranch1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Madhapurbranch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
