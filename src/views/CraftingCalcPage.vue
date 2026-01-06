<template>
  <div class="crafting-calc-wrapper">
    <iframe
      src="/ffxivCraftingMatCalc/index.html"
      title="FFXIV Crafting Calculator"
      class="crafting-calc-iframe"
    ></iframe>
  </div>
</template>

<style scoped>
.crafting-calc-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.crafting-calc-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
</style>
