class Main {
    public static void main(String[] args) {
        System.out.println("Hola Mundo");
        UberX uberX = new UberX("AMQ123", new Account("Juan Hernández", "HIX 824"), "Chevrolet", "Spark");
        uberX.setPassenger(4);
        uberX.printDataCar();

        // Car car2 = new Car("QWE567", new Account("Andrea Herrera", "ANDA876"));
        // car2.passegenger = 3;
        // car2.printDataCar();
    }
}