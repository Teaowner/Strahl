

      // Attach the markerhandler component to the scene
      document.querySelector('a-scene').setAttribute('markerhandler', '');

var scale = 0.01;
var rotate = 0;
document.querySelector("#btnBigger").addEventListener("click",bigger);
document.querySelector("#btnSmaller").addEventListener("click",smaller);
document.querySelector("#btnRotateX").addEventListener("click",turnX);
document.querySelector("#btnRotateY").addEventListener("click",turnY);
document.querySelector("#btnRotateZ").addEventListener("click",turnZ);

function bigger(){
  scale=scale + 0.005;
document.getElementById("entity").object3D.scale.set(scale, scale, scale);
}

function smaller(){
  scale=scale - 0.005;
  if(scale <= 0){
    scale=0.005;
  }
document.getElementById("entity").object3D.scale.set(scale, scale, scale);
}

function turnX(){
  rotate = rotate + (Math.PI * 90)/180;
  document.getElementById("entity").object3D.rotation.set(rotate, 0 , 0);
}

function turnY(){
  rotate = rotate + (Math.PI * 90)/180;
  document.getElementById("entity").object3D.rotation.set(0, rotate,0 );
}

function turnZ(){
  rotate = rotate + (Math.PI * 90)/180;
  document.getElementById("entity").object3D.rotation.set(0, 0,rotate);
}
/*https://aframe.io/docs/1.6.0/components/rotation.html*/



// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});



