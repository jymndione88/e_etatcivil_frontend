import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GutilisateurListComponent } from './gutilisateur-list.component';

describe('GutilisateurListComponent', () => {
  let component: GutilisateurListComponent;
  let fixture: ComponentFixture<GutilisateurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GutilisateurListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GutilisateurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
