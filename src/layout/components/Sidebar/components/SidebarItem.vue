<script lang="ts" setup>
import { resolve } from 'pathe'
import { RE_HTTP_OR_HTTPS } from '@/constants/regexp'
import SidebarItemLink from './SidebarItemLink.vue'
import SidebarItemTitle from './SidebarItemTitle.vue'
import type { NavMenuItem } from '@/types'

const props = withDefaults(
  defineProps<{
    item: NavMenuItem
    isNest?: boolean
    basePath?: string
  }>(),
  {
    basePath: '',
  },
)
const attrs = useAttrs()

const onlyOneChild = shallowRef<NavMenuItem>()

function hasOneShowingChild(parent: NavMenuItem, children: NavMenuItem[] = []) {
  const showingChildren = children.filter(item => {
    onlyOneChild.value = item
    return true
  })

  if (showingChildren[0]?.meta?.showParent) {
    return false
  }

  if (showingChildren.length === 1) {
    return true
  }

  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
    return true
  }

  return false
}
function resolvePath(routePath?: string) {
  if (!routePath) return ''
  if (
    RE_HTTP_OR_HTTPS.test(routePath)
    || RE_HTTP_OR_HTTPS.test(props.basePath)
  ) {
    return routePath || props.basePath
  }
  return resolve(props.basePath, routePath)
}
</script>

<template>
  <SidebarItemLink
    v-if="
      hasOneShowingChild(item, item.children)
      && (!onlyOneChild?.children || onlyOneChild.noShowingChildren)
    "
    :to="item"
  >
    <ElMenuItem
      :index="resolvePath(onlyOneChild?.path)"
      :class="{
        'submenu-title-no-dropdown': !isNest,
      }"
      v-bind="attrs"
    >
      <template #title>
        <SidebarItemTitle
          :title="onlyOneChild?.meta?.title"
          :icon="onlyOneChild?.meta?.icon || item.meta?.icon"
        />
      </template>
    </ElMenuItem>
  </SidebarItemLink>

  <ElSubMenu
    v-else
    ref="subMenuRef"
    :index="resolvePath(item.path)"
    teleported
  >
    <template #title>
      <SidebarItemTitle
        :title="item?.meta?.title"
        :icon="item.meta?.icon"
      />
    </template>

    <SidebarItem
      v-for="child in item.children"
      :key="child.path"
      :item="child"
      :index="resolvePath(child.path)"
      class="nested-sidebar-item"
      is-nest
    />
  </ElSubMenu>
</template>
