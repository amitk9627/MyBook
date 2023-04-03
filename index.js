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
    let root=document.getElementById("root");
    // let div=document.createElement("div");
    //     div.className="product2C";
    // let img=document.createElement('img');
    //     img.className="w-250";
    //     img.setAttribute('src','image/android-chrome-512x512.png');

    // let text=document.createElement('p');
    //     text.className="product2C-text"
    // let price=document.createElement('p');
    //     price.className="product2C-price"
    //     price.innerText=document.getElementById("price").innerText;
          
    // text.innerText=document.getElementById("text").innerText;
    // div.appendChild(img);
    // div.appendChild(price);
    // div.appendChild(text);
    // root.appendChild(div);
    let div=document.createElement('div');
        div.className="single-product";
    let div1=document.createElement('div');
        div1.className="div1";
        let img=document.createElement('img');
            img.className="w-250";
            
            img.setAttribute('src','image/android-chrome-512x512.png');
    div1.appendChild(img);
    // 

    let div2=document.createElement('div');
        div2.className="div2";
        // size large
        let p=document.createElement('p');
            p.className="a2c-heading";
            p.innerText=document.getElementById('text').innerText;
        div2.appendChild(p);
        // size medium
        let q=document.createElement('p');
            q.className="a2c-price";
            q.innerText=document.getElementById('price').innerText;
        div2.appendChild(q);
        let button=document.createElement('button');
            button.className="a2c-button";
            button.innerText="BUY NOW";

    div2.appendChild(button);
    div.appendChild(div1);
    div.appendChild(div2);
    root.appendChild(div);

    console.log(root);

}
