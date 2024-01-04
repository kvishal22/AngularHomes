import { Component,Input } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    @Input() housingLocation!:HousingLocation;
}
