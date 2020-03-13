<template>
<div class="mybottom">
   <div><slot></slot></div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.mybottom{
   height: 40px;
   background-color:brown;
   margin: 0 10px;
   text-align:center;
   line-height: 40px;
   border-radius: 15px ;
   font-size: 20px;
   color: white;
}
</style>
