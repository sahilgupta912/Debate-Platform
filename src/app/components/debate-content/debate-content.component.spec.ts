import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebateContentComponent } from './debate-content.component';

describe('DebateContentComponent', () => {
  let component: DebateContentComponent;
  let fixture: ComponentFixture<DebateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebateContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
