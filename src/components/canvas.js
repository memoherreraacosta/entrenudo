import React from "react"
import Button from 'react-bootstrap/Button'
import style from "./canvas.module.css";

export default class Canvas extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.textRef = React.createRef();
    this.x = React.createRef();
    this.y = React.createRef();
    this.font = React.createRef();
    this.imgx = React.createRef();
    this.imgy = React.createRef();
    this.color = React.createRef();
    this.size = React.createRef();
    this.img = React.createRef();
    this.imgSize = React.createRef();
    this.state = {showFile: false, showText: false};
    this.imageShow = this.imageShow.bind(this);
    this.textShow = this.textShow.bind(this);
    this.addText = this.addText.bind(this);
    this.clean = this.clean.bind(this);
    this.addImage = this.addImage.bind(this);
    this.next = this.next.bind(this);
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
    var font = this.font.current;

    context.font = size.value===""?"14":size.value +"px " + font.value;
    context.fillStyle=color.value;
    context.fillText(text.value, x.value===""?"0":x.value,y.value===""?"20":y.value);
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
    var size = this.imgSize.current
    var context = this.canvas.getContext("2d");
    var img = new Image();
    var canvas = this.canvas;
    if(path.files[0] != null){
      img.src = URL.createObjectURL(path.files[0]);
      img.onload = function() {
        var widthRatio = img.width/img.height;
        var heightRatio = img.height/img.width;
        var drawSize = size.value===""?"1":size.value/100;
        var width = img.width<img.height? canvas.width*widthRatio*drawSize:  canvas.width*drawSize;
        var height = img.height<img.width? canvas.height*heightRatio*drawSize:  canvas.height*drawSize;
        context.drawImage(img,  x.value===""?"0":x.value , y.value===""?"0":y.value, width, height);
      }
    }
  }

  next(){
    var dataURL = this.canvas.toDataURL("image/png");
    var imgData = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    localStorage.setItem("imgData", imgData);

    const body = {
      colorPalette: localStorage.getItem("paleta"),
      size: localStorage.getItem("size"),
      style: localStorage.getItem("style"),
      messageImage: imgData,
      sender: "kjbkj",
      senderPhone: "jbkjb"
    }

    fetch('http://localhost:8080/api/order', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(body) // body data type must match "Content-Type" header
    }).then(response => response.json()).then( data => console.log(data));

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
        <br></br>
        <label>Font:
          <select id="font" name="font" ref={this.font}>
            <option value= "Verdana"> Verdana </option>
            <option value= "Serif"> Serif </option>
            <option value= "Arial"> Arial </option>
            <option value= "Sans-Serif"> Sans-Serif </option>
            <option value= "Tahoma"> Tahoma </option>
            <option value= "Comic Sans MS"> Comic Sans MS </option>
            <option value= "Impact"> Impact </option>
            <option value= "Courier New"> Courier New </option>
            <option value= "Lucida Console"> Lucida Console </option>
          </select>
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
          <label>Size (%):
            <input type="text" id="imgSize" name="imgSize" size="2" ref={this.imgSize} ></input>
          </label>
          <div>
            <button onClick={this.addImage}>Agregar Imagen</button>
          </div>
      </div>
    );

    return(
      <div id="center" className={style.center}>
        <div id="component">
          <button class="button" onClick={this.imageShow}>Agregar Imagen</button>
          <button class="button" onClick={this.textShow}>Agregar Texto</button>
          <br></br>
          <div id="frame">
            {this.state.showFile ? file : ''}
            {this.state.showText ? text : ''}
            <div>
              <button class="button" onClick={this.clean}>Limpiar</button>
            </div>
            <canvas className={style.canvas} id="canvas" width="500" height="500" ref={this.myRef}></canvas>
            <div>
              <Button variant="success" size="lg" onClick={this.next}>Ordenar pedido</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
