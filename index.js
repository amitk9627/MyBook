// login form pop-up
document.getElementById("LOGIN").addEventListener("click",function (){
    document.getElementById("myform").style.display="block";
});
document.getElementById("CLOSE").addEventListener("click",function(){
    document.getElementById("myform").style.display="none";
});
// A2C
document.getElementById("a2c").addEventListener("click",function (){
    document.getElementById("A2C").style.display="block";
    document.getElementById("carousel-active").style.marginRight="400px"
});
document.getElementById("A2Cclose").addEventListener("click",function(){
    document.getElementById("A2C").style.display="none";
    document.getElementById("carousel-active").style.marginRight="0px"
});



function getnow(){
    var root=document.getElementById("root");
    var div=document.createElement("div");
        div.className="product2C";
    var img=document.createElement('img');
        img.className="w-250";

    var text=document.createElement('p');
        text.className="product2C-text"
        img.setAttribute('src','image/android-chrome-512x512.png'); 
    text.innerText=document.getElementById("text").innerText;
    div.appendChild(img);
    div.appendChild(text);
    root.appendChild(div);



    console.log(root);

}
