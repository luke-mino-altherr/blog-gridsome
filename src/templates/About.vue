<template>
  <Layout>
    <div class="mx-auto mb-5">
      <g-image src='~/assets/img/luke_recording.jpeg' position="center"/>
    </div>
    <div class="clear-none max-w-screen-md prose" v-html="$page.about.edges[0].node.content" />
  </Layout>
</template>

<page-query>
query {
  about: allAbout {
    edges {
      node {
        id
        slug
        content
      }
    }
  }
}
</page-query>
