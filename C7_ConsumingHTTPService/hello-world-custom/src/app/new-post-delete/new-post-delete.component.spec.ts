import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostDeleteComponent } from './new-post-delete.component';

describe('NewPostDeleteComponent', () => {
  let component: NewPostDeleteComponent;
  let fixture: ComponentFixture<NewPostDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPostDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
