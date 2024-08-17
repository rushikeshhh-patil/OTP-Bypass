# Hardcoded Key Exploitation Lab

## Overview

This repository contains a lab setup designed to demonstrate the security risks associated with hardcoded encryption keys in client-side JavaScript. The lab illustrates how attackers can decrypt and potentially modify encrypted data transmitted between the client and the server. This project is intended for educational purposes to highlight the importance of secure cryptographic practices.

## Objective

The main objective of this lab is to demonstrate the process of exploiting hardcoded encryption keys found within client-side code. This includes intercepting encrypted data, decrypting it using the exposed key, modifying the data, re-encrypting it, and finally sending it back to the server.

## Lab Setup

The lab consists of a simple web application that utilizes CryptoJS for AES encryption and decryption. The encryption key is intentionally hardcoded in the JavaScript file to simulate the vulnerability.

### Prerequisites

- Node.js
- Any modern web browser

### Installation

1. Clone the repository
```bash
git clone https://github.com/rushikeshhh-patil/OTP-Bypass.git
```
2. Navigate to the project directory
```bash
cd OTP-Bypass
```
3. Install dependencies
```bash
npm install express body-parser crypto-js
```
4. Start the server
```bash
npm start or npm server.js
```
5. Visit
```bash
http://localhost:3000
```
For additional simulation scenarios and in-depth discussions on similar vulnerabilities and their mitigation, please refer to the comprehensive resources available at [BreachForce Blog](https://breachforce.net/exploiting-exposed-encryption-keys).
