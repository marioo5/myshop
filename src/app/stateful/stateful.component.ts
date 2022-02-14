import { ElementSchemaRegistry } from '@angular/compiler';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit {

  @ViewChild(ConfirmComponent, { static: false})
  confirmChild!: ConfirmComponent;
  shopModel: Shop = new Shop();
  boughtItems!: Array<Product>;

  constructor() { 
    this.boughtItems = []; 
  }

  clickItem(_tabla:any) {
    this.boughtItems.push(_tabla);
    }

  ngOnInit(): void {
  }

  tablaComprada(_event: Product){
    this.clickItem(_event);
    this.confirmChild.isDisabled=false;
  }

  totalPrice(){
    if(this.boughtItems){
      return this.boughtItems.reduce(
        (prev: number, item: Product) => prev + (item.price || 0),0);
      }
      else
        return 0;
  }
  

}
