import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-obligation-group-image',
  templateUrl: './obligation-group-image.component.html',
  styleUrls: ['./obligation-group-image.component.css']
})
export class ObligationGroupImageComponent implements OnInit {

  @Input() imageSrc: string;
  @Input() size: number = 50;

  constructor() { }

  ngOnInit() {
  }

}
