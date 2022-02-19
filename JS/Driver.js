class Driver extends Account {
    constructor (id, name, document, email, password) {
        super(id, name, document, email, password)
    }

    printDataDriver(){
        console.log(`Nombre: ${this.name}`, `Document: ${this.document}`,
        `E-mail: ${this.email}`, `Password: ${this.password}`)
    }
}