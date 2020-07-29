import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Captura3Component } from './captura3.component';

describe('Captura3Component', () => {
  let component: Captura3Component;
  let fixture: ComponentFixture<Captura3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Captura3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Captura3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
