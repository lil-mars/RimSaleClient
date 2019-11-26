import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TireEditComponent } from './tire-edit.component';

describe('TireEditComponent', () => {
  let component: TireEditComponent;
  let fixture: ComponentFixture<TireEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TireEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TireEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
