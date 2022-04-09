<script lang="ts">
import { useEnhancer } from '@/enhancers'

export default {
  name: `TheRedirect`,

  setup () {
    const { route, router } = useEnhancer()
    const { params, query } = route
    const { path } = params

    router.replace({ path: `/${path}`, query })

    return () => h(`div`)
  },
}
</script>
