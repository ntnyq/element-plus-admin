import Vue from 'vue'
import * as GlobalComponents from './global'

Object.keys(GlobalComponents).map(componentName => {
  Vue.component(componentName, GlobalComponents[componentName])
})
