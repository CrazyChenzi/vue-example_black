<template>
  <div>
    <div class="canvas-header">
      <p>选择画笔颜色：</p>
      <ColorPicker v-model="colorPicker" alpha recommend />
      <p>选择画笔粗细：</p>
      <InputNumber :max="12" :min="1" v-model="penSize"></InputNumber>

      <div class="container-menu">
        <ul>
          <li v-for="item in iconList" @click="setCanvasCursor(canvas, item)"><Icon :type="item.icon"></Icon></li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="container-canvas">
        <canvas id="canvas" width="800" height="600"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      canvas: '',
      ctx: '',
      iconList: [
        { icon: 'edit', url: '/static/pencil.png', isImg: true },
        { icon: 'loop', url: '/static/eraser.png', isImg: true },
        { icon: 'eye-disabled', url: 'pointer', isImg: false }
      ],
      iconListIndex: '',
      colorPicker: '',
      penSize: 1
    }
  },
  watch: {},
  mounted () {
    this.createCanvas()
  },
  methods: {
    // 创建canvas
    createCanvas () {
      this.canvas = document.getElementById('canvas')
      this.ctx = canvas.getContext('2d')
    },
    // 设置画笔属性  笔？橡皮擦？彩笔？
    setCanvasCursor (el, row) {
      const _this = this
      switch (row.icon) {
        case 'eye-disabled':
          this.ctx.clearRect(20, 0, this.canvas.width, this.canvas.height)
          break
        default:
          console.log(row.url)
          el.onmouseover = function () {
            row.isImg ? this.style.cursor = 'url('+ row.url +'), auto' : this.style.cursor = row.url
            _this.mouseDown()
            _this.mouseUp()
            _this.mouseOut()
          }
          this.iconListIndex = row.icon
          break
      }
     
    },
    // 鼠标按下时
    mouseDown () {
      const _this = this
      this.canvas.onmousedown = function () {
        _this.mouseMove()
      }
    },
    // 鼠标抬起时
    mouseUp () {
      const _this = this
      this.canvas.onmouseup = function () {
        _this.canvas.onmousemove = null
      }
    },
    // 鼠标移出时
    mouseOut () {
      const _this = this
      this.canvas.onmouseout = function () {
        _this.canvas.onmousemove = null
      }
    },
    // 鼠标移动时
    mouseMove (icon) {
      const _this = this
      this.ctx.beginPath()
      this.ctx.strokeStyle  = this.colorPicker || 'red'
      this.ctx.lineWidth = this.penSize
      // this.ctx.moveTo(45, 45)
      this.canvas.onmousemove = function (event) {
        if (_this.iconListIndex === 'loop') {
          _this.ctx.clearRect(event.offsetX, event.offsetY, 25, 25)
        } else {
          _this.ctx.lineTo(event.offsetX, event.offsetY)
        }
        console.log(event.offsetX, event.offsetY)
        _this.ctx.stroke()
      }
    }
  }
}
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
.container
  display: flex
</style>

