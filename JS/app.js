const getcolor = () => {
    // haxanumber
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomcolor = "#" + randomnumber.toString(16);  //hex code

    document.getElementById("color-code").innerHTML = randomcolor;
    document.body.style.backgroundColor = randomcolor;
    document.getElementById("color-code").style.color = randomcolor;
    document.getElementById("btn").style.backgroundColor = randomcolor;
}
// event call
document.getElementById("btn").addEventListener(
    "click", 
    getcolor
)

getcolor();

setInterval(function() {
    getcolor();
},5000);