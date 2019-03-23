---
to: "src/views/<%= directory ? h.inflection.camelize(directory) + '/' : '' %><%= fileName || componentName %>.vue"
---
<%
  const underName = h.inflection.underscore(componentName)
  const kekabName = h.inflection.dasherize(underName)
  const importName = h.inflection.camelize(componentName)
%><template>
  <div class="<%= kekabName %>">
    <h1><%= importName %></h1>
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'

export default {
  name: '<%= importName %>',

  computed: {
    ...mapState([

    ])
  },

  data () {
    return {

    }
  },

  methods: {
    ...mapActions([

    ])
  },

  created () {

  }
}
</script>
<%

if (useStyle) { %>
<style lang="scss">
.<%= kekabName %> {
  position: relative
}
</style>
<% } %>
