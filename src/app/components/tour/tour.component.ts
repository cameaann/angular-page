import { Component, OnInit, Input } from '@angular/core';
import { ITour } from 'src/model/tour';
import { from } from 'rxjs';
import { TOURS } from 'src/db/db-data-tours';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  @Input() tour: ITour 
  
  constructor() { }

  ngOnInit() {
  }

  
}
