class Payment {
    constructor (id, ammount) {
        this.id = id;
        this.ammount = ammount;
    }

    printDataPayment(){
        console.log(this.id);
        console.log(this.ammount);
        console.log(this.number);
        console.log(this.date);
        console.log(this.cvv);
    }
}