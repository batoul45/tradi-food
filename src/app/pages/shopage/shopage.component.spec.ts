import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopageComponent } from './shopage.component';

describe('ShopageComponent', () => {
  let component: ShopageComponent;
  let fixture: ComponentFixture<ShopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
