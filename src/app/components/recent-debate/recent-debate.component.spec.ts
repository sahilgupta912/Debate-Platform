import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentDebateComponent } from './recent-debate.component';

describe('RecentDebateComponent', () => {
  let component: RecentDebateComponent;
  let fixture: ComponentFixture<RecentDebateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentDebateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentDebateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
