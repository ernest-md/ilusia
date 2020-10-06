<template>
  <!-- Este archivo contiene la barra de Navegación y los elementos principales de la página. -->
  <div id="app">
    <div>
      <img id="banner" src="../public/imgs/pag_principal/landscape-banner.jpg" />
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="$router.push('/')">
        <i class="el-icon-s-home"></i> Pagina principal
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-management"></i>Arcos
        </template>
        <el-menu-item index="2-1" @click="arcoPush(1)">1. Bienvenidos a Arcus</el-menu-item>
        <el-menu-item index="2-2" @click="arcoPush(2)">2. Cenizas de combustión</el-menu-item>
        <el-menu-item index="2-3" @click="arcoPush(3)">3. Viaje inusual</el-menu-item>
        <el-menu-item index="2-4" @click="arcoPush(4)">4. Torneo primigenio</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-user-solid"></i>Personajes
        </template>
        <el-menu-item index="3-1" @click="PJPush(1)">Alumnos de Jafang</el-menu-item>
        <el-menu-item index="3-2" @click="PJPush(2)">Alumnos de Owlong</el-menu-item>
        <el-menu-item index="3-3" @click="PJPush(3)">Alumnos de Torhorn</el-menu-item>
        <el-menu-item index="3-4" @click="PJPush(4)">Alumnos de Hogor</el-menu-item>
        <el-menu-item index="3-5" @click="PJPush(5)">Profesorado de Arcus</el-menu-item>
        <el-menu-item index="3-6" @click="PJPush(6)">Arena</el-menu-item>
        <el-menu-item index="3-7" @click="PJPush(7)">Otros</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-info"></i>Lore
        </template>
        <el-menu-item index="4-1" @click="LorePush(1)">Lore de Yanelis</el-menu-item>
        <el-menu-item index="4-2" @click="LorePush(2)">Lore de Gael</el-menu-item>
        <el-menu-item index="4-3" @click="LorePush(3)">Lore de Devika</el-menu-item>
        <el-menu-item index="4-4" @click="LorePush(4)">Lore de Jaden</el-menu-item>
        <el-menu-item index="4-5" @click="LorePush(5)">Lore de Illusia</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" @click="$router.push('/future')">
        <i class="el-icon-warning"></i>Proyecto: Samurai
      </el-menu-item>
    </el-menu>
    <div class="line"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    arcoPush(id) {
      this.$router.push({
        name: "Arcos",
        params: {
          id: id,
        },
      });
    },

    PJPush(id) {
      this.$router.push({
        name: "Personajes",
        params: {
          id: id,
        },
      });
    },

    LorePush(id) {
      this.$router.push({
        name: "Lore",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>

<style scoped>
#banner {
  max-width: 100%;
  max-height: 100%;
}
</style>