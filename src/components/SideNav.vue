<template>
  <div class="fixed top-0 left-0 flex items-center w-12 h-screen border-r-2 vertical-orientation">
    <!--     <div class="w-full h-12 bg-green-700 border-green-700" />-->
    <g-link class="p-5" to="/about/">About</g-link>
    <g-link class="p-5" to="/blog/">Blog</g-link>
    <g-link class="p-5" to="/projects/">Projects</g-link>
  </div>
</template>

<script>
export default {
  name: "SideNav",
  data() {
    return {};
  }
};
</script>
