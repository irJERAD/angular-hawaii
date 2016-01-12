import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class NameList {
	names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];
	http:Http;

	constructor(http:Http) {
		this.http = http;
	}

	get() {
		return this.http.get('http://angular-hawaii.herokuapp.com/peeps');
	}

	add(value:string) {
		var name = {
			name: value
		};
		var headers = new Headers();

		headers.append('Content-Type', 'application/json');

		return this.http.post('http://angular-hawaii.herokuapp.com/thing', JSON.stringify(name), {
			headers: headers
		});
	}
}
