import React from "react";
import "./DonationForm.css";

const DonationForm = () => {
<<<<<<< HEAD
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
              <p><span>UPI ID:</span>shree90099@barodampay</p>
              <p><span>Account Name:</span>Shri Ram Mandir Nirman Samiti</p>
              <p><span>Account Number:</span>39170200000079</p>
              <p><span>IFSC Code:</span>BARB0AVANTI</p>
              <p><span>Branch:</span>Avanti Vihar,Raipur</p>
            </div>

          </div>

        </div>

      </div>

=======

  
  return (
    <div className="donation-form-container" id="donation">
      {/* Heading */}
      <h2 className="donation-heading">Bank Details for Donations</h2>

      {/* Cards Container */}
      <div className="bank-cards-container">
        {/* Bank Card 1 */}
        <div className="bank-card animate-left">
          <div className="bank-logo">
            <img
              src="../Assets/sbi.png" 
              alt="Bank Logo"
              className="logo"
            />
          </div>
          <div className="bank-info  ">
            <h4>Shri Ram Mandir Raipur (SBI)</h4>
            <p>Donate using UPI ID: <strong>shrirammandir@sbi</strong></p>
            <p>A/C Name: Shri Ram Mandir Raipur</p>
            <p>A/C No.: 39161495808</p>
            <p>IFSC Code: SBIN0002510</p>
            <p>Branch: Raipur, CG</p>
          </div>
          <div className="qr-code-container">
            <p>Scan & Pay using any UPI App:</p>
            <img 
              src="../Assets/QRCode.png"
              alt="QR Code" 
              className="qr-code" 
            />
          </div>
        </div>

        {/* Bank Card 2 */}
        <div className="bank-card animate-bottom ">
          <div className="bank-logo">
            <img
              src="../Assets/pnb.png" 
              alt="Bank Logo"
              className="logo"
            />
          </div>
          <div className="bank-info">
            <h4>Shri Ram Mandir Raipur (PNB)</h4>
            <p>Donate using UPI ID: <strong>shrirammandir@PNB</strong></p>
            <p>A/C Name:  Shri Ram Mandir Raipur</p>
            <p>A/C No.: 1234567890</p>
            <p>IFSC Code: PNB0002510</p>
            <p>Branch: Raipur, CG</p>

          </div>
          <div className="qr-code-container">
            <p>Scan & Pay using any UPI App:</p>
            <img 
              src="../Assets/QRCode.png"
              alt="QR Code" 
              className="qr-code" 
            />
          </div>
        </div>

        {/* Bank Card 3 */}
        <div className="bank-card animate-right">
          <div className="bank-logo">
            <img
              src="../Assets/hdfc.png" 
              alt="Bank Logo"
              className="logo"
              style={{    width: "150px"}}
            />
          </div>
          <div className="bank-info">
            <h4>Shri Ram Mandir Raipur (HDFC)</h4>
           <p>Donate using UPI ID: <strong>shrirammandir@HDFC</strong></p>
            <p>A/C Name: Shri Ram Mandir Raipur</p>
            <p>A/C No.: 9876543210</p>
            <p>IFSC Code: HDFC0005678</p>
            <p>Branch: Raipur, CG</p>
          </div>
          <div className="qr-code-container">
            <p>Scan & Pay using any UPI App:</p>
            <img 
              src="../Assets/QRCode.png"
              alt="QR Code" 
              className="qr-code" 
            />
          </div>
        </div>
      </div>
>>>>>>> 1baeffa9a5f3de632b379ceccbc24c3a8f633c19
    </div>
  );
};

export default DonationForm;
