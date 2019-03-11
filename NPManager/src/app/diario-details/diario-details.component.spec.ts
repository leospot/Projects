import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioDetailsComponent } from './diario-details.component';

describe('DiarioDetailsComponent', () => {
  let component: DiarioDetailsComponent;
  let fixture: ComponentFixture<DiarioDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarioDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
