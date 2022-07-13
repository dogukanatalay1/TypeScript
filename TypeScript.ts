let a : string; // int deger atarsam hata alırım

a = 'duguj'

let b : string = 'atalay'

let c : number;
c = 3;

let d : boolean = true;

let f : any = 'anything u want'

console.log(a)
console.log(b)
console.log(c)
  -----
let langs : string[]
let boolValues : Array<Boolean> = [true,false]

langs = ['php','java','c++']

console.log(langs) // (3) ['php','java','c++']
console.log(...langs) // php java c++

  -----

function addNumbers (num1:number, num2:number) : number {
    console.log(num1 + num2)
    a = num1 + num2
    return a
    // return 'toplamları' + (num1 + num2)  hata verir. 
}

addNumbers(10, 3)

function optionalEx (num1:number, num2?:number) : number {
    // ? optional parametre anlamına gelir
    // gelmese de olur yani :D
    if (typeof num2 === 'undefined') {
        return num1
    }
    return num1 + num2
}

optionalEx(20,40)
optionalEx(10)

function defaultEx (num1:number, num2:number = 100) {
    // bla bla
}

function ex (a,b) : void {
    // void bildiğimiz void, dönemiyor
}

-------

class Person {
    name: string;
    age: number;
    phone: string;
    // private a
    constructor(name: string, age: number, phone: string) {
        this.name = name
        this.age = age
        this.phone = phone

        console.log('kişi oluşturuldu')
    }
    showInfos() {
        console.log(`Isim: ${this.name}, Yas: ${this.age}`)
    }
} // let person1 = new Person('duguj', 25, 'xiaomi')

class Employee extends Person {
    salary: number;
    constructor (name:string,age:number,phone:string,salary:number) {
        super(name,age,phone)
        this.salary = salary
    }
    changeDepartment() {
        console.log('departman degistiriliyor')
    }
} 

----------------

Interface 
interface IDatabase {
    add()
    get()
    delete()
    update()
// Interface'de methodlar gövdesiz yazılır, bu Interface', implemente 
// eden class'ların methodları kendilerine göre yazması gerekir
}
class MySql implements IDatabase {
    add() { console.log('mysql.add') }
    get() { console.log('mysql.get') }
    delete() { console.log('mysql.delete') }
    update() { console.log('mysql.update') }
}

let mysql = new MySql();
mysql.add()

function addDatabase(database:IDatabase) {
    database.add()
}
addDatabase(new MySql())
// veya tekil
function addDatabaseMySql(database:MySql) {
    database.add()
}
addDatabaseMySql(new MySql())

-------------

