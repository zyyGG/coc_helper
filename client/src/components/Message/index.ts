import { createVNode, render } from "vue";

import MessageCpt from "./components/Message/index.vue"
class Message {
  static parent = document.querySelector("body")
  constructor() {
    // if (parent) this.parent = parent
  }
  // 成功的message
  static success(msg?: string) {
    const vnode = createVNode(MessageCpt, {
      type: "success",
      message: msg || "成功",
      parent: this.parent
    })
    render(vnode, this.parent!)
  }

  // 失败的message
  static error(msg?: string) {
    const vnode = createVNode(MessageCpt, {
      type: "error",
      message: msg || "失败",
      parent: this.parent
    })
    render(vnode, this.parent!)
  }

  // 警告message
  static warn(msg?: string) {
    const vnode = createVNode(MessageCpt, {
      type: "warn",
      message: msg || "警告",
      parent: this.parent
    })
    render(vnode, this.parent!)
  }
}
export default Message