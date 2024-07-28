const certificateModel = require("../models/certificateModel");

async function verifyCertificateController(req, res) {
  try {
    const id = req.query.id;

    if (!id || id.length !== 24) {
      throw new Error("Please provide valid ID.");
    }

    const certificateData = await certificateModel.findOne({ _id: id });

    if (!certificateData) {
      return res.json({
        message: "Certificate requested is not vaild.",
        data: { id },
      });
    }

    res.json({
      message: "Certificate requested is vaild.",
      data: certificateData,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      data: {},
    });
  }
}

module.exports = verifyCertificateController;
