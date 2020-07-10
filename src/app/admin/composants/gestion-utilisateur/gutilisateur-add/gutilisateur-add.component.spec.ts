import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GutilisateurAddComponent } from './gutilisateur-add.component';

describe('GutilisateurAddComponent', () => {
  let component: GutilisateurAddComponent;
  let fixture: ComponentFixture<GutilisateurAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GutilisateurAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GutilisateurAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
