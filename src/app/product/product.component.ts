import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchfilterPipe } from '../pipes/searchfilter.pipe';
import { ErrorDirective } from '../directives/error.directive';




@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,SearchfilterPipe,ErrorDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  productName: any= [];
 toFilter:string="";

  async getData(): Promise<void> {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const products = await response.json();
      this.productName = products.products;
      console.log(this.productName);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  ngOnInit(): void {
    this.getData();
  }
}
