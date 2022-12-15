let imgUrl = ''

const uploadUrlInput = document.querySelector('[name="game-photo"]')
const uploadWidgetButton = document.getElementById("upload_widget")

    var myWidget = cloudinary.createUploadWidget({
        cloudName: "dih7bmipw",
        uploadPreset: "HR_images"
    }, 
        (error, result) => {
            if (!error && result && result.event === "success") {
                console.log("Done! Here is the image info: ", result.info);
                imgUrl = result.info.url
                uploadWidgetButton.style.display = 'block'
            }
        }
    );

    uploadWidgetButton.addEventListener("click", function(event) {
        event.preventDefault()
        myWidget.open();
    }, false);