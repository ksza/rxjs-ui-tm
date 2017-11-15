import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/subscribeOn';
import 'rxjs/add/operator/onErrorResumeNext';
import { Scheduler } from 'rxjs/Scheduler';

import request from 'superagent';

const queryUses = query =>
  request
    .get('https://api.github.com/search/users?q=' + query)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

const hotSearchService = autoSaveEventBus =>
  Observable.fromEvent(autoSaveEventBus, '')
    .debounceTime(500)
    .switchMap(query => {
      console.log(query);

      return Observable.fromPromise(queryUses(query))
        .map(res => res.body.items)
        .catch(e => Observable.of([])); // on error return empy list
    });

export default hotSearchService;
