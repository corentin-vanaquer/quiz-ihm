import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleQuizzComponent } from './life-cycle-quizz.component';

describe('LifeCycleQuizzComponent', () => {
  let component: LifeCycleQuizzComponent;
  let fixture: ComponentFixture<LifeCycleQuizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleQuizzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifeCycleQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
