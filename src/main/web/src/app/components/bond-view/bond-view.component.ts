import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ObligationGroupsService} from '../../services/obligation-groups.service';
import {Bond} from '../../models/bond.model';
import {BondService} from '../../services/bond.service';

@Component({
  selector: 'app-bond-view',
  templateUrl: './bond-view.component.html',
  styleUrls: ['./bond-view.component.css']
})
export class BondViewComponent implements OnInit {

  public bondId = undefined;

  public obligationGroupId = undefined;

  public bond: Bond;

  constructor(private route: ActivatedRoute, private bondService: BondService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bondId = +params['bondId'];
      this.obligationGroupId = +params['obligationGroupId'];
      /*this.bondService.getBond(this.bondId).subscribe(bond => {
        this.bond = bond;
      });*/
    });
  }

}
