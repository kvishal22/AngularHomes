import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[] =[
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chennai',
      state: 'TN',
      photo: '/assets/vkk.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Kochi',
      state: 'KL',
      photo: '/assets/vkk.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true
    }, {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Coimbatore',
      state: 'TN',
      photo: '/assets/vkk.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Madurai',
      state: 'TN',
      photo: '/assets/vkk.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Bangalore',
      state: 'KA',
      photo: '/assets/vkk.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Mysore',
      state: 'KA',
      photo: '/assets/vkk.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Ooty',
      state: 'TN',
      photo: '/assets/vkk.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Hyderabad',
      state: 'TA',
      photo: '/assets/vkk.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Vizag',
      state: 'AP',
      photo: '/assets/vkk.jpg',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Mahi',
      state: 'KA',
      photo: '/assets/vkk.jpg',
      availableUnits: 6,
      wifi: true,
      laundry: true
    }
  ];
  constructor() { }
  getAllHousingLocation() : HousingLocation[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id:Number) : HousingLocation | undefined {
    return this.housingLocationList.find(
      housingLocation=>housingLocation.id===id);
  }
}
