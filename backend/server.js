const express = require("express");
const mongoose = require("mongoose");
const app = express();
const multer = require("multer");
// image file storage path and unique name+extension config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage }); // multipart form data library multer with config
//Database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/headless", { useNewUrlParser: true })
  .then(() => console.log("Connected to database..."))
  .catch((err) => console.error(err));

// Middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//  Controllers
const productController = require("./controllers/productController");
const orderController = require("./controllers/orderController");

// Routes
app.post("/api/product/add", upload.single("image"), productController.create);
app.post("/api/order/set", orderController.create);
app.get("/api/product/all", productController.allProduct);

// Start Server
const port = process.env.PORT || 3000; // checking for dynamic port set.
app.listen(port, () => console.log(`Listening on port ${port}....`));
