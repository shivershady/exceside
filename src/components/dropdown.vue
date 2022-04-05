<template lang="">
  <section class="dropDownMenuWrapper">
    <button class="dropDownMenuButton" ref="menu" @click="openClose">
      {{ menuTitle }}
    </button>

    <div class="iconWrapper">
      <div class="bar1" />
      <div class="bar2" />
      <div class="bar3" />
    </div>

    <section class="dropdownMenu" v-if="isOpen">
      <div class="menuArrow" />
      <slot />
    </section>
  </section>
</template>

<script>
export default {
  props: [ "menuTitle" ],
  data() {
    return {
      isOpen: false
  },
  methods: {

    openClose() {

      isOpen = !isOpen

    }

  }
};
</script>
<style lang=""></style>
