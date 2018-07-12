<template>
  <div>
    <div class="canvas-header">
      <p>选择画笔颜色：</p>
      <ColorPicker v-model="colorPicker" alpha recommend />
      <p>选择画笔粗细：</p>
      <InputNumber :max="12" :min="1" v-model="penSize"></InputNumber>

      <div class="container-menu">
        <ul>
          <li v-for="item in iconList" @click="setCanvasCursor(publicCanvas, item)"><Icon :type="item.icon"></Icon></li>
        </ul>
      </div>
    </div>
    <div class="container-canvas">
      <canvas id="myCanvas" width="800" height="600"></canvas>
      <canvas id="publicCanvas" width="800" height="600"></canvas>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myCanvas: "",
      publicCanvas: '',
      ctx: "",
      publicCtx: '',
      iconList: [
        { icon: "edit", url: "/static/pencil.png", isImg: true },
        { icon: "loop", url: "/static/eraser.png", isImg: true },
        { icon: "eye-disabled", url: "pointer", isImg: false }
      ],
      iconListIndex: "",
      colorPicker: "",
      penSize: 6,
      beginDraw: false
    };
  },
  watch: {},
  mounted() {
    this.createCanvas()
  },
  methods: {
    // 创建canvas
    createCanvas() {
      this.myCanvas = document.getElementById("myCanvas")
      this.ctx = myCanvas.getContext("2d")
      this.publicCanvas = document.getElementById("publicCanvas")
      this.publicCtx = publicCanvas.getContext("2d")
    },
    // 设置画笔属性  笔？橡皮擦？彩笔？
    setCanvasCursor(el, row) {
      console.log(el)
      const _this = this;
      switch (row.icon) {
        case "eye-disabled":
          this.ctx.clearRect(0, 0, this.myCanvas.width, this.myCanvas.height);
          break;
        default:
          el.onmouseover = function() {
            row.isImg
              ? (this.style.cursor = "url(" + row.url + "), auto")
              : (this.style.cursor = row.url);
            _this.mouseDown()
            _this.mouseUp()
            _this.mouseOut()
          };
          this.iconListIndex = row.icon;
          break;
      }
    },
    // 鼠标按下时
    mouseDown() {
      const _this = this;
      this.publicCanvas.onmousedown = function(ev) {
        _this.publicCtx.lineCap = "round"
        _this.publicCtx.lineJoin = "round"
        _this.publicCtx.beginPath()
        _this.publicCtx.moveTo(
          ev.clientX - _this.publicCanvas.offsetLeft,
          ev.clientY - _this.publicCanvas.offsetTop
        )
        _this.mouseMove()
      }
    },
    // 鼠标抬起时
    mouseUp() {
      const _this = this;
      this.publicCanvas.onmouseup = function() {
        _this.ctx.drawImage(_this.publicCanvas, 0, 0)
        _this.publicCtx.clearRect(0, 0, _this.myCanvas.width, _this.myCanvas.height)
        _this.publicCanvas.onmousemove = null
      }
    },
    // 鼠标移出时
    mouseOut() {
      const _this = this;
      this.publicCanvas.onmouseout = function() {
        _this.ctx.drawImage(_this.publicCanvas, 0, 0)
        _this.publicCtx.clearRect(0, 0, _this.myCanvas.width, _this.myCanvas.height)
        _this.publicCanvas.onmousemove = null
      }
    },
    // 鼠标移动时
    mouseMove(icon) {
      const _this = this;
      // this.ctx.beginPath();
      this.publicCtx.strokeStyle = this.colorPicker || "red"
      this.publicCtx.lineWidth = this.penSize
      this.publicCanvas.onmousemove = function(ev) {
        if (_this.iconListIndex === "loop") {
          _this.ctx.clearRect(event.offsetX, event.offsetY, 25, 25)
        } else {
          _this.publicCtx.lineTo(
            ev.clientX - _this.publicCanvas.offsetLeft,
            ev.clientY - _this.publicCanvas.offsetTop
          )
          _this.publicCtx.clearRect(0, 0, _this.publicCanvas.width, _this.publicCanvas.height)
        }
        _this.publicCtx.stroke()
      }
    }
  }
};
</script>
<style lang="sass" scoped>
$margin: 10px
.canvas-header
  display: flex
  margin: $margin
  align-items: center
  p 
    margin: 0 $margin
    font-size: 16px
  .container-menu
    ul
      list-style: none
      margin-left: $margin
      li
        padding: 10px 20px
        background: #03a9f46e
        border-right: 1px solid #9e9e9e7a
        cursor: pointer
        float: left
      li:hover
        background: #8bc34a
canvas 
  border: 2px solid red
  position: absolute
.container-canvas
  .myCanvas
    z-index: 20
  .publicCanvas
    z-index: 10
</style>

