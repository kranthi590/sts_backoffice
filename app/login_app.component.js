System.register(['angular2/core', "angular2/src/common/forms/model", "angular2/src/common/forms/form_builder", "./services/users.service", "angular2/src/common/forms/validators", "./custom_validators/email.validator", "./services/base_http.service", "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, model_1, form_builder_1, users_service_1, validators_1, email_validator_1, base_http_service_1, http_1;
    var LoginAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (model_1_1) {
                model_1 = model_1_1;
            },
            function (form_builder_1_1) {
                form_builder_1 = form_builder_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (validators_1_1) {
                validators_1 = validators_1_1;
            },
            function (email_validator_1_1) {
                email_validator_1 = email_validator_1_1;
            },
            function (base_http_service_1_1) {
                base_http_service_1 = base_http_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LoginAppComponent = (function () {
                function LoginAppComponent(builder, usersService) {
                    this.builder = builder;
                    this.usersService = usersService;
                    this.submitted = false;
                    this.submit_request = false;
                    this.email = new model_1.Control('', validators_1.Validators.compose([validators_1.Validators.required, email_validator_1.EmailValidator.emailValidator]));
                    this.password = new model_1.Control('', validators_1.Validators.compose([validators_1.Validators.required]));
                    this.form = builder.group({
                        email: this.email,
                        password: this.password,
                    });
                }
                LoginAppComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    if (form.valid) {
                        this.submit_request = true;
                        this.usersService.findByEmail(this.email.value).subscribe(function (res) {
                            if (res.data != null && res.data.password == _this.password.value) {
                                $.notify('<strong>Success</strong> Authenticated , redirecting to home page  please wait...', {
                                    type: 'success',
                                    allow_dismiss: false
                                });
                                setTimeout(function () {
                                    window.location.href = '../home.html';
                                }, 2000);
                            }
                            else {
                                $.notify('<strong>Warning</strong> Login Failed, please check your credentials', {
                                    type: 'danger',
                                    allow_dismiss: false
                                });
                            }
                            _this.submit_request = false;
                        }, function (err) { return console.log("Erros: ", err); }, function () { return console.log('APi Call Completed'); });
                    }
                };
                LoginAppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n         <form class=\"form-signin\" [ngFormModel]=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(loginForm)\">\n            <div class=\"form-group row\">\n                <h2 class=\"col-sm-12 col-form-label form-signin-heading\">STS sign in</h2>\n            </div>\n    \n            <div class=\"form-group row\"\n                [ngClass]=\"{ 'has-error' :  (submitted || email.touched ) &&( email.hasError('invalidEmailAddress')  || email.hasError('required')) }\">\n                <label for=\"inputEmail\" class=\"col-sm-6 sr-only\">Email address</label>\n                <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" ngControl=\"email\" autofocus>\n                \n                 <div style=\"color: sienna\" role=\"alert\" \n                    *ngIf=\"(submitted || email.touched ) &&( email.hasError('invalidEmailAddress')  || email.hasError('required'))\">\n                    <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Error:</span>\n                    Your email needs to be valid\n                </div>\n            </div>\n    \n            <div class=\"form-group row\"\n                [ngClass]=\"{ 'has-error' : (submitted || password.touched ) &&(password.hasError('required')) }\">\n                <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n                <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" ngControl=\"password\">\n                <div style=\"color: sienna\" role=\"alert\" \n                    *ngIf=\"(submitted || password.touched ) &&(  password.hasError('required'))\">\n                    <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Error:</span>\n                    Your password needs to be valid\n                </div>\n            </div>\n    \n            <div class=\"form-group row\">\n                \n                <button class=\"btn btn-lg btn-primary\" type=\"submit\" (click)=\"submitted=true\" [disabled]=\"submit_request\">Sign in</button>\n            </div>\n    \n            <div class=\"form-group row\" *ngIf=\"submit_request\">\n                Authenticating , please wait.....\n                <i class=\"fa fa-spinner fa-spin\" style=\"font-size:24px\"></i>\n\n            </div>\n        </form>\n        ",
                        providers: [http_1.HTTP_PROVIDERS, users_service_1.UsersService, base_http_service_1.HttpService]
                    }), 
                    __metadata('design:paramtypes', [form_builder_1.FormBuilder, users_service_1.UsersService])
                ], LoginAppComponent);
                return LoginAppComponent;
            }());
            exports_1("LoginAppComponent", LoginAppComponent);
        }
    }
});
//# sourceMappingURL=login_app.component.js.map