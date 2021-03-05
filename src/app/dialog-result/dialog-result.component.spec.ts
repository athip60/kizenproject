import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogResultComponent } from './dialog-result.component';

describe('DialogResultComponent', () => {
  let component: DialogResultComponent;
  let fixture: ComponentFixture<DialogResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
