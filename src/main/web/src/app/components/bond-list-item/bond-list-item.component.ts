import {Component, Input, OnInit} from '@angular/core';
import {Bond} from '../../models/bond.model';

@Component({
  selector: 'app-bond-list-item',
  templateUrl: './bond-list-item.component.html',
  styleUrls: ['./bond-list-item.component.css']
})
export class BondListItemComponent implements OnInit {

  @Input() bond: Bond;

  constructor() { }

  ngOnInit() {
  }

}
