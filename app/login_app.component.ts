import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router'
import {HomeComponent} from "./home.component";
import {StudentComponent} from "./students.component";
import {ProfileComponent} from "./profile.component";
import {Control, ControlGroup} from "angular2/src/common/forms/model";
import {FormBuilder} from "angular2/src/common/forms/form_builder";
import {UsersService} from "./services/users.service";
import {Validator} from "angular2/src/common/forms/directives/validators";
import {Validators} from "angular2/src/common/forms/validators";
import {EmailValidator} from "./custom_validators/email.validator";
import {HttpService} from "./services/base_http.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {User} from "./models/profile.model";

declare var $: any;

@Component({

    selector: 'my-app',
    template: `
         <form class="form-signin" [ngFormModel]="form" #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
            <div class="form-group row">
                <h2 class="col-sm-12 col-form-label form-signin-heading">STS sign in</h2>
            </div>
    
            <div class="form-group row"
                [ngClass]="{ 'has-error' :  (submitted || email.touched ) &&( email.hasError('invalidEmailAddress')  || email.hasError('required')) }">
                <label for="inputEmail" class="col-sm-6 sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" ngControl="email" autofocus>
                
                 <div style="color: sienna" role="alert" 
                    *ngIf="(submitted || email.touched ) &&( email.hasError('invalidEmailAddress')  || email.hasError('required'))">
                    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span class="sr-only">Error:</span>
                    Your email needs to be valid
                </div>
            </div>
    
            <div class="form-group row"
                [ngClass]="{ 'has-error' : (submitted || password.touched ) &&(password.hasError('required')) }">
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" ngControl="password">
                <div style="color: sienna" role="alert" 
                    *ngIf="(submitted || password.touched ) &&(  password.hasError('required'))">
                    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span class="sr-only">Error:</span>
                    Your password needs to be valid
                </div>
            </div>
    
            <div class="form-group row">
                
                <button class="btn btn-lg btn-primary" type="submit" (click)="submitted=true" [disabled]="submit_request">Sign in</button>
            </div>
    
            <div class="form-group row" *ngIf="submit_request">
                Authenticating , please wait.....
                <i class="fa fa-spinner fa-spin" style="font-size:24px"></i>

            </div>
        </form>
        `,
    providers: [HTTP_PROVIDERS, UsersService, HttpService]
})

export class LoginAppComponent {

    submitted: boolean = false;
    email: Control;
    password: Control;
    submit_request: boolean = false;
    form: ControlGroup;
    user: User;

    constructor(private builder: FormBuilder, private usersService: UsersService) {
        this.email = new Control('', Validators.compose([Validators.required, EmailValidator.emailValidator]));
        this.password = new Control('', Validators.compose([Validators.required]));
        this.form = builder.group({
            email: this.email,
            password: this.password,
        });
    }

    onSubmit(form: ControlGroup) {
        if (form.valid) {
            this.submit_request = true;
            this.usersService.findByEmail(this.email.value).subscribe(
                res => {
                    if (res.data != null && res.data.password == this.password.value) {
                        $.notify('<strong>Success</strong> Authenticated , redirecting to home page  please wait...', {
                            type: 'success',
                            allow_dismiss: false
                        });
                        setTimeout(function () {
                            window.location.href='../home.html';
                        },2000)
                    } else {
                        $.notify('<strong>Warning</strong> Login Failed, please check your credentials', {
                            type: 'danger',
                            allow_dismiss: false
                        });
                    }
                    this.submit_request = false;
                },
                err => console.log("Erros: ", err),
                () => console.log('APi Call Completed')
            );
        }
    }
}