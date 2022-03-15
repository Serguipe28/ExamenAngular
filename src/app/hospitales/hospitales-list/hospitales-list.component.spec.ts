import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalesListComponent } from './hospitales-list.component';

describe('HospitalesListComponent', () => {
  let component: HospitalesListComponent;
  let fixture: ComponentFixture<HospitalesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
