require("dotenv").config()
const cloudinary = require("cloudinary").v2

cloudinary.api.transformation("1", { max_results: 500 }, (error, result) =>
  console.log(error, result?.derived?.length)
)
