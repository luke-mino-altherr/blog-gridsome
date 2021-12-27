<template>
  <nav
    class="flex justify-between w-full h-12 align-middle nav flex-nowrap place-items-center my-7"
  >
    <div class="flex-1 my-auto text-center">
      <g-link class="logo" to="/">{{ $static.metadata.siteName }}</g-link>
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
