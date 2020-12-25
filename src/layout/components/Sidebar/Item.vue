<template>
  <span>
    <i v-if="icon && icon.includes('el-icon')" :class="[icon, 'sub-el-icon']" />
    <svg-icon v-else :icon-class="icon" />
    <!-- <span v-if="title" slot="title">{{ title }}</span> -->
    <span v-if="title">{{ title }}</span>
  </span>
</template>

<script>
// TODO: 使用 render function 重构
export default {
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  mounted() {
    // console.log('MenuItem', this.icon, this.title)
  }
}

// export default {
//   name: 'MenuItem',
//   functional: true,
//   props: {
//     icon: {
//       type: String,
//       default: ''
//     },
//     title: {
//       type: String,
//       default: ''
//     }
//   },
//   render(h, context) {
//     const { icon, title } = context.props
//     const vnodes = []

//     if (icon) {
//       if (icon.includes('el-icon')) {
//         vnodes.push(<i class={[icon, 'sub-el-icon']} />)
//       } else {
//         vnodes.push(<svg-icon icon-class={icon}/>)
//       }
//     }

//     if (title) {
//       vnodes.push(<span slot='title'>{(title)}</span>)
//     }
//     return vnodes
//   }
// }
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
