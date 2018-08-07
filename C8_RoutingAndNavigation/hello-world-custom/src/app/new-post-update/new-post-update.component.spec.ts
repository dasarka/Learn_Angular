import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostUpdateComponent } from './new-post-update.component';

describe('NewPostUpdateComponent', () => {
  let component: NewPostUpdateComponent;
  let fixture: ComponentFixture<NewPostUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPostUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
