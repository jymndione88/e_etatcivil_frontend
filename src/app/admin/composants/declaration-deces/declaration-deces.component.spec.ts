import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationDecesComponent } from './declaration-deces.component';

describe('DeclarationDecesComponent', () => {
  let component: DeclarationDecesComponent;
  let fixture: ComponentFixture<DeclarationDecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationDecesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationDecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
