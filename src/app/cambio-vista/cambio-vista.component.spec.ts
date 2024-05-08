import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioVistaComponent } from './cambio-vista.component';

describe('CambioVistaComponent', () => {
  let component: CambioVistaComponent;
  let fixture: ComponentFixture<CambioVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CambioVistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CambioVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
