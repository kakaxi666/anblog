<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
   <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <el-container class="mycontainer">
      <el-header class="header" :style="backgroundDiv">
        <span class="header_name">安博客</span>
        <!-- <img class="pic" src="@/assets/header.jpeg" alt="" /> -->
      </el-header>
      <el-container>
        <el-aside class="myside">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  data() {
    return {
      // 背景图片
      backgroundDiv: {
        backgroundImage: 'url(' + require('@/assets/header.jpeg') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.mycontainer{
  height: 100% !important
  ;
}
.myside{
  width: 200px;
  height: 70vh;
}
.home{
  height: 100%;
}
.header{
  background-size:cover;
  position: relative;
  height: 30vh !important;
}
.header_name{
  position:absolute;
  bottom: 0;
  right: 30vw;
  font-size: 40px;
  color: bisque;
}
.header .pic{
  position:absolute;
  width:100%;
  height:100%;
  left:0px;
  top:0px
}
</style>