import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Posts } from '../model/posts';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService) { }
  posts: Posts[];
  ngOnInit(): void {
    this.productService.findAll();
  }
  findAll(){
    this.productService.findAll().subscribe(next =>{
      console.log(next);
      this.posts = next;
    });
    
  }

}
