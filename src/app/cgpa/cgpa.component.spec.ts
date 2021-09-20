import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgpaComponent } from './cgpa.component';

describe('CgpaComponent', () => {
  let component: CgpaComponent;
  let fixture: ComponentFixture<CgpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
