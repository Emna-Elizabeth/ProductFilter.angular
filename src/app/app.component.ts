import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./product/product.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ProductComponent, NavbarComponent]
})
export class AppComponent {
  title = 'day3';
}
