import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsOnInitComponent } from './posts-on-init.component';

describe('PostsOnInitComponent', () => {
  let component: PostsOnInitComponent;
  let fixture: ComponentFixture<PostsOnInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsOnInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsOnInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
