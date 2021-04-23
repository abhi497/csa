import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '../shared/request.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }

  serviceForm = new FormGroup({
    _id : new FormControl(''),
    requestType : new FormControl(Validators.required),
    customerName : new FormControl(''),
    customerContact: new FormControl(''),
    customerEmail : new FormControl(''),
    customerAddress : new FormControl(''),
    city : new FormControl(''),
    requestDescription : new FormControl('')
  });
 

  onSubmit(){
    document.getElementById('custom-toast').style.display = 'block';
    setTimeout(() => {
      document.getElementById('custom-toast').style.display = 'none';
    }, 3000);

    this.requestService.postRequest(this.serviceForm.value).subscribe(
      (res) => {}
    );
    this.serviceForm.reset();
  }


  // showRecords(){
  //   this.requestService.getRequest().subscribe((res) => {
  //     this.requestService.request = res as Request[]
  //   })
  // }

}
