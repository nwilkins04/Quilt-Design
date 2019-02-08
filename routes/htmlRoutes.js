var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        if (req.user) {
            res.redirect("/members");
        }
    })
}