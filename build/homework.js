var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1
function addItemInfoDecorator(target, method, descriptor) {
    let originalFunc = descriptor.value;
    descriptor.value = function () {
        let useDate = new Date();
        let date = useDate.toDateString();
        let info = this.name + " " + "-" + " " + "$" + this.price;
        return { date, info };
    };
    let origResult = originalFunc.apply(this);
}
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getItemInfo() {
        return {
            name: this.name,
            price: this.price
        };
    }
}
__decorate([
    addItemInfoDecorator
], Item.prototype, "getItemInfo", null);
// 2
function addUserDecorator(userType) {
    return function (targetClass) {
        let useDate = new Date();
        return class {
            constructor() {
                this.createDate = useDate.toDateString();
                this.userType = userType;
            }
            ;
        };
    };
}
let User = class User {
};
User = __decorate([
    addUserDecorator("admin")
], User);
// 3
// News api USA
var newsApiUSA;
(function (newsApiUSA) {
    class NewsService {
        constructor() {
            this.apiurl = 'https://news_api_usa_url';
        }
        getNews() { } // method
    }
})(newsApiUSA || (newsApiUSA = {}));
// News api Ukraine
var newsApiUkraine;
(function (newsApiUkraine) {
    class NewsService {
        constructor() {
            this.apiurl = 'https://news_api_2_url';
        }
        getNews() { } // method get all news
        addToFavorite() { } // method add to favorites
    }
})(newsApiUkraine || (newsApiUkraine = {}));
// 4
class Junior {
    doTasks() {
        console.log('Actions!!!');
    }
}
class Middle {
    createApp() {
        console.log('Creating!!!');
    }
}
class Senior {
    createArchitecture() {
        console.log('Creating Architecture!!!');
    }
    ;
    doTasks() { }
    ;
    createApp() { }
    ;
}
applyMixins(Senior, [Junior, Middle]);
function applyMixins(targetClass, baseClasses) {
    baseClasses.forEach((baseClass) => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach((propName) => {
            targetClass.prototype[propName] = baseClass.prototype[propName];
        });
    });
}
