var img = [
{image:"taj.png", about:"TAJ MAHAL"},
{image:"pyramid.jpg", about:"PYRAMID"},
{image:"petra.png", about:"PETRA"},
{image:"tower.png", about:"EIFFEL TOWER"}
];

var index=0;
function nex()
{
    index++;
    if(index >= img.length)
        index=0;
    document.getElementById("image").src=img[index].image;
    document.getElementById("about").innerHTML =img[index].about;
}

function prev()
{
    index--;
    if(index <0)
        index=img.length-1;
    document.getElementById("image").src=img[index].image;
    document.getElementById("about").innerHTML =img[index].about;
}

