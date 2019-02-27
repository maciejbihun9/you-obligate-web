import {Component, Input, OnInit} from '@angular/core';
import {TestService} from './services/test.service';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userId: number = 2;

  ngOnInit(): void {

  }

}
