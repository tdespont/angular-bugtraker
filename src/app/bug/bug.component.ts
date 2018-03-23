import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Bug } from '../bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.css'],
  providers: [BugService]
})
export class BugComponent implements OnInit {

  bug: Bug;

  constructor(private route: ActivatedRoute,
    private router: Router, private bugService: BugService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.bug = this.bugService.getBug(+id);
  }

}
