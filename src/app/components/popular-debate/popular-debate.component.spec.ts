import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularDebateComponent } from './popular-debate.component';

describe('PopularDebateComponent', () => {
  let component: PopularDebateComponent;
  let fixture: ComponentFixture<PopularDebateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularDebateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularDebateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
