import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-circle-image',
  templateUrl: './circle-image.component.html',
  styleUrls: ['./circle-image.component.css']
})
export class CircleImageComponent implements OnInit {

  @Input() imageSrc: string;
  @Input() size: number = 50;

  constructor() { }

  ngOnInit() {
  }

}
