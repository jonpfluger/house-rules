// require("dotenv").config();

// const cloudinary = require("cloudinary").v2;

// console.log(cloudinary.config().cloud_name);

// cloudinary.uploader
//     .upload()


const uploadUrlInput = document.querySelector('[name="game-photo"]')
    const uploadWidgetButton = document.getElementById("upload_widget")

    var myWidget = cloudinary.createUploadWidget({
        cloudName: "dih7bmipw",
        uploadPreset: "HR_images"
    }, 
        (error, result) => {
            if (!error && result && result.event === "success") {
                console.log("Done! Here is the image info: ", result.info);
                uploadUrlInput.value = result.info.secure_url
                uploadWidgetButton.style.display = 'none'
            }
        }
    );

    uploadWidgetButton.addEventListener("click", function(){
        myWidget.open();
    }, false);