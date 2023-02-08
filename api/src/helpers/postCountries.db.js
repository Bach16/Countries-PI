const {Country,Activity,Season} = require("../db")

const dbPostCountries = async(data) => {
    Country.bulkCreate(data)
}

module.exports = {
    dbPostCountries,
};