<template>
  <div class="items-center mb-3 text-center lg:mb-0">
    <!--     <div class="w-full h-12 bg-green-700 border-green-700" />-->
    <div class="grid grid-flow-col grid-cols-3 grid-rows-1 lg:flex lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:border-r-2 vertical-orientation lg:w-12 lg:p-3">
      <div class=""><g-link class="lg:p-3" to="/about/">About</g-link></div>
      <div class=""><g-link class="lg:p-3" to="/blog/">Blog</g-link></div>
      <div class=""><g-link class="lg:p-3" to="/projects/">Projects</g-link></div>
    </div>
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
