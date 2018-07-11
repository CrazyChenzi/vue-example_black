<template>
  <div>
    <p>这是测试页面</p>
    <div class="header">
      {{$t('message')}}:
      <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>

      <Dropdown trigger="click" @on-click="switchLang">
        <a href="javascript:void(0)">
            切换语言
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem name="zh">中文</DropdownItem>
            <DropdownItem name="en">英文</DropdownItem>
            <DropdownItem name="ja">日文</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <Table :columns="columns1" :data="data1" size="small">
      <div slot="footer" class="footer-page">
        <Page :total="100" show-elevator show-sizer></Page>
      </div>
    </Table>

    <Tooltip content="点击复制到剪贴板" placement="bottom">
      <p @click="copy($refs.copy)" class="copy" ref="copy">这是测试复制到剪贴板的指令</p>
    </Tooltip>

    <Button @click="testAxios">点击请求远端json文件</Button>
    {{ axiosList }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ],
      axiosList: []
    };
  },
  methods: {
    switchLang (language) {
      this.$i18n.locale = language
      this.$store.dispatch("setLanguage", language)
      
    },
    testAxios () {
      this.$axios.post("package.json").then(res => {
        this.axiosList = res.data
      })
    },
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
};
</script>
<style lang="sass" scoped>
.footer-page 
  float: right
  margin-right: 10px
.header 
  padding: 20px 0
.copy 
  cursor: pointer
  
</style>

