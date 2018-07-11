<template>
  <div>
    <div class="mavon-editor">
      <mavon-editor style="height: 100%" @imgAdd="$imgAdd" @save="save"></mavon-editor>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'
export default {
  components: {
    mavonEditor
  },
  computed: {
    ...mapGetters([
      'qinuToken'
    ])
  },
  methods: {
    save (value, render) {
      this.$store.dispatch('getQinuToken')
    },
    $imgAdd (pos, $file) {
      if (this.qinuToken) {
        this.uploadQinu($file)
      } else {
        this.$store.dispatch('getQinuToken').then((res) => {
          this.uploadQinu($file)
        })
      }
    },
    uploadQinu ($file) {
      let formdata = new FormData();
      formdata.append('token', this.qinuToken.uptoken)
      formdata.append('file', $file);
      axios({
        url: 'https://up.qbox.me',
        method: 'post',
        data: formdata,
        headers: { 
          'Content-Type': 'multipart/form-data',
          'fileObjName': 'Filedata'
        }
      }).then((url) => { 
          // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
          /**
         * $vm 指为mavonEditor实例，可以通过如下两种方式获取
         * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
         * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
         */
        console.log('http://owiq5ccyd.bkt.clouddn.com/' + url.data.key)
          // $vm.$img2Url(pos, url);
      })
    }
  }
}
</script>
<style lang="sass" scoped>
.mavon-editor
  height: 600px
</style>

