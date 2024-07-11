<template>
  <div class="input">
    <input
        v-model="value"
        ref="input"
        class="h-[50px]"
    />
    <label :class="{'focused': focused || !!value}"
           class="">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import {useFocus} from "@vueuse/core";

const props = defineProps<{
  label?: string,
}>()

const input = ref()
const {focused} = useFocus(input)

const value = defineModel({default: ''})
</script>

<style scoped lang="scss">
.input {
  position: relative;
  padding: 6px 0;

  input, label {
    font-size: 20px;
  }

  label {
    position: absolute;
    display: block;
    top: 19px;
    user-select: none;
    pointer-events: none;
    left: 0;
    color: var(--primary-color);
    transition: .4s;
    line-height: 1;
    opacity: 0.6;
  }

  input {
    background: transparent;
    outline: none;
    padding-top: 4px;
    width: 100%;
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
  }

  .focused {
    top: 0px;
    font-size: 15px;
  }


}
</style>