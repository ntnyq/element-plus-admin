<script lang="ts">
export default {
  name: 'TheRedirect',

  setup () {
    const route = useRoute()
    const router = useRouter()
    const { params, query } = route
    const { path } = params
    router.replace({ path: `/${path}`, query })
    return () => h('div')
  },
}
</script>
