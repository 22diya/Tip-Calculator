
//  CLASS TO TAKE ELEMENTS
class Handler {
    constructor(inc, dec, input) {
        this.inc = inc;
        this.dec = dec;
        this.input = input;
    }
}

// CLASS TO HANDLE TIP VALUE
class Tip extends Handler {

    increase = () => {
        if (this.input.value == "") { this.input.value = 1; }
        else { this.input.value = (parseInt(this.input.value) + 1); }
        calc();
    }

    decrease = () => {
        if (this.input.value <= 0) { return; }
        this.input.value = (parseInt(this.input.value) - 1);
        calc();
    }
}

// CLASS TO HANDLE PEOPLE VALUE
class People extends Handler {

    increase = () => {
        this.input.value = (parseInt(this.input.value) + 1);
        calc();
    }

    decrease = () => {
        if (this.input.value <= 1) { return; }
        this.input.value = (parseInt(this.input.value) - 1);
        calc();
    }
}

// BILL INPUT ELEMENT
let bill = document.getElementById('bill');

// TIP OBJECT
let tip = new Tip(document.getElementById('incTip'),
    document.getElementById('decTip'),
    document.getElementById("tip"));

// PEOPLE OBJECT
let people = new People(document.getElementById('incPeople'),
    document.getElementById('decPeople'),
    document.getElementById("people"));


// EVENT LISTENER CALLED BY OBJECTS ON PRESSING BUTTONS
tip.inc.addEventListener('click', tip.increase);
tip.dec.addEventListener('click', tip.decrease);

people.inc.addEventListener('click', people.increase);
people.dec.addEventListener('click', people.decrease);

// function to calculate tip
function calc(event) {
    let Bill = bill.value == "" ? 0 : parseFloat(bill.value, 2);
    let Tip = tip.input.value == "" ? 0 : parseFloat(tip.input.value, 2);
    let NoP = parseFloat(people.input.value);
    let tip_ = (Tip / 100) * Bill;
    let Tip_pp = tip_ / NoP;
    let Total_pp = (Bill + tip_) / NoP;

    document.getElementById("tipValue").textContent = "$" + Tip_pp.toFixed(2);
    document.getElementById("totalValue").textContent = "$" + Total_pp.toFixed(2);
}

bill.addEventListener('change', calc);
tip.input.addEventListener('change', calc);
people.input.addEventListener('change', calc);

// Exception Handling
setInterval(function () {
    if (bill.value < 0) { bill.value = (bill.value * -1).toFixed(2); }
    bill.value = parseFloat(bill.value);
    if (tip.input.value < 0) { tip.input.value = (tip.input.value * -1); }
    tip.input.value = parseFloat(tip.input.value);
    if (people.input.value < 0) { people.input.value = (people.input.value * -1); }
    if (people.input.value == "0") { people.input.value = 1 }
    people.input.value = parseInt(people.input.value);
}, 100)