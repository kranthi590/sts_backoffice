import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,Router} from 'angular2/router'
import {HomeComponent} from "./home.component";
import {StudentComponent} from "./students.component";
import {ProfileComponent} from "./profile.component";

@Component({
    selector: 'my-app',
    templateUrl: "base.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/students', name: 'Students', component: StudentComponent},
    {path: '/profile', name: 'Profile', component: ProfileComponent}
])

export class AppComponent {

    constructor(private router: Router) {

    }

    isActive(instruction: any[]): boolean {
        return this.router.isRouteActive(this.router.generate(instruction));
    }

}