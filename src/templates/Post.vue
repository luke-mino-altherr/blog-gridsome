<template>
  <div>
    <div v-html="$page.post.content" />
  </div>
</template>
<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    content
  }
}
</page-query>