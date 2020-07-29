import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Captura2Component } from './captura2.component';

describe('Captura2Component', () => {
  let component: Captura2Component;
  let fixture: ComponentFixture<Captura2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Captura2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Captura2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
