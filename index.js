window.onload = function () {
    //Self Invoking Function
    (function () {
        console.log("hi");
    })();

    //this = Window => Function invoked from window
    function doSomething() {
        console.log(this);
    }
    doSomething();

    let person = {
        name: "Klaus",
        address: "My place",
        getName: function () {
            console.log(this.name);
            return this.name;
        }
    };
    person.getName(); // this - Person
    //If arrow function => this refers to window

    let getName = person.getName;
    let person2 = { name: "els", getName };
    person2.getName(); // els

    let person3 = { address: "address", getName };
    person3.getName(); // undefined

    let person4 = { address: "address" };
    // person4.getName(); // error, it has no function getName

    //Currying
    const sum = a => {
        return b => {
            return a + b;
        };
    };
    console.log("Sum", sum(1)(3));

    const memoizationSquare = () => {
        let cache = {};
        return function (num) {
            if (cache[num]) return cache[num];
            console.log("Calculating");
            let val = (cache[num] = num ** 2);
            return val;
        };
    };
    let memFun = memoizationSquare();
    console.log(memFun(10));
    console.log(memFun(10));

    // ES6 version classes
    class Student {
        constructor(name, rollNumber, grade, section) {
            this.name = name;
            this.rollNumber = rollNumber;
            this.grade = grade;
            this.section = section;
        }

        // Methods can be directly added inside the class
        getDetails() {
            return `Name: ${this.name}, Roll no: ${this.rollNumber}, Grade:${this.grade}, Section:${this.section}`;
        }

        getSomeStuff = () => {
            return this.name;
        };
    }

    let student2 = new Student("Garry", 673, "7th", "C");
    console.log(student2.getDetails());
    console.log(student2.getSomeStuff());
};
