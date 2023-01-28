import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../services/data/phone.service';
import { phone } from '../shared/model/phone';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  phones:phone[]=[];

  
constructor(private phoneService: PhoneService, private route :ActivatedRoute) {
 
}
ngOnInit():void {
this.route.params.subscribe(params=>{
  if(params['searchItem'])
this.phones = this.phoneService.getAll().filter(phone=>phone.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
else
this.phones = this.phoneService.getAll();
})


  
 

 
}

}
