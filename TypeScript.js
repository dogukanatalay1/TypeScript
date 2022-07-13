var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a; // int deger atarsam hata alırım
a = 'duguj';
var b = 'atalay';
var c;
c = 3;
var d = true;
var f = 'anything u want';
console.log(a);
console.log(b);
console.log(c);
--;
-- -
    let;
langs: string[];
var boolValues = [true, false];
langs = ['php', 'java', 'c++'];
console.log(langs); // (3) ['php','java','c++']
console.log.apply(// (3) ['php','java','c++']
console, langs); // php java c++
--;
-- -
    function addNumbers(num1, num2) {
        console.log(num1 + num2);
        a = num1 + num2;
        return a;
        // return 'toplamları' + (num1 + num2)  hata verir. 
    };
addNumbers(10, 3);
function optionalEx(num1, num2) {
    // ? optional parametre anlamına gelir
    // gelmese de olur yani :D
    if (typeof num2 === 'undefined') {
        return num1;
    }
    return num1 + num2;
}
optionalEx(20, 40);
optionalEx(10);
function defaultEx(num1, num2) {
    if (num2 === void 0) { num2 = 100; }
    // bla bla
}
function ex(a, b) {
    // void bildiğimiz void, dönemiyor
}
--;
--;
-- - /** @class */ (function () {
    // private a
    function Person(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        console.log('kişi oluşturuldu');
    }
    Person.prototype.showInfos = function () {
        console.log("Isim: ".concat(this.name, ", Yas: ").concat(this.age));
    };
    return Person;
}()); // let person1 = new Person('duguj', 25, 'xiaomi')
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, phone, salary) {
        var _this = _super.call(this, name, age, phone) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.changeDepartment = function () {
        console.log('departman degistiriliyor');
    };
    return Employee;
}(Person));
--;
--;
--;
--;
--;
--;
--;
--Interface;
var MySql = /** @class */ (function () {
    function MySql() {
    }
    MySql.prototype.add = function () { console.log('mysql.add'); };
    MySql.prototype.get = function () { console.log('mysql.get'); };
    MySql.prototype["delete"] = function () { console.log('mysql.delete'); };
    MySql.prototype.update = function () { console.log('mysql.update'); };
    return MySql;
}());
var mysql = new MySql();
mysql.add();
function addDatabase(database) {
    database.add();
}
addDatabase(new MySql());
// veya tekil
function addDatabaseMySql(database) {
    database.add();
}
addDatabaseMySql(new MySql());
--;
--;
--;
--;
--;
-- -
;
