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
var core_1 = require('@angular/core');
var search_service_1 = require('../service/search.service');
var UserComponent = (function () {
    function UserComponent(searchService) {
        this.searchService = searchService;
        this.username = "";
    }
    UserComponent.prototype.search = function () {
        var _this = this;
        //console.log("searching...");
        this.searchService.updateUsername(this.username);
        this.searchService.getUser().subscribe(function (users) {
            //console.log(users);
            _this.users = users;
        });
        this.searchService.getRepo().subscribe(function (repos) {
            //console.log(repos);
            _this.repos = repos;
        });
    };
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user',
            templateUrl: "user.component.html",
            providers: [search_service_1.SearchService]
        }), 
        __metadata('design:paramtypes', [search_service_1.SearchService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map