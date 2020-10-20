require('dotenv').config()
const vision = require('@google-cloud/vision');

process.env.GOOGLE_APPLICATION_CREDENTIALS;

const runCloud = async () => {
    try {
        const client = new vision.ImageAnnotatorClient();
        const [result] = await client.textDetection('./test-images/malay.jpg');
        const detections = result.textAnnotations;
        const [ text, ...others ] = detections;
        console.log(text)
    } catch (error) {
        console.log(error)
    }

}
runCloud();