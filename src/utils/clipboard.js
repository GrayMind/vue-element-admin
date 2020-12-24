// import Vue from 'vue'
import Clipboard from 'clipboard'
import { ElMessage } from 'element-plus'

function clipboardSuccess() {
  ElMessage.message({
    message: 'Copy successfully',
    type: 'success',
    duration: 1500
  })
  // Vue.prototype.$message({
  //   message: 'Copy successfully',
  //   type: 'success',
  //   duration: 1500
  // })
}

function clipboardError() {
  ElMessage.message({
    message: 'Copy failed',
    type: 'error'
  })
  // Vue.prototype.$message({
  //   message: 'Copy failed',
  //   type: 'error'
  // })
}

export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
