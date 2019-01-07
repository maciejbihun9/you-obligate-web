import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ObligationGroupsService} from '../../services/obligation-groups.service';
import {Bond} from '../../models/bond.model';

@Component({
  selector: 'app-bond-view',
  templateUrl: './bond-view.component.html',
  styleUrls: ['./bond-view.component.css']
})
export class BondViewComponent implements OnInit {

  public bondId = undefined;

  @Input() bond: Bond;

  constructor(private route: ActivatedRoute, private obligationGroupsService: ObligationGroupsService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bondId = +params['bondId'];
    });
  }

}
