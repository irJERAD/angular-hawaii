import {Component, NgZone} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {NameList} from '../../services/name_list';

@Component({
	selector: 'userList',
	templateUrl: './components/userList/userList.html',
	styleUrls: ['./components/userList/userList.css'],
	directives: [CORE_DIRECTIVES]
})

export class UserListCmp {
	public names:any[];
	public newName:string;
	zone:NgZone;

	constructor(public list:NameList) {
		this.zone = new NgZone({enableLongStackTrace: false});
		this.getNames();
	}

	getNames() {
		return this.list.get().map(res => res.json())
			.subscribe(
				data =>  this.zone.run(() => {
					this.names = data;
				}),
				err => console.log(err)
			);
	}

	addName() {
		return this.list.add(this.newName).map(res => {
				res.text();
			})
			.subscribe(
				data =>  this.zone.run(() => {
					this.newName = '';
				}),
				err => console.log(err)
			);
	}
}
