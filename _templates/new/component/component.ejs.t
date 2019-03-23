---
to: "src/components/<%= Name %>/index.vue"
---
<%
  const underName = h.inflection.underscore(name)
  const kekabName = h.inflection.dasherize(underName)
if (blocks.includes('template')) {
%><template>
  <div class="<%= kekabName %>">
    <span><%= Name %></span>
  </div>
</template>
<%
}

if (blocks.includes('script')) {
%><script>
export default {
  name: '<%= Name %>'<% if (!blocks.includes('template')) {
  %>render(h) {
    return <div/>
  }<% } %>
}
</script>
<%
}

if (blocks.includes('style')) {
%>
<style lang="scss">
.<%= kekabName %> {
  position: relative;
}
</style><%
}
%>
