const mongoose = require("mongoose");
const schema = mongoose.Schema;

const programSchema = new schema({
    nameprogram: String,
    nameuser: String,
    datestart: String,
    docteur: String,

});
const Program = mongoose.model("Program", programSchema);
module.exports = Program;