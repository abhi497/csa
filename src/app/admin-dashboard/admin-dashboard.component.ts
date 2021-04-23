import { Component, OnInit } from '@angular/core';
import { RequestService } from '../shared/request.service';

import { Request } from '../shared/request.model'
import { ExecutiveService } from '../shared/executive.service';
import { Executive } from '../shared/executive.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  allRecordsCount:number;
  allRecords = [];

  allExecutiveCount: number;
  allExecutives = [];

  selectedMessage : any;

  constructor(private requestService:RequestService, private executiveService: ExecutiveService) { }

  ngOnInit() {
    this.render();
  }

  render() {  
    this.requestService.getRequest().subscribe(res => {
      this.allRecords = res as Request[];
      this.allRecordsCount = this.allRecords.length;
    });

    this.executiveService.getExecutive()
        .subscribe(res => {
          this.allExecutives = res as Executive[];
          this.allExecutiveCount = this.allExecutives.length;
        });
  }

}
