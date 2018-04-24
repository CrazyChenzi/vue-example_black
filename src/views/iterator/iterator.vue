<template>
  <div>
    <p>遍历数组</p>
    <ul>
      <li>基础for循环 <Button type="primary" size="small" @click="basis">遍历</Button></li>
      <li>for in 循环（很好用呀！可以用来遍历Object）<Button type="primary" size="small" @click="forIn">遍历</Button></li>
      <li>for of 循环<Button type="primary" size="small" @click="forOf">遍历</Button></li>
      <li>forEach循环<Button type="primary" size="small" @click="forE">遍历</Button></li>
      <li>while循环<Button type="primary" size="small" @click="whileT">遍历</Button></li>
      <li>do while 循环<Button type="primary" size="small" @click="doWhile">遍历</Button></li>
      <li>map<Button type="primary" size="small" @click="map">遍历</Button></li>
    </ul>
  </div>
</template>
<script>
const ArrayList = [
  {name: '张三', age: 18},
  {name: '李四', age: 20}
]
const ObjectParams = {
  name: '孙晓萌',
  age: '19'
}
const StringParams = '女帝'
export default {
  methods: {
    // 基础for循环不能用于遍历对象
    basis () {
      // 遍历Array
      for (let i = 0; i < ArrayList.length; i++) {
        console.log(ArrayList[i])
      }
      // 遍历Object
      // 你会发现它并没有走进这个for循环，因为ObjectParams.length === undefined
      for (let i = 0; i < ObjectParams.length; i++) {
        console.log(ObjectParams[i])
      }
      // 遍历String
      for (let i = 0; i < StringParams.length; i++) {
        console.log(StringParams[i])
      }
    },
    // for in 循环
    forIn () {
      for (let i in ArrayList) {
        console.log(ArrayList[i])   // i输出为index
      }
      for (let i in ObjectParams) {
        console.log(ObjectParams[i])  // i输出为key
      }
      for (let i in StringParams) {
        console.log(StringParams[i])  // i输出为index
      }
    },
    // for of 循环
    forOf () {
      for (let i of ArrayList) {
        console.log(i)   
      }
      // 数组原生具备iterator接口（即默认部署了Symbol.iterator属性），for...of循环本质上就是调用这个接口产生的遍历器
      ObjectParams[Symbol.iterator] = ArrayList[Symbol.iterator].bind(ArrayList)
      for (let i of ObjectParams) {
        console.log(i)  // 输出结果与直接遍历ArrayList一样，Object默认是不具备Symbol.iterator属性的，因此无法对Object用for of进行遍历
      }  
      for (let i of StringParams) {
        console.log(i)  
      }
    },
    // Array特有方法 不可以break
    forE () {
      ArrayList.forEach((item, index) => {
        console.log(item, index)  // item当前下标对象  index下标
      })
    },
    whileT () {
      let i = 0
      while (i < ArrayList.length){
        console.log(ArrayList[i])
        i++
      }

      let j = 0
      // 你会发现它并没有走进这个while循环，因为ObjectParams.length === undefined
      while (j < ObjectParams.length){
        console.log(ObjectParams[j])
        j++
      }

      let k = 0
      while (k < StringParams.length){
        console.log(StringParams[k])
        k++
      }
    },
    doWhile () {
      let i = 0
      do {
        console.log(ArrayList[i])
        i++
      }
      while (i < ArrayList.length)  

      let j = 0
      do {
        console.log(ObjectParams) //会输出 因为do while是先走do语句
        j++
      }
      // 你会发现它并没有走进这个while循环，因为ObjectParams.length === undefined
      while (j < ObjectParams.length)

      let k = 0
      do {
        console.log(StringParams[k])
        k++
      }
      while (k < StringParams.length)  
    },
    // Array特有方法 不可以break
    map () {
      ArrayList.map((item, index) => {
        console.log(item, index)
      })
    }
  }
}
</script>


