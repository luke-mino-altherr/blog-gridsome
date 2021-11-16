<template>
  <div>
    <hr class="mb-3">
    <div class="flex justify-between">
      <div class="flex items-center w-1/2">
        <p>Built and Designed by Luke Mino-Altherr</p>
      </div>
      <div class="flex flex-col justify-center flex-grow w-1/2 text-right">
        <ul class="">
          <li class="float-right ml-3 mr-3">
            <g-link href="https://github.com/luke-mino-altherr/">
              <font-awesome :icon="['fab', 'github']" />
            </g-link>
          </li>
          <li class="float-right ml-3 mr-0">
            <g-link href="https://www.linkedin.com/in/luke-mino-altherr/">
              <font-awesome :icon="['fab', 'linkedin']" />
            </g-link>
          </li>
          <li class="float-right ml-3 mr-0">
            <g-link href="https://www.soundcloud.com/minalt">
              <font-awesome :icon="['fab', 'soundcloud']" />
            </g-link>
          </li>
          <li class="float-right ml-3 mr-0">
            <g-link href="mailto:lminoaltherr@gmail.com">
              <font-awesome icon="envelope"/>
            </g-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="">
      <hr class="mt-3">
    </div>
    <div class="pb-5 m-5 text-center">
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
