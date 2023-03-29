import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Madhapurbranch2Component } from './madhapurbranch2.component';

describe('Madhapurbranch2Component', () => {
  let component: Madhapurbranch2Component;
  let fixture: ComponentFixture<Madhapurbranch2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Madhapurbranch2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Madhapurbranch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
