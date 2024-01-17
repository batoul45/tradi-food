import { ProductsService } from '../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-shopage',
  templateUrl: './shopage.component.html',
  styleUrl: './shopage.component.css'
})
export class ShopageComponent implements OnInit {
  constructor(private param:ActivatedRoute,private service:ProductsService) { }
  getproductd:any;
  menuData:any;

  ngOnInit(): void {
    this.getproductd = this.param.snapshot.paramMap.get('id');
    console.log(this.getproductd,'getmenu');
    if(this.getproductd)
    {
      this.menuData =  this.service.articleDetails.filter((value)=>{
          return value.id == this.getproductd;
          
        });
        console.log(this.menuData,'menudata>>');
        
    }
    
  }

  

  
}
