import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingdomAddFormComponent } from './kingdom-add-form.component';

describe('KingdomAddFormComponent', () => {
  let component: KingdomAddFormComponent;
  let fixture: ComponentFixture<KingdomAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingdomAddFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KingdomAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
