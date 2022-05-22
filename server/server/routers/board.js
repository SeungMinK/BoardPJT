let express = require("express");
let router = express.Router();

const getConnection = require("../../lib/db");
const logger = require("../../public/js/logger");
const exec_sql = require("../../public/js/exec_sql");
require("dotenv").config();
router.post("/inquiry", function (req, res) {
  getConnection((connection) => {
    (async () => {
      try {
        const selectDataQuery = await exec_sql(connection, selectDataQuery);
        if (selectDataQuery) res.status(200).send(selectDataQuery);
        else res.status(400).send(false);
      } catch (err) {
        console.log(err);
      } finally {
        connection.release();
      }
    })();
  });
});
module.exports = router;
