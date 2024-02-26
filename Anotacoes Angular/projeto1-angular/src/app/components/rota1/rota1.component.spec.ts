import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rota1Component } from './rota1.component';

describe('Rota1Component', () => {
  let component: Rota1Component;
  let fixture: ComponentFixture<Rota1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rota1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Rota1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
