<template>
  <div v-if="!item.hidden && item.children"
    class="menu-wrapper">

    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&! item.alwaysShow">
      <el-menu-item :index="resolvePath(onlyOneChild.path)"
        :class="{'submenu-title-noDropdown':!isNest}">
        <nav-item v-if="onlyOneChild.meta"
          :icon="onlyOneChild.meta.icon||item.meta.icon"
          :title="$t(`router.${onlyOneChild.meta.title}`)" />
      </el-menu-item>
    </template>

    <el-submenu v-else
      ref="submenu"
      :index="resolvePath(item.path)">
      <template slot="title">
        <nav-item v-if="item.meta"
          :icon="item.meta.icon"
          :title="$t(`router.${item.meta.title}`)" />
      </template>

      <template v-for="child in visibleChildrenRoutes">
        <sidebar-item v-if="child.children && child.children.length > 0"
          :is-nest="true"
          :item="child"
          :key="child.path"
          :base-path="resolvePath(child.path)"
          class="nest-menu" />
        <el-menu-item :index="resolvePath(child.path)"
          v-else
          :key="child.name">
          <nav-item v-if="child.meta"
            :icon="child.meta.icon"
            :title="$t(`router.${child.meta.title}`)" />
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
import NavItem from './NavItem'

export default {
  name: 'SidebarItem',

  components: { NavItem },

  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },

  computed: {
    visibleChildrenRoutes () {
      const { item } = this
      return item.children ? item.children.filter(item => !item.hidden) : []
    }
  },

  data () {
    return {
      onlyOneChild: null
    }
  },

  methods: {
    hasOneShowingChild (children, parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },

    resolvePath (routePath) {
      const { basePath } = this

      return `${basePath}/${routePath}`
    }
  }
}
</script>
