let express = require("express");
let router = express.Router();

const getConnection = require("../../lib/db");
const logger = require("../../public/js/logger");
const exec_sql = require("../../public/js/exec_sql");
require("dotenv").config();
router.post("/inquiry", function (req, res) {
  const selectDataQuery = `select * from tbl_board`;
  getConnection((connection) => {
    (async () => {
      try {
        const selectData = await exec_sql(connection, selectDataQuery);
        if (selectData) res.status(200).send(selectData);
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
