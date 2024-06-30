import express from "express";
import multer from "./multer-config.js";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import Routes from "./routes/route.js";
import { v2 as cloudinary } from "cloudinary";
import upload from "./multer-config.js";



dotenv.config();
const app = express();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

cloudinary.config({
  cloud_name: 'dytsncwbl',
  api_key: "348421447452276",
  api_secret: "ykkop2-9NkzLbgpYHwmozTcqlPg",
});
app.use(cors());
// Express route for image upload
app.post("/upload", upload.single('image'), async (req, res) => {
  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "testfolder",
      resource_type:"auto"
    });
 // Send the Cloudinary URL in the response
    res.json({ imageUrl: result.secure_url });
   
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error uploading image to Cloudinary" });
  }
});

app.listen(process.env.PORT, async () => {
  await Connection(username, password);
  console.log(`Server is running successfully on PORT ${process.env.PORT}`);

});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);
//console.log(cloudinary.config())

//console.log(`Server is running successfully on PORT ${process.env.PORT}`);
   