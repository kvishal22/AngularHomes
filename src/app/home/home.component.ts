import { Component,inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { HousingLocation } from '../housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    housingLocationList: HousingLocation[] = [
     
    ];
    housingService: HousingService = inject(HousingService);
    filteredLocationList:HousingLocation[] = [];

    constructor(){
        this.housingService.getAllHousingLocation().then((housingLocationList : HousingLocation[])=>{
              this.housingLocationList = housingLocationList;
              this.filteredLocationList = housingLocationList;
            });
    }

    filterResults(text:string){
        if(!text) this.filteredLocationList=this.housingLocationList;

        this.filteredLocationList =this.housingLocationList.filter(
          housingLocation=>
            housingLocation?.city.toLowerCase().includes(text.toLowerCase())
        );
    }
}
