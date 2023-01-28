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
  rating:false,
  star:3,
  imageUrl: '/assets/iPhone-1.jpg',
  tags: ['iPhone', 'Tech'],
  cameras: ['Advanced dual-camera system',
  '12MP Main | Ultra Wide'],
  batteries:'Up to 29 hours video playback'
 },
 {
  id: 2,
  name:'iPhone 14 plus',
  price: 1100,
  rating:true,
  star:3,
  imageUrl: '/assets/iPhone-2.jpg',
  tags: ['iPhone', 'Tech'],
  cameras: ['Advanced dual-camera system',
  '12MP Main | Ultra Wide'],
  batteries:'Up to 29 hours video playback'
 },
 {
  id: 3,
  name:'iPhone 14 pro',
  price: 1100,
  rating:true,
  star:4.5,
  imageUrl: '/assets/iPhone-3.jpg',
  tags: ['iPhone', 'Tech'],
  cameras: ['Pro camera system',
  '48MP Main Ultra Wide Telephoto'],
  batteries:'Up to 29 hours video playback'
 },
 {
  id: 4,
  name:'iPhone 14 pro max',
  price: 1100,
  rating:true,
  star:4.5,
  imageUrl: '/assets/iPhone-4.jpg',
  tags: ['iPhone', 'Tech'],
  cameras: ['Pro camera system',
  '48MP Main Ultra Wide Telephoto'],
  batteries:'Up to 29 hours video playback'
 }]
  }
}
