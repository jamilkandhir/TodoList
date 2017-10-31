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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var AppService = (function () {
    function AppService(http) {
        this.http = http;
        console.log("Application Service Started");
    }
    /**
        * getTodos
        */
    AppService.prototype.getTodos = function () {
        return this.http.get('/todos').map(function (res) {
            return res.json();
        });
    };
    /**
    * getTodos
    */
    AppService.prototype.removeTodo = function (data) {
        return this.http.post('/delete', data).map(function (res) {
            return res.json();
        });
    };
    /**
     * saveTodoService
     */
    AppService.prototype.saveTodoService = function (type, viewData) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var data = viewData;
        if (type != 'save') {
            if (data["completed"] == true) {
                data["completed"] = false;
            }
            else {
                data["completed"] = true;
            }
        }
        return this.http.post('/save', data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    AppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiRDovQXNzZXNtZW50L1RvZG9MaXN0L2Fzc2Vzc21lbnQvc3JjL21haW4vd2ViYXBwLyIsInNvdXJjZXMiOlsic3JjL21haW4vd2ViYXBwL2FwcC9wcm92aWRlcnMvYXBwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQW9EO0FBSXBEO0lBR0ksb0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0o7O1VBRU07SUFDSSw2QkFBUSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWE7WUFDekMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFQTs7TUFFRTtJQUNJLCtCQUFVLEdBQWpCLFVBQWtCLElBQVM7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFhO1lBQ2pELE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxvQ0FBZSxHQUF0QixVQUF1QixJQUFTLEVBQUUsUUFBYztRQUMzQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsSUFBSSxJQUFJLEdBQUUsUUFBUSxDQUFDO1FBRW5CLEVBQUUsQ0FBQSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDN0IsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUNsRCxHQUFHLENBQUMsVUFBQyxHQUFZO1lBQ2YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUE1Q1EsVUFBVTtRQUR0QixpQkFBVSxFQUFFO3lDQUlpQixXQUFJO09BSHJCLFVBQVUsQ0ErQ3RCO0lBQUQsaUJBQUM7Q0FBQSxBQS9DRCxJQStDQztBQS9DWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwLFJlc3BvbnNlLEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcclxuICAgIFxyXG4gICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb24gU2VydmljZSBTdGFydGVkXCIpOyAgICAgICAgXHJcbiAgICB9XHJcbiAvKipcclxuICAgICAqIGdldFRvZG9zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRUb2RvcygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvdG9kb3MnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAgLyoqXHJcbiAgICAgKiBnZXRUb2Rvc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlVG9kbyhkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2RlbGV0ZScsIGRhdGEpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2F2ZVRvZG9TZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlVG9kb1NlcnZpY2UodHlwZTogYW55LCB2aWV3RGF0YT86IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTsgXHJcbiAgICAgICAgbGV0IGRhdGEgPXZpZXdEYXRhO1xyXG5cclxuICAgICAgICBpZih0eXBlICE9ICdzYXZlJyl7XHJcbiAgICAgICAgICAgIGlmKGRhdGFbXCJjb21wbGV0ZWRcIl0gPT0gdHJ1ZSApe1xyXG4gICAgICAgICAgICAgICAgZGF0YVtcImNvbXBsZXRlZFwiXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRhdGFbXCJjb21wbGV0ZWRcIl0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL3NhdmUnLGRhdGEsIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIFxyXG59XHJcbiJdfQ==