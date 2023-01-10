import { Injectable } from '@angular/core';
import { phone } from 'src/app/shared/model/phone';
@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor() { }

  getAll():phone[]{
return[
 {
  id: 1,
  name:'iPhone 14',
  price: 1100,
  rating:true,
  star:3.3,
  imageUrl: '/assets/iPhone-1.jpg',
  tags: ['iPhone', 'Tech'],
  
 },
 {
  id: 2,
  name:'iPhone 14',
  price: 1100,
  rating:true,
  star:3.3,
  imageUrl: '/assets/iPhone-2.jpg',
  tags: ['iPhone', 'Tech'],

 },
 {
  id: 3,
  name:'iPhone 14',
  price: 1100,
  rating:true,
  star:3.3,
  imageUrl: '/assets/iPhone-3.jpg',
  tags: ['iPhone', 'Tech'],

 },
 {
  id: 4,
  name:'iPhone 14',
  price: 1100,
  rating:true,
  star:3.3,
  imageUrl: '/assets/iPhone-4.jpg',
  tags: ['iPhone', 'Tech'],

 }



]
  }
}
