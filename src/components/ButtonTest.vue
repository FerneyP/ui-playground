<template>
    <button class="custom-button">
        <slot />
    </button>
</template>

<script>
export default {
    name: "CustomButton",
};
</script>

<style scoped>
.custom-button {
  min-width: 154px;
  height: 36px;
  padding: 8px 12px;
  font-size: var(--measureFontSizeFontSizeFontsize1);
  color: var(--colorBaseWhite);
  background-color: var(--colorBrand600);
  border: none;
  border-radius: 4px;
  border-color: var(--colorBrand600);
}
</style>