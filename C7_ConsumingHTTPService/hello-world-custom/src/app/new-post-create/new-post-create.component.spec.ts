import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostCreateComponent } from './new-post-create.component';

describe('NewPostCreateComponent', () => {
  let component: NewPostCreateComponent;
  let fixture: ComponentFixture<NewPostCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPostCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
