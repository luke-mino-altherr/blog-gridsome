<template>
  <nav
    class="flex justify-between w-full my-3 align-middle nav flex-nowrap place-items-center"
  >
    <div class="flex-1 text-center">
      <g-link class="logo-content" to="/">{{ $static.metadata.siteName }}</g-link>
    </div>
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
