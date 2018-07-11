<template>
  <div>
    <div id="editSection"></div>
  </div>
</template>
<script>
const Editor = require('tui-editor')
require('codemirror/lib/codemirror.css') // codemirror
require('tui-editor/dist/tui-editor.css') // editor ui
require('tui-editor/dist/tui-editor-contents.css') // editor content
require('highlight.js/styles/github.css')
export default {
  mounted () {
    const editor = new Editor({
      el: document.querySelector('#editSection'),
      initialEditType: 'markdown',
      viewer: true,
      initialValue: '# content to be rendered',
      previewStyle: 'vertical',
      height: 800
    })
  }
}
</script>

