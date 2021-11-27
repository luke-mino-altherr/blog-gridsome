<template>
  <Layout>
    <div class="grid gap-6 lg:grid-cols-2">
      <div v-for="{ node } in $page.projects.edges" :key="node.id">
        <component :is="node.demoSite?'a':'g-link'" :href="node.demoSite" :to="node.path">
          <div class="px-6 py-4 border rounded border-gray-light">
            <div class="mb-2 text-lg">{{ node.title }}</div>
            <p class="text-base text-gray-700">{{ node.description }}</p>
            <div
              class="inline-block px-3 py-1 mt-4 mr-2 text-sm font-semibold bg-gray-200 rounded-3xl"
              v-for="tag in node.tags"
              :key="tag"
            >
              {{ tag }}
            </div>
          </div>
        </component>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us"
  }
};
</script>

<page-query>
query {
  projects: allProject(sortBy: "dateBuilt", order: DESC) {
    edges {
      node {
        id
        path
        demoSite
        slug
        title
        description
        tags
      }
    }
  }
}
</page-query>