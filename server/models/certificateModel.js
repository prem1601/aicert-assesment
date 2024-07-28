const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
  {
    recipientName: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    issuerName: {
      type: String,
      required: true,
    },
    dateOfIssue: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const certificateModel = mongoose.model("certificate", certificateSchema);

module.exports = certificateModel;
