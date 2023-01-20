const hello = require("../models/DateModal");
const formatHello = require("../views/FormatHello");

module.exports = class HelloController {
    async index(req, res){
        const returnView = formatHello(hello);

        return res.json(returnView);
    }
}