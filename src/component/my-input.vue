<template>
  <div class="input">
    <div>
      <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="inputfn"
        :class="{sucuess:status==='sucuess',error:status==='error'}"
      >
    </div>
    <div class="tip" v-show="status==='error'">{{message}}</div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      placeholder: String,
      default: "请输入用户名"
    },
    value: String,
    rule: RegExp,
    message: String
  },
  data() {
    return {
      status: ""
    };
  },
  methods: {
    inputfn(e) {
      let value = e.target.value;
      this.$emit("input", value);
      this.validate(value);
    },
    validate(value) {
      if (this.rule) {
        if (this.rule.test(value)) {
          this.status = "sucuess";
          return true;
        } else {
          this.status = "error";
          return false;
        }
      }
    }
  }
};
</script>
 <style lang="less" scoped>
.input {
  height: 50px;
  line-height: 50px;
  margin: 10px 20px;
  input {
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    &.sucuess {
      border-bottom-color: green;
    }
    &.error {
      border-bottom-color: red;
    }
  }
  .tip {
    color: red;
    height: 5px;
    line-height: 5px;
    font-size: 12px;
  }
}
</style>
 