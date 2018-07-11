<!-- render实现v-model -->
<template>
  <div style="margin: 20px">
    <Table highlight-row :columns="columns3" border :data="data1" size="small" ref="table"></Table>
    <Tooltip content="点击复制到剪贴板" placement="bottom">
      <p @click="copy($refs.copy)" class="copy" ref="copy">这是测试复制到剪贴板的指令</p>
    </Tooltip>
  </div>
</template>
<script>
import axios from 'axios'
import test from '@/mock/test'
export default {
  data () {
    return {
      columns3: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '姓名',
          key: 'name',
          render: (h, params) => {
            let self = this;
            return h('div', [
              h('Input', {
                props: {
                  placeholder: "请输入....",
                  value:params.row.name
                },
                'on': {
                  'on-blur':() => {
                    self.data1[params.index].name = event.target.value
                  }
                },
              }),
              h('p',{
                style: {
                  color: 'red',
                  display: self.data1[params.index].name === "" ? '' : 'none'
                }
              },'请输入你的名字....')
            ]);
          }
        },
        {
          title: '性别',
          key: 'sex',
          render: (h, params) => {
            let self = this;
            const sexList = [
              {name:'男',value:1},
              {name:'女',value:2}
            ]
            return h('Select',{
              props:{
                value:params.row.sex
              },
              on :{
                'on-change' : (val) => {
                  self.data1[params.index].sex = val;
                }
              }
            },sexList.map(item => {
                return h('Option',{
                  props:{
                    value: item.value,
                  }
                },item.name)
              })
            )
          }
        },
        {
          title: 'switch开关slot实现',
          key: 'switchSlot', 
          renderHeader(h, params) {
            return h('Tooltip', {
              props: {
                placement: 'right',
                content: 'switch开关'
              }
            },'switch开关slot实现')
          },
          render: (h, params) => {
            let self = this;
            const switchList = [
              {
                slot: 'open',
                name: '打开'
              },
              {
                slot: 'close',
                name: '关闭'
              }
            ]
            return h('i-switch',{
              props: {
                size: 'large',
                value: params.row.switchSlot
              },
              on: {
                'on-change' : (val) =>{
                  self.data1[params.index].switchSlot = val;
                }
              }
            },switchList.map(item => {
              return h('span',{
                slot:item.slot
              },item.name)
            }))
          }
        }
      ],
      data1: [
        { name: '张三', sex: 1, switchSlot: true },
        { name: '李四', sex: 1, switchSlot: true },
        { name: '赵梅', sex: 2, switchSlot: true },
        { name: '王五', sex: 1, switchSlot: true },
        { name: '司晓萌', sex: 2, switchSlot: false }
      ]
    }
  },
  mounted () {
    // 测试mockjs
    axios.get('www.baidu/api/data').then((res) => {
      console.log(res, test)
    })
  },
  methods: {
    copy (el) {
      var range = document.createRange();
			var end = el.childNodes.length;
			range.setStart(el,0);
			range.setEnd(el,end);
			var selection = window.getSelection();
			selection.removeAllRanges();
			selection.addRange(range);
			document.execCommand("copy",false,null);
			selection.removeRange(range);
    }
  }
}
</script>
<style scoped>
  .copy {
    cursor: pointer;
  }
</style>

