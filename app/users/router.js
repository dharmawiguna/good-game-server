var express = require("express");
var router = express.Router();
const {
  viewSignIn,
  //   viewCreate,
  //   actionCreate,
  //   viewEdit,
  //   actionEdit,
  //   actionDelete,
} = require("./controller");

router.get("/", viewSignIn);
// router.get("/create", viewCreate);
// router.post("/create", actionCreate);
// router.get("/edit/:id", viewEdit);
// router.put("/edit/:id", actionEdit);
// router.delete("/delete/:id", actionDelete);

module.exports = router;
