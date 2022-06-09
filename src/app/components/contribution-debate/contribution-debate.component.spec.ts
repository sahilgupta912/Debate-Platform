import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionDebateComponent } from './contribution-debate.component';

describe('ContributionDebateComponent', () => {
  let component: ContributionDebateComponent;
  let fixture: ComponentFixture<ContributionDebateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributionDebateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionDebateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
