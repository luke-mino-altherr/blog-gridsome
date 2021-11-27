<template>
  <nav
    class="w-full my-3 text-center align-middle place-items-content-center"
  >
    <g-link class="logo-content" to="/">{{ $static.metadata.siteName }}</g-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<style>
</style>
