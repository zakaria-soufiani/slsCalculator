import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class CalculatorService {

  private API_URL = 'https://dub911oomf.execute-api.us-east-1.amazonaws.com/dev/calc';

  constructor(private http: Http) { }

  calculate( memory_allocation, execution_times, execution_length, free_tier_check) {
    let headers = new Headers({'Content-Type' : 'application/json'});
    let options = new RequestOptions({ headers: headers});
    let INFO =  Object.assign(memory_allocation, execution_length, execution_times, free_tier_check);
    let body = JSON.stringify(INFO);
    return this.http.post(this.API_URL, body, options).map((res: Response) => res.json());
  }

}
