import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimweardetailComponent } from './swimweardetail.component';

describe('SwimweardetailComponent', () => {
  let component: SwimweardetailComponent;
  let fixture: ComponentFixture<SwimweardetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimweardetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimweardetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
