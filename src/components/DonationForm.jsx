import React from "react";
import "./DonationForm.css";

const DonationForm = () => {
  return (
    <div className="donation-wrapper" id="donation">

      <h2 className="donation-title">Bank Details for Donations</h2>

      <div className="donation-card">

        {/* Bank Logo Top */}
        <div className="bank-logo">
          <img src="../Assets/banklogo.png" alt="Bank Logo" />
        </div>

        <div className="content-row">

          {/* QR Code Section */}
          <div className="qr-column">
            <p className="qr-heading">Scan & Pay</p>
            <img src="../Assets/QRCode.jpeg" alt="QR Code" className="qr-image" />
          </div>

          {/* Bank Information Section */}
          <div className="details-column">

            <h3 className="bank-title">Shri Ram Mandir Raipur</h3>

            <div className="details-list">
              <p><span>UPI ID: </span>shree90099@barodampay</p>
              <p><span>Account Name: </span>Shri Ram Mandir Nirman Samiti</p>
              <p><span>Account Number: </span>39170200000079</p>
              <p><span>IFSC Code: </span>BARB0AVANTI</p>
              <p><span>Branch: </span>Avanti Vihar,Raipur</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DonationForm;
