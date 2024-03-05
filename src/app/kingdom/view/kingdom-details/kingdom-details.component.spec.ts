import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingdomDetailsComponent } from './kingdom-details.component';

describe('KingdomDetailsComponent', () => {
  let component: KingdomDetailsComponent;
  let fixture: ComponentFixture<KingdomDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingdomDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KingdomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
