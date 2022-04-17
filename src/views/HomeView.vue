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
        <el-aside class="myside">
          <div>
              <div>
                <i class="el-icon-collection"></i>
                <span style="margin-left:10px;">
                  Navigation
                </span>
              </div>
              <el-divider class="elDivider"></el-divider>
              <el-card class="box-card">
                <!-- <div v-for="o in 4" :key="o" class="text item">
                  {{'列表内容 ' + o }}
                </div> -->
                <div>
                  <router-link to="/welcome">首页</router-link>
                </div>
                <div>
                  <router-link to="/upload/">上传页</router-link>
                </div>
                
                
                
              </el-card>  
          </div>
          <div style="100%">
            <div>
              <i class="el-icon-collection"></i>Navigation
            </div>
          </div>
          
        </el-aside>
        <el-container class="main">
          <el-main>
            <router-view></router-view>
          </el-main>
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
      },
      asideList:["Navigation","公告","分列标签"]
      
    }
  },
  created() {
 
  },
  mounted(){

  },
  methods: {
   
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
  height: 68vh !important;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  align-content:flex-start !important

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
.text {
    font-size: 14px;
  }

.item {
  padding: 4px 60px 0 0;
}

.elDivider{
  margin: 2px 0 24px 0 !important;
}


</style>