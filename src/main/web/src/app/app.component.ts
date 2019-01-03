import {Component, OnInit} from '@angular/core';
import {TestService} from './services/test.service';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public items$: Observable<Array<number>>;

  constructor(private testService: TestService) {

  }

  ngOnInit(): void {
    this.items$ = this.testService.getItems();
  }

}
