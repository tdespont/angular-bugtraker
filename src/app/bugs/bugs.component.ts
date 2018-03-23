import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Bug } from '../bug';
import { Router } from '@angular/router';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css'],
  providers: [BugService]
})
export class BugsComponent implements OnInit {
  displayedColumns = ['id', 'title'];
  dataSource;

  constructor(private router: Router,
    private bugService: BugService) { }

  ngOnInit() {
    this.dataSource =  this.bugService.getBugs();
   }

  viewBug(bug) {
    this.router.navigateByUrl('/bug/' + bug.id);
  }

}


