import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoListarComponent } from './aluno-listar.component';

describe('AlunoListarComponent', () => {
  let component: AlunoListarComponent;
  let fixture: ComponentFixture<AlunoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlunoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
