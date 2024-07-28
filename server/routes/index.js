const express = require("express");
const router = express.Router();
const registerCertificateController = require("../controller/registerCertificate");
const verifyCertificateController = require("../controller/verifyCertificate");

router.post("/register-certificate", registerCertificateController);
router.get("/verify-certificate", verifyCertificateController);

module.exports = router;
