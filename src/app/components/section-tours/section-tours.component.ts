import { Component, OnInit } from '@angular/core';
import { ITour } from "src/model/tour";
import { TOURS } from "src/db/db-data-tours";
import { from } from 'rxjs';

@Component({
  selector: 'app-tours',
  templateUrl: './section-tours.component.html',
  styleUrls: ['./section-tours.component.scss']
})
export class SectionToursComponent implements OnInit {

 tours = TOURS; 

  ngOnInit() {
  }

}
