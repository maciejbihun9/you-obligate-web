import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, groupBy, mergeMap, tap, toArray} from 'rxjs/operators';
import {from} from 'rxjs/observable/from';
import {ForecastMetrics} from '../models/forecast-metrics.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserRegisteredServiceService {

    constructor(private http: HttpClient) {
    }


    /*public getForecast(financialPeriodId, rootSubRegionId) {
        return this.http.get('/api/Forecast/', {
            params: {
                'financialPeriodId': financialPeriodId,
                'subRegionId': rootSubRegionId
            }
        }).pipe(
            tap(forecastModel => {console.log(`ForecastModel has been parsed for props: ${financialPeriodId}, ${rootSubRegionId}`); })
        );
    }*/

    /**
     *
     * @returns {Observable<Array<ForecastMetrics>>} -> [{FiscalYear: 2019, ForecastPeriodId: 352, PeriodName: "Q1", TCV: 1.23, ABR: 2.31, FFYR: 3.12}]
     */
    /*public getForecastMetrics(forecastModel: Forecast): Observable<Array<ForecastMetrics>> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        forecastModel.revenueMeasureId = 2; // this is just default value without any effect
        return this.http.post<Array<ForecastMetrics>>('/api/Forecast/GetForecastMetrics',
            JSON.stringify(forecastModel), {headers: headers});
    }

    public saveUserRegisteredService(){

    }*/

}
