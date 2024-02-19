function preload() {
    img = loadImage("dog_cat.jpg")
    img2 = loadImage("https://i.postimg.cc/cLChj1md/images.jpg")
    img3 = loadImage("https://i.postimg.cc/bNv86MZ1/new-learning-how-to-open-up-to-people-1.jpg")
}


function setup() {
    canvas = createCanvas(640, 420)
    canvas.center()
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
}

function modelLoaded() {
    console.log("the model has been loaded")
    objectDetector.detect(img, gotitem)
    document.getElementById("status").innerHTML = "Status:Dectecting"
}

label = "-"
confidence = '-'


function gotitem(error, results) {
    console.log(results)
    length = results.length
    console.log(length)
    objects = results


}


function draw() {
    image(img, 0, 0, 640, 420)


    if (length > 0) {
        document.getElementById("status").innerHTML = "Status : Object Dectected"
        for (let i = 0; i < length; i++) {
            label = objects[i].label
            confidence = floor(objects[i].confidence * 100)
            //console.log(label)
            //console.log(confidence)
            fill("black")
            text(label + " " + confidence + "%", objects[i].x, objects[i].y)
            textSize(30)
            noFill()
            stroke("black")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)

        }
    }

}

