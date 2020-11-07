import Vue from 'vue'
import * as GlobalComponents from './global'

Object.keys(GlobalComponents).forEach(componentName => {
  Vue.component(componentName, GlobalComponents[componentName])
})
