
    const shapeSelect = document.getElementById("shape");
    const characterInput = document.getElementById("character");
    const sizeInput = document.getElementById("size");
    const drawRegion=document.getElementById("draw");
    console.log(drawRegion);
    const shapes = {
        diamond: {
            size: 0,
            character: "",
            selected: false
        },
        rightTriangle: {
            size: 0,
            character: "",
            selected: false
        },
        invertedRightTriangle: {
            size: 0,
            character: "",
            selected: false
        },
        equilateralTriangle: {
            size: 0,
            character: "",
            selected: false
        },
        rectangle: {
            size: 0,
            character: "",
            selected: false
        },
        rectangleWithDiagonal: {
            size: 0,
            character: "",
            selected: false
        }

    };

function loadOption() {
    let shapeNames = Object.keys(shapes);
    console.log(shapeNames);
    for (var i = 0; i < shapeNames.length; i++) {
        shapeSelect.innerHTML += "<option value=\"" + shapeNames[i] + "\">" + shapeNames[i] + "</option>";
    }
}
function changeShape() {
    console.log(shapeSelect.value);
    switch (shapeSelect.value) {
        case "diamond":
            shapes.diamond.size = sizeInput.value;
            shapes.diamond.character = characterInput.value;
            shapes.diamond.selected = true;
            drawRegion.innerHTML=drawDiamond(sizeInput.value);
            break;
        case "rightTriangle":
            shapes.rightTriangle.size = sizeInput.value;
            shapes.rightTriangle.character = characterInput.value;
            shapes.rightTriangle.selected = true;
            break;
        case "invertedRightTriangle":
            shapes.invertedRightTriangle.size = sizeInput.value;
            shapes.invertedRightTriangle.character = characterInput.value;
            shapes.invertedRightTriangle.selected = true;
            break;
        case "equilateralTriangle":
            shapes.equilateralTriangle.size = sizeInput.value;
            shapes.equilateralTriangle.character = characterInput.value;
            shapes.equilateralTriangle.selected = true;
            break;
        case "rectangle":
            shapes.rectangle.size = sizeInput.value;
            shapes.rectangle.character = characterInput.value;
            shapes.rectangle.selected = true;
            drawRegion.innerHTML=drawRectangle(sizeInput.value);
            break;
        case "rectangleWithDiagonal":
            shapes.rectangleWithDiagonal.size = sizeInput.value;
            shapes.rectangleWithDiagonal.character = characterInput.value;
            shapes.rectangleWithDiagonal.selected = true;
            console.log(drawRectangle(sizeInput.value));
            drawRegion.innerHTML=drawRectangleWithDiagonal(sizeInput.value);
            break;
    }

}

loadOption();

function drawRectangle(size){
    let height=size;
        let width=size;
        for (var i = 0; i < height; i++) {
            for (var j = 0; j < width; j++) {
                if (i == 0 || i == height-1) {
                    //print all star
                    document.write("*");
                } else {
                    if (j == 0 || j == width-1) {
                        document.write("*");
                    } else {
                        document.write("&nbsp;&nbsp;");

                    }
                }
            }
            document.write("<br>");
        }
}

function drawDiamond(size){
    // let size = 5;
        let starCount = 0;
        let whiteCount = 0;
        if(size%2==0){
            size=size+1;
        }
        for (var i = 0; i < size; i++) {
            starCount = i * 2 + 1;
            
            if (starCount > size) {
                whiteCount = i - Math.floor(size / 2);
                // console.log("Math.floor(size / 2)="+Math.floor(size / 2));
                // console.log("i="+i);
                starCount = size * 2 - starCount;

            } else {
                whiteCount = Math.floor(size / 2) - i;

            }
            console.log("i:"+i+" w:"+whiteCount+" *:"+starCount);
            for (var j = 0; j < whiteCount; j++) {
                document.write("&nbsp;&nbsp;");
            }
            for (var j = 0; j < starCount; j++) {

                //print all star
                document.write("*");
            }
            document.write("<br>");
        }
}

function drawRectangleWithDiagonal(size){
    // let size = 19;
    let html="";
for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
        if (i == 0 || i == size - 1) {
            //print all star
            // document.write("*");
            html+="*";
        } else {
            if (j == 0 || j == size - 1) {
                // document.write("*");
                html+="*";
            } else {
                if (j == i) {
                    html+="*";
                    // document.write("*");
                } else if (j == ((size - 2) - (i - 1))) {
                    // document.write("*");
                    html+="*";
                } else {
                    html+="&nbsp;&nbsp;";
                    // document.write("&nbsp;&nbsp;");
                }

            }
        }
    }
    html+="<br>";
    // document.write("<br>");
}
return html;
}