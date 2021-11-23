<template>
  <ContentLayout>
    <div class="max-w-screen-md prose" v-html="$page.project.content" />
  </ContentLayout>
</template>

<page-query>
query ($id: ID!) {
  project(id: $id) {
    title
    content
  }
}
</page-query>