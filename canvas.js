import React from "react"

import style from "./canvas.css"



export default class Canvas extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.textRef = React.createRef();
    this.x = React.createRef();
    this.y = React.createRef();
    this.imgx = React.createRef();
    this.imgy = React.createRef();
    this.color = React.createRef();
    this.size = React.createRef();
    this.img = React.createRef();
    this.state = {showFile: false, showText: false};
    this.imageShow = this.imageShow.bind(this);
    this.textShow = this.textShow.bind(this);
    this.addText = this.addText.bind(this);
    this.clean = this.clean.bind(this);
    this.addImage = this.addImage.bind(this);
  }

  imageShow() {
    this.setState(prevState => ({
      showFile: !prevState.showFile,
      showText: false
    }));
  }

  textShow() {
    this.setState(prevState => ({
      showFile: false,
      showText: !prevState.showText
    }));
  }

  addText(){
    var context = this.canvas.getContext("2d");
    var text = this.textRef.current;
    var x = this.x.current;
    var y = this.y.current;
    var color = this.color.current;
    var size = this.size.current;
    
    context.font = size.value==""?"14":size.value +"px Verdana";
    context.fillStyle=color.value;
    context.fillText(text.value, x.value==""?"0":x.value,y.value==""?"20":y.value);
  }

  clean(){
    var context = this.canvas.getContext("2d");
    var height=this.canvas.height;
    var width=this.canvas.width;
    var imageData=context.createImageData(width, height);
    context.putImageData(imageData, 0, 0);
  }

  addImage(){
    var path = this.img.current
    var x = this.imgx.current
    var y = this.imgy.current
    var context = this.canvas.getContext("2d");
    var img = new Image();
    img.src = URL.createObjectURL(path.files[0]); 
    console.log(URL.createObjectURL(path.files[0]));
    img.onload = function() {
      context.drawImage(img,  x.value==""?"0":x.value , y.value==""?"0":y.value);
    }
  }


  componentDidMount() {
    this.canvas = this.myRef.current;
    
    var context = this.canvas.getContext("2d");

    //exportCanvasAsPNG("canvas", "test.png");
  }

  render(){
    const text = (
      <div id="text">
        <label>Texto: 
          <input type="text" ref={this.textRef} size="40"></input>
        </label>
        <br></br>
        <label>Color: 
          <input type="color" id="color" name="color" size="1" ref={this.color}></input>
        </label>
        <label>Tamaño: 
          <input type="text" id="size" name="size" size="2" ref={this.size} ></input>
        </label>
        <label>X: 
          <input type="text" id="textx" name="textx" size="2" ref={this.x} ></input>
        </label>
        <label>Y:
          <input type="text" id="texty" name="texty" size="2" ref={this.y} ></input>
        </label>
        <div>
          <button onClick={this.addText}>Agregar Texto</button>
        </div>
      </div>
    );

    const file = (
      <div id="file">
          <label>Elegir imagen:
            <input type="file" id="myfile" name="myfile" ref={this.img}></input>
          </label>
          <br></br>
          <label>X: 
            <input type="text" id="imgx" name="imgx" size="2" ref={this.imgx} ></input>
          </label>
          <label>Y:
            <input type="text" id="imgy" name="imgy" size="2" ref={this.imgy} ></input>
          </label>
          <div>
            <button onClick={this.addImage}>Agregar Imagen</button>
          </div>
      </div>
    );

    return(
      <div id="center">
        <div id="component">
          <button class="button" onClick={this.imageShow}>Agregar Imagen</button>
          <button class="button" onClick={this.textShow}>Agregar Texto</button>
          <br></br>
          <div id="frame">
            {this.state.showFile ? file : ''}  
            {this.state.showText ? text : ''}
            <div>
              <button onClick={this.clean}>Limpiar</button>
            </div>
            <canvas id="canvas" width="500" height="500" ref={this.myRef}></canvas>
          </div>
        </div>
      </div>
    )
  }
}



function exportCanvasAsPNG(id, fileName) {

    var canvasElement = document.getElementById(id);

    var MIME_TYPE = "image/png";

    var imgURL = canvasElement.toDataURL(MIME_TYPE);

    var dlLink = document.createElement('a');
    dlLink.download = fileName;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
}
