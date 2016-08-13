import {Component} from "angular2/core";
import {Tabs} from "./bootstrap_tabs/tabs.class";
import {Tab} from "./bootstrap_tabs/tab.component";
import {Control, ControlGroup} from "angular2/src/common/forms/model";
import {FormBuilder} from "angular2/src/common/forms/form_builder";
import {Validators} from "angular2/src/common/forms/validators";
import {EmailValidator} from "./custom_validators/email.validator";
import { HttpService} from "./services/base_http.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {User} from "./models/profile.model";
import {UsersService} from "./services/users.service";


@Component({
    templateUrl: 'templates/profile.html',
    directives: [Tabs, Tab],
    providers : [HTTP_PROVIDERS,UsersService,HttpService]
})

export class ProfileComponent {

    submitted : boolean = false;
    name: Control;
    email: Control;
    password: Control;
    role: Control;
    form :  ControlGroup;
    submit_request : boolean = false;

    user : User;

    constructor(private builder: FormBuilder,private usersService : UsersService) {

        usersService.findByEmail("kk@gmail.com").subscribe(
            res => {
                    this.user = new User(res.data.email,res.data.name,res.data.password,res.data.role);
                console.log(this.user);
            },
            err => console.log("Erros: ", err),
            () => console.log('APi Call Completed')
        );
        this.name = new Control('',Validators.compose([Validators.required, Validators.minLength(8)]));
        this.email = new Control('', Validators.compose([Validators.required,EmailValidator.emailValidator]));
        this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(8)]));
        //this.role = new Control('',Validators.compose([Validators.required, Validators.minLength(8)]));

        this.form = builder.group({
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.role
        });
    }

    onSubmit(form :  ControlGroup) {

        if(form.valid){
            this.submit_request = true;
            console.log("Form Submitted...",form.valid);
        }
    }




}