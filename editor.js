let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let huerotate = document.getElementById("hue-rotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let reset = document.querySelector("span");
let imgbox = document.querySelector(".img-Box");
// let canvas = document.getElementById("canvas");
// let con = canvas.getContext("2d"); 

function resetvalue() {
  img.style.filter = "none";
  saturate.value = "100";
  contrast.value = "100";
  brightness.value = "100";
  sepia.value = "0";
  grayscale.value = "0";
  blur.value = "0";
  huerotate.value = "0";
}

window.onload = function () {
  download.style.display = "none";
  reset.style.display = "none";
  imgbox.style.display = "none";
};
upload.onchange = function () {
  resetvalue();
  download.style.display = "block";
  reset.style.display = "block";
  imgbox.style.display = "block";
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    img.src = file.result;
  };
  // img.onload = function () {
  //   canvas.Width = img.Width
  //   canvas.height =img.height
  //   con.drawImage(img, 0, 0,canvas.Width,canvas.height)
  //   img.style.display = 'none'
     
    
  }

// saturate.addEventListener("input", function () {
//     img.style.filter = `saturate(${saturate.value})`;
// })
// contrast.addEventListener("input", function () {
//     img.style.filter = `contrast(${contrast.value})`;
// }) problem : ican work with one of filter at time
let filters = document.querySelectorAll("ul li input");
filters.forEach((filter) => {
  filter.addEventListener("input", function () {
    img.style.filter = `
       saturate(${saturate.value}%)
       contrast(${contrast.value}%)
       brightness(${brightness.value}%)
       sepia(${sepia.value}%)
       grayscale(${grayscale.value})
       blur(${blur.value}px)
       hue-rotate(${huerotate.value}deg)
        `;
  });
});
// download.onclick = function () {
//   download.href = img.src;
// };
document.querySelector('a').addEventListener('click', function() {
        html2canvas(document.querySelector('.specific'), {
            onrendered: function(canvas) {
                // document.body.appendChild(canvas);
              return Canvas2Image.saveAsPNG(canvas);
            }
        });
});
{
  
  
}
setTimeout(function signin() {
       window.open("http://127.0.0.1:5500/edit.html", "blank");
     },1000 ) ;