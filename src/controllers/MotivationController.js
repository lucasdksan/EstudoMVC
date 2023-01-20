const MotivationModal = require("../models/MotivationModal");
const FormatMotivation = require("../views/FormatMotivation");

module.exports = class MotivationController {
    async index(req, res){
        const { name } = req.query;
        const inFull = MotivationModal();

        return res.json(FormatMotivation(name, inFull));
    }
}