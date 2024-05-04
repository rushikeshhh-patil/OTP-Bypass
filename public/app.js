const key = "7gD5tR9xP2fN3sH6jK8lM0qA4wE1vY5u"; // Encryption & Decryption key

// AES encryption and decryption functions
function encrypt(data) {
    return CryptoJS.AES.encrypt(data, key).toString();
}

function decrypt(encryptedData) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, key);
    return bytes.toString(CryptoJS.enc.Utf8);
}

function sendOTP() {
    const mobileNumber = document.getElementById("mobileNumber").value;
    const encryptedData = encrypt(mobileNumber);
    fetch('/send-otp', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ data: encryptedData })
    }).then(response => response.json())
      .then(data => {
          document.getElementById("otpSection").style.display = 'block';
          document.getElementById("error").style.display = 'none'; // Hide error when new OTP is sent
      }).catch(error => console.error('Error:', error));
}

function verifyOTP() {
    const otp = document.getElementById("otp").value;
    const encryptedOTP = encrypt(otp);
    fetch('/verify-otp', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ otp: encryptedOTP })
    }).then(response => response.json())
      .then(data => {
          const isValid = decrypt(data.encryptedResponse) === "true";
          if (isValid) {
              window.location.href = 'welcome.html'; // Redirect to the welcome page
          } else {
              const errorDiv = document.getElementById("error");
              errorDiv.style.display = 'block';
              errorDiv.textContent = "Invalid OTP. Please try again.";
          }
      }).catch(error => {
          console.error('Error:', error);
          const errorDiv = document.getElementById("error");
          errorDiv.style.display = 'block';
          errorDiv.textContent = 'Error verifying OTP. Please try again.';
      });
}


