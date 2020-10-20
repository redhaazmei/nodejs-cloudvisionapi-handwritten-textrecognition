# Handwritten Text Recognition with Google Cloud Vision API and Node.js

Simple example to recognize handwritten text in an image, using Express and Cloud Vision API. Test images are both handwritten text in Malay and English.

## Setup the Vision API & Service Account Key

Before you can use the Cloud Vision API, you must enable the API in your [Google Cloud Console](console.cloud.google.com). Follow the steps [here](https://cloud.google.com/vision/docs/before-you-begin).

## Install, Configure, and Run
1. Install dependencies by running:
```bash
npm install
```
2. Create .env file in the root folder

3. Configure your **GOOGLE_APPLICATIONS_CREDENTIALS** in the .env file
```bash
GOOGLE_APPLICATION_CREDENTIALS=path_to_your_service_account_key.json
```
4. Simply run:
```bash
node index.js
```