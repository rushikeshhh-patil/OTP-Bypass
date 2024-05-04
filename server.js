const express = require('express');
const bodyParser = require('body-parser');
const CryptoJS = require('crypto-js');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const secretKey = "7gD5tR9xP2fN3sH6jK8lM0qA4wE1vY5u";  // AES key

// Encrypt and decrypt utility functions
function encrypt(text, key) {
    return CryptoJS.AES.encrypt(text, key).toString();
}

function decrypt(ciphertext, key) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}

// Endpoint to send OTP
app.post('/send-otp', (req, res) => {
    console.log("Received data for OTP:", decrypt(req.body.data, secretKey));
    const encryptedOTP = encrypt("000000", secretKey);
    res.json({ encryptedOTP });
});

// Endpoint to verify OTP
app.post('/verify-otp', (req, res) => {
    const decryptedOTP = decrypt(req.body.otp, secretKey);
    console.log("Received OTP for verification:", decryptedOTP);
    const isValid = decryptedOTP === "000000";
    const encryptedResponse = encrypt(isValid.toString(), secretKey);
    res.json({ encryptedResponse });
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
