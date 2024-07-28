const certificateModel = require("../models/certificateModel");

async function registerCertificateController(req, res) {
  try {
    const { recipientName, courseName, issuerName, dateOfIssue } = req.body;

    if (!recipientName || !courseName || !issuerName || !dateOfIssue) {
      throw new Error("Please provide required data.");
    }

    const certificateData = new certificateModel(req.body);
    const saveCertificate = await certificateData.save();

    res.status(201).json({
      message: "Certificate registered successfully.",
      id: saveCertificate._id,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      id: "",
    });
  }
}

module.exports = registerCertificateController;
