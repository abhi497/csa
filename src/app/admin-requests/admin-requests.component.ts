import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



import { Request } from '../shared/request.model'
import { RequestService } from '../shared/request.service';

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.css']
})
export class AdminRequestsComponent implements OnInit {

  constructor(
    private requestService : RequestService,
    // private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.refreshRequestList();
  }

  disableForm = true;

  refreshRequestList() {
    this.requestService.getRequest().subscribe((res) => {
      this.requestService.request = res as Request[];
    });
  }

  onSubmit(form: NgForm) {
    if(!form) {
      console.log('Invalid form')
    }
    
    this.requestService.updateRequest(form.value).subscribe((res) => {console.log(res)});
    this.refreshRequestList();
    // this.modalService.dismissAll();
  }

  onEdit(request, modalInstance) {
    this.requestService.selectedRequest = request;
    this.disableForm = false;
    this.open(modalInstance);
  }

  open(content) {
    // this.modalService.open(content)
  }

  onDelete(id) {
    this.requestService.deleteRequest(id).subscribe((res) => {console.log(res)});
    this.refreshRequestList();

    const toast = document.getElementById('deleteToast');
    toast.classList.add('show');
    setTimeout(()=> {
      toast.classList.remove('show');
    }, 3000);
  }


}
