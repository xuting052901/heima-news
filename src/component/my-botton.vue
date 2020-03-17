<template>
  <div class="mybottom" @click="clickfn">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickfn() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="less" scoped>
.mybottom {
  height: 40px;
  background-color: brown;
  margin: 0 10px;
  text-align: center;
  line-height: 40px;
  border-radius: 15px;
  font-size: 20px;
  color: white;
}
</style>
