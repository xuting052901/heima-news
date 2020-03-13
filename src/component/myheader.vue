<template>
  <div class="my-header">
    <div class="right"  @click="$router.go(-1)">
  <span class="iconfont iconjiantou "></span>
    </div>
 <div class="main">
   <div><slot></slot></div>
 </div>
 <div class="right">

 </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
.my-header{
  height: 40px;
  border-bottom: 1px solid black;
  line-height: 40px;
  padding: 0 10px;
  display: flex;
  text-align: center;
  font-weight: 900;
}
.left,
.right{
width: 30px;
}
.main{
  flex: 1;
  
}
</style>

