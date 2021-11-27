<template>
  <div class="w-screen layout">
    <header class="sticky top-0 bg-white">
      <div class="h-1"></div>
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
</style>
