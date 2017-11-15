import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/onErrorResumeNext';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/fromEvent';

import eventBus from './rx/EventBus';
import hotSearchService from './rx/HotSearchService';

let subs = null;

class HotSearch extends Component {
  componentDidMount() {
    subs = hotSearchService(eventBus).subscribe(
      res => {
        console.log(res);
        this.props.onResult(res);
      },
      e => console.log('subscription error')
    );
  }

  render() {
    return (
      <TextField
        placeholder="Search git users"
        onChange={event => eventBus.push(event.target.value)}
      />
    );
  }

  componentWillUnmount() {
    if (subs) {
      subs.unsubscribe();
      subs = null;
    }
  }
}

export default HotSearch;
