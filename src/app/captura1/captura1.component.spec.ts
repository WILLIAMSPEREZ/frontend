import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Captura1Component } from './captura1.component';

describe('Captura1Component', () => {
  let component: Captura1Component;
  let fixture: ComponentFixture<Captura1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Captura1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Captura1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
