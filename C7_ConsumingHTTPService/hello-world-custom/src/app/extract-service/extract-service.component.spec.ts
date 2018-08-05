import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractServiceComponent } from './extract-service.component';

describe('ExtractServiceComponent', () => {
  let component: ExtractServiceComponent;
  let fixture: ComponentFixture<ExtractServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
