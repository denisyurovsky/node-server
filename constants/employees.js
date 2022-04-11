const faker = require('faker');
const positions = require('./workPositions.js')

faker.seed(0);

const employees = []

for (let i = 0; i < 30; i++) {
    employees.push({
        id: faker.datatype.uuid(),
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        salary: faker.datatype.number(),
        birthday: faker.date.between('1980-01-01', '2015-01-05').toUTCString(),
        position: faker.random.arrayElement(positions)
    });
  }
  

module.exports = employees