import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainD3Component } from './main-d3.component';

describe('MainD3Component', () => {
  let component: MainD3Component;
  let fixture: ComponentFixture<MainD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
