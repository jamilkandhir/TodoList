"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var app_service_1 = require("./providers/app.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, forms_1.ReactiveFormsModule
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, app_service_1.AppService],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9Bc3Nlc21lbnQvVG9kb0xpc3QvYXNzZXNzbWVudC9zcmMvbWFpbi93ZWJhcHAvIiwic291cmNlcyI6WyJzcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBc0U7QUFDdEUsOERBQTBEO0FBQzFELHdDQUFrRTtBQUNsRSxzQ0FBMkU7QUFDM0UsMENBQWtGO0FBQ2xGLGlEQUFnRDtBQUNoRCx1REFBcUQ7QUFtQnJEO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFackIsZUFBUSxDQUFDO1lBRVIsT0FBTyxFQUFFLENBQUUsZ0NBQWEsRUFBRSxtQkFBVyxFQUFFLGlCQUFVLEVBQUMsMkJBQW1CO2FBQ3BFO1lBRUQsWUFBWSxFQUFFLENBQUUsNEJBQVksQ0FBQztZQUU3QixTQUFTLEVBQUUsQ0FBRSw0QkFBWSxDQUFFO1lBQzNCLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLHlCQUFnQixFQUFFLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxFQUFFLHdCQUFVLENBQUM7WUFDcEYsT0FBTyxFQUFFLENBQUMsNkJBQXNCLENBQUM7U0FDbEMsQ0FBQztPQUVXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSxIdHRwLFhIUkJhY2tlbmQsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7RGF0ZVBpcGUsIExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tIFwiLi9wcm92aWRlcnMvYXBwLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IENhcm91c2VsTW9kdWxlfSBmcm9tICduZ3gtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgIH0gZnJvbSBcIm1vZHVsZVwiO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cclxuICBpbXBvcnRzOiBbIEJyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBIdHRwTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGVcclxuICBdLCAgICAgIC8vIG1vZHVsZSBkZXBlbmRlbmNpZXNcclxuXHJcbiAgZGVjbGFyYXRpb25zOiBbIEFwcENvbXBvbmVudF0sICAgLy8gY29tcG9uZW50c1xyXG5cclxuICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sICAgICAvLyByb290IGNvbXBvbmVudCBcclxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSwgQXBwU2VydmljZV0sICAgICAgICAgICAgICAgICAgICAvLyBzZXJ2aWNlc1xyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19