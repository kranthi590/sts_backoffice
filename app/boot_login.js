System.register(['angular2/platform/browser', "angular2/router", "angular2/http", "./login_app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, http_1, login_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (login_app_component_1_1) {
                login_app_component_1 = login_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(login_app_component_1.LoginAppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot_login.js.map