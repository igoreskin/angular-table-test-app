import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users;

  constructor(public tableService: TableService) { }

  ngOnInit() {
    this.tableService.getUsers().subscribe(res => {
      this.users = res;
      console.log(this.users);
    });
  }

}
