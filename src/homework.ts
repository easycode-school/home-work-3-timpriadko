// 1
function addItemInfoDecorator(target: Object, method: string, descriptor: PropertyDescriptor) {
    let originalFunc = descriptor.value;

    descriptor.value = function() {
        let useDate = new Date();
        let date = useDate.toDateString();
        let info = this.name + " " + "-" + " " + "$" + this.price;
        let origResult = originalFunc.apply(this);
        return {
            origResult,
            date,
            info
        };
    }
}

class Item {
    public price: number;
    public name: string;

    constructor(name: string ,price: number) {
        this.name = name;
        this.price = price;
    }

    @addItemInfoDecorator
    public getItemInfo() {
        return {
            name: this.name, 
            price: this.price
        };
    }
}

let item = new Item('Apple', 100);
console.log(item.getItemInfo());

// 2
function addUserDecorator(userType: string ) {
    return function (targetClass) {
    let useDate = new Date();
        return class {
            createDate: String = useDate.toDateString();;
            userType: String = userType;
        };
    };
}

@addUserDecorator("admin")
class User {

}

// 3
// News api USA
namespace newsApiUSA {
    interface INews {
        id: number;
        title: string;
        text: string;
        author: string;
    }
    
    class NewsService {
        protected apiurl: string = 'https://news_api_usa_url'
        public getNews() {} // method
    }
}

// News api Ukraine
namespace newsApiUkraine {
    interface INews {
        uuid: string;
        title: string;
        body: string;
        author: string;
        date: string;
        imgUrl: string;
    }
    
    class NewsService {
        protected apiurl: string = 'https://news_api_2_url'
        public getNews() {} // method get all news
        public addToFavorite() {} // method add to favorites
    }
}

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


class Senior implements Junior, Middle {    
    createArchitecture() {
        console.log('Creating Architecture!!!');
    };
    
    doTasks(): void {};
    createApp(): void {};
}

applyMixins(Senior, [Junior, Middle]);
 
function applyMixins(targetClass: any, baseClasses: any[]) {
    baseClasses.forEach((baseClass) => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach((propName) => {
            targetClass.prototype[propName] = baseClass.prototype[propName];
        });
    });
}