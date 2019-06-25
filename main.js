
let input1 = document.querySelector('.inp1');
let input2 = document.querySelector('.inp2');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let division = document.querySelector('.division');;
let mult = document.querySelector('.mult');
let button = document.querySelectorAll('button');
let result = document.querySelector('.result');

plus.addEventListener('click', function() {
    calc.input1 = input1.value;
    calc.input2 = input2.value;
    calc.sum();
});

minus.addEventListener('click', function() {
    calc.input1 = input1.value;
    calc.input2 = input2.value;
    calc.minus();
});

division.addEventListener('click', function() {
    calc.input1 = input1.value;
    calc.input2 = input2.value;
    calc.divis();
});

mult.addEventListener('click', function() {
    calc.input1 = input1.value;
    calc.input2 = input2.value;
    calc.mult();
});

let calc = {
    input1: 'null',
    input2: 'null',
    sum: function() {
        result.innerHTML= +this.input1 + +this.input2;
        input1.value = +this.input1 + +this.input2;
        input2.value=0;
    },
    minus: function() {
        result.innerHTML= +this.input1 - +this.input2;
        input1.value = +this.input1 - +this.input2;
        input2.value=0;
    },
    divis: function() {
        result.innerHTML= +this.input1 / +this.input2;
        input1.value = +this.input1 / +this.input2;
        input2.value=0;
    },
    mult: function() {
        result.innerHTML= +this.input1 * +this.input2;
        input1.value = +this.input1 * +this.input2;
        input2.value=0;
    }
}; 


        
    