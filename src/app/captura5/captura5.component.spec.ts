import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Captura5Component } from './captura5.component';

describe('Captura5Component', () => {
  let component: Captura5Component;
  let fixture: ComponentFixture<Captura5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Captura5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Captura5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
