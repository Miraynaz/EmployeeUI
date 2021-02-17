import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDepComponent } from './add-update-dep.component';

describe('AddUpdateDepComponent', () => {
  let component: AddUpdateDepComponent;
  let fixture: ComponentFixture<AddUpdateDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateDepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
