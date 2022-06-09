import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDebateComponent } from './new-debate.component';

describe('NewDebateComponent', () => {
  let component: NewDebateComponent;
  let fixture: ComponentFixture<NewDebateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDebateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDebateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
