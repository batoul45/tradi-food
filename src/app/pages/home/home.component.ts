import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShopComponent } from '../shop/shop.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}
  navigateToShop() {
    this.router.navigate(['/shop']);
  }
}
