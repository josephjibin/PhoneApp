import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../services/data/phone.service';
import { phone } from '../shared/model/phone';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  phones:phone[]=[];
 
constructor(private phoneService: PhoneService) {
 
}
ngOnInit():void {
  this.phones=this.phoneService.getAll();
}

}
