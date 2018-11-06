import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-obligation-panel',
  templateUrl: './create-obligation-panel.component.html',
  styleUrls: ['./create-obligation-panel.component.css']
})
export class CreateObligationPanelComponent implements OnInit {

  @Input() groupName: string;

  availableFunds: number;
  shortcutCurrencyName: string;
  howManyUnitsToObligate: string;

  public panelTitle;

  constructor() { }

  ngOnInit() {
    this.panelTitle = `Obligate in ${this.groupName}`;
  }

}
