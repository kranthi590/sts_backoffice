import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class HttpService {

    constructor(private http: Http) {
    }

    getApiCall(url) {
            return this.http.get(url)
                .map(res => res.json());


    }


}
