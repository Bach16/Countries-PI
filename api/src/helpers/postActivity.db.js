const {Country,Activity,Season} = require("../db")

const dbPostCountries = async(data) => {
    const post = {
        name:data.name,
        difficulty:data.difficulty,
        duration:data.duration
    }
    const newActivity = await Activity.create(post);
    await newActivity.addSeasons(data.season)
    return newActivity
}

module.exports = {
    dbPostCountries,
};