import { Cloudinary } from "@cloudinary/url-builder"

const cld = new Cloudinary({
  cloud: {
    cloudName: "pmeediting",
  },
})

const myImage = cld.image("alhfybhwuby7xvzqi7jo")
console.log(myImage.toURL())
