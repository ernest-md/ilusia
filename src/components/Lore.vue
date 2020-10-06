<template>
  <!-- Este archivo contiene la Pagina del Lore, su objetivo es contener -->
  <!--  la información de los diferentes lore de los Jugadores + Lore principal. -->
  <div id="lore">
    <el-container id="block">
      <el-main>
        <h3>{{ lore[$route.params.id - 1].text }}</h3>
        <p>Historia : {{ lore[$route.params.id - 1].p }}</p>
        <p>Historia : {{ lore[$route.params.id - 1].p2 }}</p>
        <p>Historia : {{ lore[$route.params.id - 1].p3 }}</p>
        <p>Historia : {{ lore[$route.params.id - 1].p4 }}</p>
        <p>Historia : {{ lore[$route.params.id - 1].p5 }}</p>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "lore",
  data() {
    return {
      lore: [
        { id: 1, text: "Lore de Yanelis", 
        p: "", 
        p2: "", 
        p3: "", 
        p4: "", 
        p5: "" },

        { id: 2, text: "Lore de Gael", 
        p: "", 
        p2: "", 
        p3: "", 
        p4: "", 
        p5: ""  },

        { id: 3, text: "Lore de Devika", 
        p: "", 
        p2: "", 
        p3: "", 
        p4: "", 
        p5: ""  },

        { id: 4, text: "Lore de Jaden", 
        p: "", 
        p2: "", 
        p3: "", 
        p4: "", 
        p5: ""  },

        { id: 4, text: "Lore de Illusia", 
        p: "", 
        p2: "", 
        p3: "", 
        p4: "", 
        p5: ""  }
      ],
    };
  },
};
</script>

<style scoped>
#lore {
  background-color: rgba(255, 255, 255, 0.5);
  white-space: pre-line;
}

#block {
  width: 80%;
  margin: auto;
}
</style>