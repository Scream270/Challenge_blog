import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuComponent } from './formu.component';

describe('FormuComponent', () => {
  let component: FormuComponent;
  let fixture: ComponentFixture<FormuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
