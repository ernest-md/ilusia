<template>
  <!-- Este archivo contiene la Pagina del siguiente rol, su objetivo es contener -->
  <!--  la información que hay a dia por hoy sobre su dessarrollo.-->
  <div id="future">
    <el-container id="block">
      <el-main>
        <h3>Info de la siguiente campaña</h3>
        <p>--</p>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "future",
};
</script>

<style scoped>
#future {
  background-color: rgba(255, 255, 255, 0.5);
  white-space: pre-line;
}

#block {
  width: 80%;
  margin: auto;
}
</style>