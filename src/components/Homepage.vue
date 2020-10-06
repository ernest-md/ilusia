<template>
  <!-- Este archivo contiene la Pagina principal de la web, su objetivo es informar de -->
  <!--  lo que se puede hacer ahora mismo en la pagina y sus utilidades -->
  <div id="homepage">
    <el-container id="block">
      <el-main>
        <h3>Pagina principal</h3>
        <p>Esta es la pagina principal sobre la campaña de Illusia.<br/>
        En esta web guardaré toda la información pertinente a la campaña que
        vaya sucediendo durante las sesiones.<br/> 
        A parte de eso, podeis usarlo para consultar información respecto a los 
        personajes o como va la historia de momento.
        </p>
      </el-main>
    </el-container>
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
  },
};
</script>

<style scoped>
#homepage {
  background-color: rgba(255, 255, 255, 0.5);
  white-space: pre-line;
}

#block {
  width: 80%;
  margin: auto;
}
</style>
