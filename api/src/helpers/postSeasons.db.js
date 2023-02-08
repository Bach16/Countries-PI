const {Country,Activity,Season} = require("../db")


const createSeasonsDb  = async(data = [{name:"spring"},{name:"summer"},{name:"fall"},{name:"winter"}]) => {
    const country = await Season.bulkCreate(data)
    return country
}

module.exports = {
    createSeasonsDb,
};