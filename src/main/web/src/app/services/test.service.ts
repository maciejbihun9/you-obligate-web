import {Injectable, OnInit} from '@angular/core';
import {map, scan} from 'rxjs/operators';
import {interval} from 'rxjs/internal/observable/interval';
import {pipe} from 'rxjs/internal-compatibility';

@Injectable()
export class TestService {

  constructor() { }

  public getItems() {

    const pipeFunction = pipe(map((val: number) => [val, val] ));

    // pipeFunction([1, 2, 3, 4]).subscribe(value => {});

    // const numberObservable: Observable<number> = interval(1000);
    interval(1000).subscribe(value => {
      console.log('The number is: ' + value);
    });
    /* return Observable.create(function subscribe(observer) {
      const id = setInterval(() => {
        observer.next(1);
      }, 1000);
    }).pipe(scan((acc, num) => [num, ...acc].slice(0, 5), []));*/
    return interval(1000).pipe(
      map((val: number) => [val, val] ));


  }

}
