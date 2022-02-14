import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})
export class StatelessComponent implements OnInit {

  @Input() product!: Product;
  @Output() tablacomprada: EventEmitter<Product> = new EventEmitter();
  public compra: string;
  private disable: boolean;

  constructor() { 

    this.product = {};
    this.compra = "";
    this.disable = false;

  }

  ngOnInit(): void {
    this.compra = 'Comprar';
  }

  bought(){
    this.disable = true;
    this.compra = '!Comprado¡';
    this.tablacomprada.emit(this.product);
  }

  isdisabled(){
    return this.disable;
  }

}
