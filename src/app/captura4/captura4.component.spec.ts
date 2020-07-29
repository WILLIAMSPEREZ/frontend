import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Captura4Component } from './captura4.component';

describe('Captura4Component', () => {
  let component: Captura4Component;
  let fixture: ComponentFixture<Captura4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Captura4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Captura4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
