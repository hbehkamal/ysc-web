import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfessionsListComponent } from './confessions-list.component';

describe('ConfessionsListComponent', () => {
  let component: ConfessionsListComponent;
  let fixture: ComponentFixture<ConfessionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfessionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfessionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
