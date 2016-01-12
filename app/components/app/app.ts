import {Component, ViewEncapsulation} from 'angular2/core';
import {
	RouteConfig,
	ROUTER_DIRECTIVES
} from 'angular2/router';

import {HomeCmp} from '../home/home';
import {UserListCmp} from '../userList/userList';
import {NameList} from '../../services/name_list';

@Component({
	selector: 'app',
	viewProviders: [NameList],
	templateUrl: './components/app/app.html',
	styleUrls: ['./components/app/app.css'],
	encapsulation: ViewEncapsulation.None,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: '/', component: HomeCmp, as: 'Home'},
	{path: '/userList', component: UserListCmp, as: 'User List'}
])
export class AppCmp {
}
