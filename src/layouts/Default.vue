<template>
  <div class="w-screen h-screen layout">
    <header class="">
      <NavBar />
      <hr class="mb-3 lg:mb-0 lg:invisible">
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
import NavBar from "~/components/NavBar.vue";
import SideNav from "~/components/SideNav.vue";
import Footer from "~/components/Footer.vue"

export default {
  components: {
    NavBar,
    SideNav,
    Footer
  }
};
</script>



<style>
</style>
