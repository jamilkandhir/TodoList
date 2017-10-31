"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var app_service_1 = require("./providers/app.service");
var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.todos = [];
        this.task = {};
        this.updateTodos();
        this.initForm();
    }
    AppComponent.prototype.initForm = function () {
        this.form = new forms_1.FormGroup({
            taskName: new forms_1.FormControl('', forms_1.Validators.required)
        });
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.saveTask = function (type, viewData) {
        var _this = this;
        if (type == 'save') {
            viewData = this.form.value;
        }
        this.appService.saveTodoService(type, viewData).subscribe(function (res) {
            _this.form.controls['taskName'].setValue("");
            _this.form.controls['taskName']["_touched"] = false;
        }, function (error) {
        }, function () {
            _this.updateTodos();
        });
    };
    AppComponent.prototype.deleteTask = function (data) {
        var _this = this;
        this.appService.removeTodo(data).subscribe(function (res) {
        }, function (error) {
        }, function () {
            _this.updateTodos();
        });
    };
    AppComponent.prototype.updateTodos = function () {
        var _this = this;
        this.appService.getTodos().subscribe(function (res) {
            _this.todos = res;
            _this.todosLength = _this.todos.length;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'todos-app',
            templateUrl: './app/app.html',
            styles: ['todos-app {height:100%;}']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Bc3Nlc21lbnQvVG9kb0xpc3QvYXNzZXNzbWVudC9zcmMvbWFpbi93ZWJhcHAvIiwic291cmNlcyI6WyJzcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxpQ0FBOEI7QUFDOUIsd0NBQW1FO0FBQ25FLHNDQUFpRztBQUlqRyx1REFBcUQ7QUFVckQ7SUFNSSxzQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUpsQyxVQUFLLEdBQVMsRUFBRSxDQUFDO1FBR2pCLFNBQUksR0FBUSxFQUFFLENBQUM7UUFHbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVwQixDQUFDO0lBR00sK0JBQVEsR0FBZjtRQUNPLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBUyxDQUFDO1lBQ3JCLFFBQVEsRUFBTSxJQUFJLG1CQUFXLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3pELENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCwrQkFBUSxHQUFSO0lBQ0EsQ0FBQztJQU1NLCtCQUFRLEdBQWYsVUFBZ0IsSUFBUyxFQUFFLFFBQWM7UUFBekMsaUJBWUM7UUFYRyxFQUFFLENBQUEsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUEsQ0FBQztZQUNmLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvQixDQUFDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDekQsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN2RCxDQUFDLEVBQUUsVUFBQSxLQUFLO1FBRVIsQ0FBQyxFQUFFO1lBQ0MsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdNLGlDQUFVLEdBQWpCLFVBQWtCLElBQVM7UUFBM0IsaUJBUUM7UUFQRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1FBRTlDLENBQUMsRUFBRSxVQUFBLEtBQUs7UUFFUixDQUFDLEVBQUU7WUFDQSxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR00sa0NBQVcsR0FBbEI7UUFBQSxpQkFLQztRQUpJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNyQyxLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNqQixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTFEUSxZQUFZO1FBUHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUMsZ0JBQWdCO1lBQzVCLE1BQU0sRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBRXZDLENBQUM7eUNBUWtDLHdCQUFVO09BTmpDLFlBQVksQ0E0RHhCO0lBQUQsbUJBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlciwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcbmltcG9ydHtWaWV3RW5jYXBzdWxhdGlvbixJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSBcIi4vcHJvdmlkZXJzL2FwcC5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RvZG9zLWFwcCcsXHJcbiAgICB0ZW1wbGF0ZVVybDonLi9hcHAvYXBwLmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbJ3RvZG9zLWFwcCB7aGVpZ2h0OjEwMCU7fSddXHJcbiAgIFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgIFxyXG4gICAgcHJpdmF0ZSB0b2RvcyA6IGFueSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBmb3JtICA6IEZvcm1Hcm91cDtcclxuICAgIHByaXZhdGUgdG9kb3NMZW5ndGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdGFzazogYW55ID0ge307XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcFNlcnZpY2U6IEFwcFNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVUb2RvcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdEZvcm0oKTtcclxuICAgICAgICBcclxuICAgIH0gICBcclxuXHJcblxyXG4gICAgcHVibGljIGluaXRGb3JtKCkge1xyXG4gICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgdGFza05hbWUgICAgOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG4gXHJcblxyXG4gICBcclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBzYXZlVGFzayh0eXBlOiBhbnksIHZpZXdEYXRhPzogYW55KSB7XHJcbiAgICAgICAgaWYodHlwZSA9PSAnc2F2ZScpe1xyXG4gICAgICAgICAgICB2aWV3RGF0YSA9IHRoaXMuZm9ybS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcHBTZXJ2aWNlLnNhdmVUb2RvU2VydmljZSh0eXBlLCB2aWV3RGF0YSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndGFza05hbWUnXS5zZXRWYWx1ZShcIlwiKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd0YXNrTmFtZSddW1wiX3RvdWNoZWRcIl0gPSBmYWxzZTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcblxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUb2RvcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlVGFzayhkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFwcFNlcnZpY2UucmVtb3ZlVG9kbyhkYXRhKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG5cclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgdGhpcy51cGRhdGVUb2RvcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlVG9kb3MoKSB7XHJcbiAgICAgICAgIHRoaXMuYXBwU2VydmljZS5nZXRUb2RvcygpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRvZG9zID0gcmVzO1xyXG4gICAgICAgICAgICB0aGlzLnRvZG9zTGVuZ3RoID0gdGhpcy50b2Rvcy5sZW5ndGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59Il19