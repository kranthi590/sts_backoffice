import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ROUTER_PROVIDERS} from "angular2/router"
import {HTTP_PROVIDERS} from "angular2/http";
import {LoginAppComponent} from "./login_app.component";

bootstrap(LoginAppComponent,[ROUTER_PROVIDERS,HTTP_PROVIDERS]);