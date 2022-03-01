"use strict";

module.exports.register = async (router) => {
  // Get entire reviews JSON object
  router.get(
    "/admin/reviews",
    async (req, res) => {
      res.send(req.app.get("reviewsJSON"));
    }
  );
};