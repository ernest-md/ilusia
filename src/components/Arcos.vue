<template>
  <!-- Este archivo contiene la Pagina de los Arcos, su objetivo es contener -->
  <!--  la información de los diferentes arcos que suceden en la Campaña. -->
  <div id="arcos">
    <el-container id="block">
      <el-main>
        <h3>{{ arcos[$route.params.id - 1].text }}</h3>
        <p>Historia : {{ arcos[$route.params.id - 1].p }}</p>
        <p>Historia : {{ arcos[$route.params.id - 1].p2 }}</p>
        <p>Historia : {{ arcos[$route.params.id - 1].p3 }}</p>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "arcos",
  data() {
    return {
      arcos: [
        { id: 1, text: "Arco introductorio", 
        p:  "Arco donde se presenta el mundo y personajes principales.", 
        p2: "Los jugadores realian el examen de acceso a la Academia, y posteriormente empiezan a asistir a ella.", 
        p3: "Emmpiezan a explorar y conocer al mundo y a las gentes de Arcus (Illusia)." },

        { id: 2, text: "Arco donde sucede la explosión", 
        p:  "Sabrina, una nueva amiga dde Yanelis, presuntamente deja la Academia. Yanelis sospecha que le pueda pasar algo.", 
        p2: "A su vez Devika empiea a sospechar que en el Club de Magia prohibida se trama algo.", 
        p3: "Todo esto colapsa cuando una noche de viernes sucede una explosión en la ciudad, en el restaurante de la familia de Sabrina."  },
        
        { id: 3, text: "Arco del viaje escolar", 
        p:  "Despues de la explosión, sucede una semana de descanso. Donde los personajes afectados por la explosión reflexionan sobre lo sucedido.", 
        p2: "Posteriormente, les informan que la excurisón se llevará a cabo. Se llevan a cabo las elecciones de delegado.", 
        p3: "La excursión se lleva a cabo, pero acaba siendo una excursión turbulenta."  },

        { id: 4, text: "Arco del torneo entre casas", 
        p: "A los alumnos se les anuncia que en la Academia va a tener lugar un torneo entre casas."
          + "Este torneo es organizado por Jafang en honor al mago que la originó.\n", 
        p2: "Gael y Yanelis descubren que la trampilla conduce al Club de Magia prohibida, y a"
          + " una especia de bar/arena clandestina donde se hacen apuestas, se percatan de que"
          + " sus nombres estan en una de esas tablas.\n", 
        p3: "Jaden lidia con la situación con el director, mientras prepara su cumpleaños.\n"
          + "Devika sigue la información de Yanelis a través de la trampilla y acaba firmando"
          + " un contrato con un señor llamado Frederick."},
      ],
    };
  },
};
</script>

<style scoped>
#arcos {
  background-color: rgba(255, 255, 255, 0.5);
  white-space: pre-line;
}

#block {
  width: 80%;
  margin: auto;
}
</style>