import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiariosListComponent } from './diarios-list.component';

describe('DiariosListComponent', () => {
  let component: DiariosListComponent;
  let fixture: ComponentFixture<DiariosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiariosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
