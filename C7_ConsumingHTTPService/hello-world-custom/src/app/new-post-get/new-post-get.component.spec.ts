import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostGetComponent } from './new-post-get.component';

describe('NewPostGetComponent', () => {
  let component: NewPostGetComponent;
  let fixture: ComponentFixture<NewPostGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPostGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
