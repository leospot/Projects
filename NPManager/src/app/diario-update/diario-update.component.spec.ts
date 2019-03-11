import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioUpdateComponent } from './diario-update.component';

describe('DiarioUpdateComponent', () => {
  let component: DiarioUpdateComponent;
  let fixture: ComponentFixture<DiarioUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarioUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarioUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
