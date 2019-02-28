import {Component, Input, OnInit} from '@angular/core';
import {TestService} from './services/test.service';
import {Observable} from 'rxjs/internal/Observable';
import * as Faker from 'Faker';
import {concatMap, delay, filter, map, mergeMap, take, tap} from "rxjs/operators";
import {forkJoin, interval, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userId: number = 2;

  people;

  constructor(private httpClient: HttpClient){
    console.log('sub items section: ');
    this.forkJoinTest().subscribe( val => {
        console.log('sub item: ' + val);
      }
    );
  }

  ngOnInit(): void {
    // create simple array and fill it with test data
    this.people = Array(100)
      .fill(1)
      .map(_ => {
        return {
          name: Faker.Name.findName()
        }
      });
    console.log("People: ");
    console.log(this.people);

    var observable: Observable<number> = of (1,2,3,4);

    let items = of(1,2,3,4,5).pipe(
      tap(item => console.log('Before filter : ' + item)),
      filter(item => item % 2 == 0),
      // this is called only for items that are filtered
      // for filtered items following methods are not called
      // map only items that are still available here
      map(item => item * 5),
      tap(item => console.log('After filter : ' + item))
    // map(item => item * 3)
    );

    console.log("items: ");
    items.subscribe();
  }

  public getNumbers(): Observable<any>{
    return of(1,2,3,4,5);
  }

  public concatMapExample(){
    //emit delay value
    const source = of(2000, 1000);
    // map value from source into inner observable, when complete emit result and move to next
    const example = source.pipe(
      concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    );
  }

  public getSubItemsWithConcatMap(): Observable<number>{
    const source = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    // map value from source into inner observable, when complete emit result and move to next
    return source.pipe(
      concatMap((val, index) => of(11,12,13).pipe(delay(500)))
    );
  }

  public getSubItemsWithMergeMap(): Observable<number>{
    const source = of(1,2,3,4,5);
    // map value from source into inner observable, when complete emit result and move to next
    return source.pipe(
      mergeMap((val, index) => {
        if (index === 0) {
          return of(val * 3,val * 4,val * 5).pipe(
            delay(3000),
            tap(num => console.log('Sorry I was late, sorry for being late'))
          )

        } else {
          return of(val * 3,val * 4,val * 5).pipe()
        }
      })
    );
  }

  public forkJoinTest(): Observable<any>{
    const example = forkJoin(
      //emit 'Hello' immediately
      of('Hello'),
      //emit 'World' after 1 second
      of('World').pipe(delay(4000)),
      //emit 0 after 1 second
      interval(1000).pipe(take(1)),
      //emit 0...1 in 1 second interval
      interval(1000).pipe(take(2)),
      //promise that resolves to 'Promise Resolved' after 5 seconds
    );
//output: ["Hello", "World", 0, 1, "Promise Resolved: RESULT"]
    return example;
  }
}
