<script lang="ts">
import { h, VNodeTypes } from 'vue'
import { useEnhancer } from '@/enhancers'

export default {
  name: 'Redirect',

  setup (): VNodeTypes {
    const { route, router } = useEnhancer()
    const { params, query } = route
    const { path } = params

    router.replace({ path: `/${path}`, query })

    return () => h('div')
  },
}
</script>
