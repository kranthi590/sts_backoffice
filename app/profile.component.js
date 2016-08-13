System.register(["angular2/core", "./bootstrap_tabs/tabs.class", "./bootstrap_tabs/tab.component", "angular2/src/common/forms/model", "angular2/src/common/forms/form_builder", "angular2/src/common/forms/validators", "./custom_validators/email.validator", "./services/base_http.service", "angular2/http", "./models/profile.model", "./services/users.service"], function(exports_1, context_1) {
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
    var core_1, tabs_class_1, tab_component_1, model_1, form_builder_1, validators_1, email_validator_1, base_http_service_1, http_1, profile_model_1, users_service_1;
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tabs_class_1_1) {
                tabs_class_1 = tabs_class_1_1;
            },
            function (tab_component_1_1) {
                tab_component_1 = tab_component_1_1;
            },
            function (model_1_1) {
                model_1 = model_1_1;
            },
            function (form_builder_1_1) {
                form_builder_1 = form_builder_1_1;
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
            },
            function (profile_model_1_1) {
                profile_model_1 = profile_model_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(builder, usersService) {
                    var _this = this;
                    this.builder = builder;
                    this.usersService = usersService;
                    this.submitted = false;
                    this.submit_request = false;
                    usersService.findByEmail("kk@gmail.com").subscribe(function (res) {
                        _this.user = new profile_model_1.User(res.data.email, res.data.name, res.data.password, res.data.role);
                        console.log(_this.user);
                    }, function (err) { return console.log("Erros: ", err); }, function () { return console.log('APi Call Completed'); });
                    this.name = new model_1.Control('', validators_1.Validators.compose([validators_1.Validators.required, validators_1.Validators.minLength(8)]));
                    this.email = new model_1.Control('', validators_1.Validators.compose([validators_1.Validators.required, email_validator_1.EmailValidator.emailValidator]));
                    this.password = new model_1.Control('', validators_1.Validators.compose([validators_1.Validators.required, validators_1.Validators.minLength(8)]));
                    //this.role = new Control('',Validators.compose([Validators.required, Validators.minLength(8)]));
                    this.form = builder.group({
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        role: this.role
                    });
                }
                ProfileComponent.prototype.onSubmit = function (form) {
                    if (form.valid) {
                        this.submit_request = true;
                        console.log("Form Submitted...", form.valid);
                    }
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/profile.html',
                        directives: [tabs_class_1.Tabs, tab_component_1.Tab],
                        providers: [http_1.HTTP_PROVIDERS, users_service_1.UsersService, base_http_service_1.HttpService]
                    }), 
                    __metadata('design:paramtypes', [form_builder_1.FormBuilder, users_service_1.UsersService])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
//# sourceMappingURL=profile.component.js.map