<template>
  <div>
    <div class='shrink_menu' ref="shrink_menu">
      <div @click="alertMessage(0)">
        <i class="ivu-icon ivu-icon-medkit"></i>
      </div>
      <div @click="alertMessage(1)">
        <i class="ivu-icon ivu-icon-at"></i>
      </div>
      <div @click="alertMessage(2)">
        <i class="ivu-icon ivu-icon-clock"></i>
      </div>
      <div @click="alertMessage(3)">
        <i class="ivu-icon ivu-icon-map"></i>
      </div>
      <div class='menu' ref="parent_menu">
        <div class='share' @click="showToggle" ref="share">
          <div class='circle'></div>
          <div class='bar'></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      share: '',
      menu: '',
      parent_menu: '',
      rot: 0,
      variable: 180
    }
  },
  mounted () {
    this.share = this.$refs.share
    this.shrink_menu = this.$refs.shrink_menu
    this.parent_menu = this.$refs.parent_menu
  },
  methods: {
    hasClass(ele, cls) {
      return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"))
    },
    //为指定的dom元素添加样式
    addClass(ele, cls) {
      if (!this.hasClass(ele, cls)) ele.className += " " + cls
    },
    //删除指定dom元素的样式
    removeClass(ele, cls) {
      if (this.hasClass(ele, cls)) {
        var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)")
        ele.className = ele.className.replace(reg, " ")
      }
    },
    showToggle () {
      this.rot = this.variable - 180
      this.shrink_menu.style.transform =  'rotate(' + this.rot + 'deg)'
      this.shrink_menu.style.webkitTransform = 'rotate(' + this.rot + 'deg)'
      if (this.rot / 180 % 2 == 0) {
        this.addClass(this.parent_menu, 'ss_active')
        this.addClass(this.share, 'close')
      } else {
        this.removeClass(this.parent_menu, 'ss_active')
        this.removeClass(this.share, 'close')
      }
      this.variable = this.rot
    },
    alertMessage (index) {
      alert(index)
    }
  }
}
</script>
<style scoped>
  .shrink_menu {
    bottom: 30px;
    width: 60px;
    height: 60px;
    color: #fff;
    position: fixed;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
    right: 30px;
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .shrink_menu > .menu {
    display: block;
    position: absolute;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    text-align: center;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.23), 0 3px 10px rgba(0, 0, 0, 0.16);
    color: #fff;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
  }
  .shrink_menu > .menu .share {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
  }
  .shrink_menu > .menu .share .circle {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fff;
    top: 50%;
    margin-top: -6px;
    left: 12px;
    opacity: 1;
  }
  .shrink_menu > .menu .share .circle:after, .shrink_menu > .menu .share .circle:before {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
    content: '';
    opacity: 1;
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fff;
  }
  .shrink_menu > .menu .share .circle:after {
    left: 20.78461px;
    top: 12.0px;
  }
  .shrink_menu > .menu .share .circle:before {
    left: 20.78461px;
    top: -12.0px;
  }
  .shrink_menu > .menu .share .bar {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
    width: 24px;
    height: 3px;
    background: #fff;
    position: absolute;
    top: 50%;
    margin-top: -1.5px;
    left: 18px;
    -webkit-transform-origin: 0% 50%;
    -moz-transform-origin: 0% 50%;
    -ms-transform-origin: 0% 50%;
    -o-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    -webkit-transform: rotate(30deg);
    -moz-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    -o-transform: rotate(30deg);
    transform: rotate(30deg);
  }
  .shrink_menu > .menu .share .bar:before {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
    content: '';
    width: 24px;
    height: 3px;
    background: #fff;
    position: absolute;
    left: 0px;
    -webkit-transform-origin: 0% 50%;
    -moz-transform-origin: 0% 50%;
    -ms-transform-origin: 0% 50%;
    -o-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    -webkit-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -ms-transform: rotate(-60deg);
    -o-transform: rotate(-60deg);
    transform: rotate(-60deg);
  }
  .shrink_menu > .menu .share.close .circle {
    opacity: 0;
  }
  .shrink_menu > .menu .share.close .bar {
    top: 50%;
    margin-top: -1.5px;
    left: 50%;
    margin-left: -12px;
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: rotate(405deg);
    -moz-transform: rotate(405deg);
    -ms-transform: rotate(405deg);
    -o-transform: rotate(405deg);
    transform: rotate(405deg);
  }
  .shrink_menu > .menu .share.close .bar:before {
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: rotate(-450deg);
    -moz-transform: rotate(-450deg);
    -ms-transform: rotate(-450deg);
    -o-transform: rotate(-450deg);
    transform: rotate(-450deg);
  }
  .shrink_menu > .menu.ss_active {
    background: #607d8b;
    -webkit-transform: scale(0.7);
    -moz-transform: scale(0.7);
    -ms-transform: scale(0.7);
    -o-transform: scale(0.7);
    transform: scale(0.7);
  }
  .shrink_menu > div {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    width: 60px;
    height: 60px;
    font-size: 30px;
    text-align: center;
    background: #00bcd4;
    border-radius: 50%;
    display: table;
  }
  .shrink_menu > div i {
    display: table-cell;
    vertical-align: middle;
  }
  .shrink_menu > div:hover {
    background: #00bcd4;
    cursor: pointer;
  }
  .shrink_menu div:nth-child(1) {
    top: 0px;
    left: -160px;
  }
  .shrink_menu div:nth-child(2) {
    top: -80.0px;
    left: -138.56406px;
  }
  .shrink_menu div:nth-child(3) {
    top: -138.56406px;
    left: -80.0px;
  }
  .shrink_menu div:nth-child(4) {
    top: -160px;
    left: 0.0px;
  }
</style>

