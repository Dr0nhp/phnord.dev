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
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.crafting-calc-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
