import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimScreenComponent } from './claim-screen.component';

describe('ClaimScreenComponent', () => {
  let component: ClaimScreenComponent;
  let fixture: ComponentFixture<ClaimScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
