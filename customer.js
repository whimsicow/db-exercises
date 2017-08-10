require('dotenv').config();
const pg = require('pg-promise')();
const dbConfig = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    database: process.env.DB_NAME
};


class Customer {
    constructor(name, email, addr, password) {
        this.db = pg(dbConfig);
        this.name = name;
        this.email = email;
        this.address = addr;
        this.password = password;
    }

    save() {
        return this.db.query(`
            insert into customers
            (name, email, address, password) 
            values
            ('${this.name}', '${this.email}', '${this.address}', '${this.password}')
        `);
    }
}

module.exports = Customer;