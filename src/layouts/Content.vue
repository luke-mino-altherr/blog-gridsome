<template>
  <div class="w-screen h-screen layout">
    <header class="">
      <NavBarContent />
      <SideNav />
      <hr class="mb-7">
    </header>
    <main class="flex items-center justify-center">
      <slot />
    </main>
    <footer class="pt-7">
      <Footer />
    </footer>
  </div>
</template>

<script>
import NavBarContent from "~/components/NavBarContent.vue";
import SideNav from "~/components/SideNav.vue";
import Footer from "~/components/Footer.vue"

export default {
  components: {
    NavBarContent,
    SideNav,
    Footer
  }
};
</script>



<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
