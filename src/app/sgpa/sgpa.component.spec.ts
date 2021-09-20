import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgpaComponent } from './sgpa.component';

describe('SgpaComponent', () => {
  let component: SgpaComponent;
  let fixture: ComponentFixture<SgpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SgpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
