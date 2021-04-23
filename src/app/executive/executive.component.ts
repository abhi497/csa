import { Component, OnInit } from '@angular/core';
import { Executive } from '../shared/executive.model';
import { ExecutiveService } from '../shared/executive.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-executive',
  templateUrl: './executive.component.html',
  styleUrls: ['./executive.component.css']
})
export class ExecutiveComponent implements OnInit {

  // executives = [];
  disableForm = true;

  constructor(
    private _executiveService: ExecutiveService,
    // private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.executiveList();
  }

  executiveList() {
    this._executiveService.getExecutive()
      .subscribe(
        res => {
          this._executiveService.Executives = res as Executive[];
        },
        err => console.log(err)
      )
  }

  onSubmit(form: NgForm) {
    if(!form) console.log('invalid form');
    console.log(form.value);
    this._executiveService.updateExecutive(form.value)
        .subscribe(res => console.log(res));
    this.executiveList();
    // this.modalService.dismissAll();    
  }

  onEdit(executive, modal) {
    console.log('In edit fn');
    this._executiveService.selectedExecutive = executive;
    this.disableForm = false;
    // this.modalService.open(modal);
  }

  onDelete(id) {
    this._executiveService.deleteExecutive(id).subscribe(res => {console.log(res)});
    this.executiveList();
  }

}
