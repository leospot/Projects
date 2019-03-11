import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioCreateComponent } from './diario-create.component';

describe('DiarioCreateComponent', () => {
  let component: DiarioCreateComponent;
  let fixture: ComponentFixture<DiarioCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarioCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
