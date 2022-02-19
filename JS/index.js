let car = new Car("AW456", new Account("Andres Herrera", "QWE234"))
car.passenger = 4;
car.printDataCar();


let uberX = new UberX("HIX824", new Account("Juan Hernandez", "JFH123"), "Chevrolet", "Spark")
uberX.passenger = 4;
uberX.printDataCar();

let card = new Card (new Payment("JHZ123", "USD$100"), "3445", "12/29/91", "344")
card.printDataPayment();