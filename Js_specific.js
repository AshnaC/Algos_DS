function func1() {
    setTimeout(() => {
        console.log(x);
        console.log(y);
    }, 10);

    var x = 2;
    let y = 12;
}

// func1();

// 2
// 12
// This is hoisted and Initialised

function func2_1() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 10);
    }
}

// func2_1();

// 3,3,3
// Var is not block Scoped
// Iterator increments i

// Soln

function func2_2() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 10);
    }
}

// func2_2();

//Use let which is block Scoped

function func2_3() {
    for (var i = 0; i < 3; i++) {
        callMe(i);
    }

    function callMe(i) {
        setTimeout(() => console.log(i), 10);
    }
}

//Use closures for remembering out of scope variable

// func2_3();

function assignmentObj() {
    let x = {},
        y = { name: "Ronny" },
        z = { name: "John" };

    x[y] = { name: "Vivek" };
    x[z] = { name: "Akki" };
    console.log(x[y]);
}

// assignmentObj();

// { name: "Akki" };
// Writing x[object] = x[‘object Object’]
// So string Property gets overridden

function runFunc() {
    console.log("1" + 1);
    console.log("A" - 1);
    console.log(2 + "-2" + "2");
    console.log("Hello" - "World" + 78);
    console.log("Hello" + "78");
}

// runFunc();
// ("1" + 1) - "11" Always to String when +
// ("A" - 1); - NaN To number since String doesnot have -
// (2 + "-2" + "2"); - 2-22
// ("Hello" - "World" + 78); - Nan
// ("Hello" + "78") - Hello78

function invoke() {
    var x = 23;
    (function () {
        var x = 43;
        (function random() {
            x++;
            console.log(x);
            var x = 21;
        })();
    })();
}

// invoke();
//NaN
//rANDOM ={ var x= undefined; x++}

// Code 1

let hero = {
    name: "HI",
    powerLevel: 99,
    getPower() {
        return this.powerLevel;
    },
    getOther: () => {
        return this;
    }
};

let getPower = hero.getPower;
let getOther = hero.getOther;

let hero2 = { powerLevel: 42 };
// console.log(getPower());
// console.log(getPower.apply(hero2));

// Undefined = Invoked in window
// Return 42

// console.log(getOther());
// console.log(hero.getOther());
// console.log(getOther.apply(hero2));

//Window
//Window
//Window
// All this Window
// Common for arrow function

class RandMe {
    constructor(name) {
        this.name = name;
    }

    getFn() {
        // In ProtoType
        console.log(this);
    }

    getArrFn = () => {
        // Bind as instance property
        console.log(this);
    };
}

var r = new RandMe("star");
// r.getFn();
// r.getArrFn();

// All refers to r

// Code 2

const a = function () {
    console.log(this);
    const b = {
        func1: function () {
            console.log(this);
        }
    };
    const c = {
        func2: () => {
            console.log(this);
        }
    };
    (function () {
        console.log(this);
    })();
    b.func1();
    c.func2();
};

a();

// Window
// b
// Window
// Window

// Code 3

const b = {
    name: "Vivek",
    f: function () {
        var self = this;
        console.log(this.name);
        (function () {
            console.log(this.name);
            console.log(self.name);
        })();
    }
};

b.f();

// b
// Window
// b

(function (a) {
    return (function () {
        console.log(a);
        a = 23;
    })();
})(45);
// 45
// a declared as function argument
// Only reassigned after console

// Code 2

// Each time bigFunc is called, an array of size 700 is being created,
// Modify the code so that we don't create the same array again and again

function bigFunc(element) {
    let newArray = new Array(700).fill("♥");
    return newArray[element];
}

console.log(bigFunc(599)); // Array is created
console.log(bigFunc(670)); // Array is created again

function bigFunc() {
    let newArray = new Array(700).fill("♥");
    return function (element) {
        return newArray[element];
    };
}

let bf = bigFunc();
bf(100);
bf(200);
