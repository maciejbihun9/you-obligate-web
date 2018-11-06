import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-obligation-panel',
  templateUrl: './create-obligation-group-panel.component.html',
  styleUrls: ['./create-obligation-group-panel.component.css']
})
export class CreateObligationGroupPanelComponent implements OnInit {

  public panelTitle = 'Create obligation group';

  constructor() { }

  ngOnInit() {
  }

}
