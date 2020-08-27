function tryit() {
    var x = document.forms['form1'];
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + " ";
    }
    document.getElementById("demo").innerHTML = text;
}

function myMove() {
    var elem = document.getElementById("child");
    var pos = 0;
    var id = setInterval(frame, 15);

    function frame() {
        if (pos == 175) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
document.getElementById('demo2').onmouseover = displayDate;
document.getElementById('demo2').onmouseout = text2;

function text2() {
    document.getElementById('demo2').innerHTML = "Hello, Hover on this text to show Date and Time.";
}

function displayDate() {
    document.getElementById('demo2').innerHTML = Date();
}

var para = document.createElement("h4");
var dummy = document.createTextNode("Created and handled by Nodes");
para.appendChild(dummy);

var custom = document.getElementById('div1');
custom.appendChild(para);