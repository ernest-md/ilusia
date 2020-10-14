<template>
  <!-- Este archivo contiene la Pagina de los Personajes, su objetivo es contener -->
  <!--  la información de los diferentes personajes que aparecen durante la campaña. -->
  <div id="personajes">
    <el-container id="block">
      <el-main>
        <h3>{{ personajes[$route.params.id - 1].text }}</h3>
      </el-main>
    </el-container>

    <el-table
      :data="personajes[$route.params.id - 1].estudiantes"
      stripe
      style="width: 100%"
      @row-click="onRowClick"
    >
      <el-table-column label="Nombre" prop="nombre"></el-table-column>
    </el-table>

    <el-dialog title="Información de personaje" :visible.sync="dialogVisible" width="40%">
      <span>Nombre : {{ personajes[$route.params.id - 1].estudiantes[index].nombre }}</span>
      <br />
      <span>Magieqeqea : {{ personajes[$route.params.id - 1].estudiantes[index].magia }}</span>
      <br />
      <span>Apariencia : {{ personajes[$route.params.id - 1].estudiantes[index].lore }}</span>
      <br />
      <span>Personalidad : {{ personajes[$route.params.id - 1].estudiantes[index].lore2 }}</span>
      <br />
      <span>Historia : {{ personajes[$route.params.id - 1].estudiantes[index].lore3 }}</span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "personajes",
  data() {
    return {
      dialogVisible: false,
      index: 0,
      personajes: [
        {
          id: 1,
          text: "Lista de estudiantes de Jafang",
          estudiantes: [
            {
              id: 1,
              nombre: "Yanelis",
              magia: "Fuego negro",
              lore:  "Profe no quiero\n" +
                     "hacer la tarea.\n" +
                     "Jopelines.\n",
              lore2: "Profe no quiero hacer la tarea.",
              lore3: "Profe no quiero hacer la tarea.",
            },
            {
              id: 2,
              nombre: "Gael",
              magia: "Rayo",
              lore:  "A recoger lechuguitas.",
              lore2: "A recoger lechuguitas.",
              lore3: "A recoger lechuguitas.",
            },
            {
              id: 3,
              nombre: "Devika Ravenhertz \n",
              magia: "Invocación de armas / Hemomancia \n",
              lore: "\n" + "\n Altura: 1'52cm \n" + "Peso: 48kg \n" + "\n" + "Devika tiene el cabello blanco, por los hombros y los ojos rojos de color rojo carmesí al igual que su padre debido al efecto secundario del uso de los poderes hemomantes que causan parcial o total albinismo. Su tez es bastante pálida y algo que destaca de su diseño son las marcas de maquillaje que tiene bajo los ojos de color granate. Su estatura y peso son bastante bajos para su edad siendo la segunda más delgada de Jafang (la primera siendo Valentina). \n" + "\n" + "Cuando era pequeña su cabello era largo y marrón, normalmente recogido en una trenza, llevaba gafas redondas y tenía los ojos marrón oscuro. La magia de sangre curó su miopía por lo que ya no usa gafas. \n" ,
              lore2: "\n" + "\n Personalidad: INTJ \n" + "Nacimiento: 11 de noviembre (Escorpio) \n" + "\n" + "La mayoría del tiempo Devika se muestra distante y fría con las personas que no conoce y le cuesta abrirse a los demás y mantener conversaciones largas pero en confianza es comprensiva y atenta aunque aún algo tímida y reservada. A veces pierde los estribos cuando la situación se le va de las manos, creándole gran estrés no tener todo bajo control. A pesar de que no suele decidir tomar las riendas en nada que implique más personas tiene gran iniciativa, astucia y perspicacia \n" + "\n" + "Al principio no entendía interacciones sociales como el uso del sarcasmo o el motivo de las emociones de los demás pero después de leer “El libro de las emociones” aprende con rapidez a actuar ante diferentes situaciones casuales y acaba aficionándose al apartado de el sarcasmo usándolo con frecuencia en su día a día. \n" + "\n" + "Tiene dificultad para identificar sus sentimientos y a veces hasta a gestionarlos. A pesar de tener buena autoestima es envidiosa de las cualidades sociales de los demás y es demasiado orgullosa como para admitirlo así que es un tema que le enfada bastante. \n" + "\n" + "A Devika le inspira tocar el violín y le relaja escribir tanto relatos como poesía como canciones. Le agobia la sensación de perder el tiempo o fracasar en algo que le importa así que le suele dedicar tiempo a estudiar. \n" ,
              lore3: "Devika pertenece a la familia Ravenhertz y Weiss, un linaje de magos oscuros que viven en la ciudad de Illusia desde hace generaciones. Como el resto de su línea no tiene bendición de ningún elemento y en su lugar practica magia prohibida de sangre (Hemomancia) e invocación de armas. \n" + "\n" + "Devika es una buena estudiante en Arcus dentro de la casa de Jafang y se suele juntar con pocas personas debido a su síndrome de Asperger, normalmente siendo éstas Yanelis, Khalil, Javier y Gael. \n" + "\n" + "Cuando llegó a la academia se unió al club prohibido de magias oscuras y conoció a Alexis, una chica que se mostró amigable con ella durante las primeras semanas de colegio. A medida que avanzaron las cosas Devika se dio cuenta de que actuaba de forma extraña y sospechosa para acabar descubriendo que algo tuvo que ver en la explosión en el barrio pobre de Illusia. A partir de ahí Devika comienza a investigar el caso por su cuenta con ayuda de sus 4 amigos hasta acabar en una ocasión enfrentándose Alexis y a su grupo en una excursión. \n" + "\n" + "Tras ésto Alexis abandona la ciudad no sin antes dejarle en sus manos una pista para continuar su investigación por lo que Devika va a la trampilla del bosque de Arcus que comunica con el barrio de ocio de la ciudad y conoce a Frederic, un hombre que maneja cosas ilegales en ese área y con el que acaba firmando un contrato a cambio de información y protección. \n" ,
            },
            {
              id: 4,
              nombre: "Jaden",
              magia: "Maricon",
              lore:  "No me pagan uyfuyfruytlo suficiente.",
              lore2: "No me pagan lo suficiente.",
              lore3: "No me pagan lo suficiente.",
            },
            {
              id: 5,
              nombre: "Axel",
              magia: "Fuego",
              lore:  "El pelón.",
              lore2: "El pelón.",
              lore3: "El pelón.",
            },
            {
              id: 6,
              nombre: "Stormy",
              magia: "Roca",
              lore:  "Traidora a la patria 100% real.",
              lore2: "Traidora a la patria.",
              lore3: "Traidora a la patria.",
            },
            {
              id: 7,
              nombre: "Talia",
              magia: "Arena",
              lore:  "Que si me gusta Axel?",
              lore2: "Que si me gusta Axel?",
              lore3: "Que si me gusta Axel?",
            },
            {
              id: 8,
              nombre: "Valentina",
              magia: "Viento",
              lore:  "Mi amiga me abandona por el pelón.",
              lore2: "Mi amiga me abandona por el pelón.",
              lore3: "Mi amiga me abandona por el pelón.",
            },
            {
              id: 9,
              nombre: "Javi",
              magia: "Rayo / Hielo",
              lore:  "El lios.",
              lore2: "El lios.",
              lore3: "El lios.",
            },
            {
              id: 10,
              nombre: "Khalil",
              magia: "Humo",
              lore:  "Mohad-cueva.",
              lore2: "Mohad-cueva.",
              lore3: "Mohad-cueva.",
            },
            {
              id: 11,
              nombre: "Carla",
              magia: "Hielo / Cambiaformas, Dragón",
              lore:  "Me pegó el trauma.",
              lore2: "Me pegó el trauma.",
              lore3: "Me pegó el trauma.",
            },
            {
              id: 12,
              nombre: "Nais",
              magia: "Luz",
              lore:  "Bad girls do bad things.",
              lore2: "Bad girls do bad things.",
              lore3: "Bad girls do bad things.",
            },
          ],
        },
        {
          id: 2,
          text: "Lista de estudiantes de Owlong",
          estudiantes: [
            {
              id: 1,
              nombre: "Teresa",
              magia: "Fuego",
              lore:  "Pisame la cara.",
              lore2: "Pisame la cara.",
              lore3: "Pisame la cara.",
            },
            {
              id: 2,
              nombre: "Clara",
              magia: "Viento",
              lore:  "Baby.",
              lore2: "Baby.",
              lore3: "Baby.",
            },
            {
              id: 3,
              nombre: "Matias",
              magia: "Hielo",
              lore:  "El hijo del alcalde.",
              lore2: "El hijo del alcalde.",
              lore3: "El hijo del alcalde.",
            },
            {
              id: 4,
              nombre: "Elisabeth",
              magia: "Nigromancia / Magia Humana",
              lore:  "Si me molestas grito.",
              lore2: "Si me molestas grito.",
              lore3: "Si me molestas grito.",
            },
            {
              id: 5,
              nombre: "Eve",
              magia: "?",
              lore:  "*Gruñido*",
              lore2: "*Gruñido*",
              lore3: "*Gruñido*",
            },
            {
              id: 6,
              nombre: "Yon",
              magia: "?",
              lore: "--",
              lore2: "--",
              lore3: "--",
            },
            {
              id: 7,
              nombre: "Roy",
              magia: "Oscuridad",
              lore:  "Yanelis 2.",
              lore2: "Yanelis 2.",
              lore3: "Yanelis 2.",
            },
            {
              id: 8,
              nombre: "Tais",
              magia: "Agua",
              lore:  "Me pone el cura.",
              lore2: "Me pone el cura.",
              lore3: "Me pone el cura.",
            },
            {
              id: 9,
              nombre: "--",
              magia: "--",
              lore: "--",
              lore2: "",
              lore3: "",
            },
            {
              id: 10,
              nombre: "--",
              magia: "--",
              lore: "--",
              lore2: "",
              lore3: "",
            },
            {
              id: 11,
              nombre: "--",
              magia: "--",
              lore: "--",
              lore2: "",
              lore3: "",
            },
            {
              id: 12,
              nombre: "--",
              magia: "--",
              lore: "--",
              lore2: "",
              lore3: "",
            },
          ],
        },
        {
          id: 3,
          text: "Lista de estudiantes de Torhorn",
          estudiantes: [
            {
              id: 1,
              nombre: "Nati",
              magia: "Fuego",
              lore:  "Te meto un puño.",
              lore2: "Te meto un puño.",
              lore3: "Te meto un puño.",
            },
            {
              id: 2,
              nombre: "Juan",
              magia: "Rayo",
              lore:  "De nada.",
              lore2: "De nada.",
              lore3: "De nada.",
            },
            {
              id: 3,
              nombre: "Mari",
              magia: "--",
              lore:  "No toques a Juanito.",
              lore2: "No toques a Juanito.",
              lore3: "No toques a Juanito.",
            },
            {
              id: 4,
              nombre: "Angela",
              magia: "Roca",
              lore:  "Durmiendo en la paja.",
              lore2: "Durmiendo en la paja.",
              lore3: "Durmiendo en la paja.",
            },
            {
              id: 5,
              nombre: "Calisto",
              magia: "?",
              lore:  "--",
              lore2: "--",
              lore3: "--",
            },
            {
              id: 6,
              nombre: "--",
              magia: "--",
              lore: "--",
              lore2: "",
              lore3: "",
            },
            {
              id: 7,
              nombre: "--",
              magia: "--",
              lore: "--",
              lore2: "",
              lore3: "",
            },
            {
              id: 8,
              nombre: "--",
              magia: "--",
              lore: "",
              lore2: "",
              lore3: "",
            },
            {
              id: 9,
              nombre: "--",
              magia: "--",
              lore: "--",
              lore2: "",
              lore3: "",
            },
            {
              id: 10,
              nombre: "--",
              magia: "--",
              lore: "--",
              lore2: "",
              lore3: "",
            },
            {
              id: 11,
              nombre: "--",
              magia: "--",
              lore: "--",
              lore2: "",
              lore3: "",
            },
            {
              id: 12,
              nombre: "--",
              magia: "--",
              lore: "--",
              lore2: "",
              lore3: "",
            },
          ],
        },
        {
          id: 4,
          text: "Lista de estudiantes de Hogor",
          estudiantes: [
            {
              id: 1,
              nombre: "Jadra",
              magia: "Humo",
              lore:  "Poweroll.",
              lore2: "Poweroll.",
              lore3: "Poweroll.",
            },
            {
              id: 2,
              nombre: "Astora",
              magia: "Fuego / Cambiaformas, Dragón",
              lore:  "Baby.",
              lore2: "Baby.",
              lore3: "Baby.",
            },
            {
              id: 3,
              nombre: "Lan",
              magia: "--",
              lore:  "Carlos #1.",
              lore2: "Carlos #1.",
              lore3: "Carlos #1.",
            },
            {
              id: 4,
              nombre: "Carlos",
              magia: "Viento",
              lore:  "Humillado por Yanelis.",
              lore2: "Humillado por Yanelis.",
              lore3: "Humillado por Yanelis.",
            },
            {
              id: 5,
              nombre: "Sandra",
              magia: "Agua / Invocación de dragones / Hemomancia",
              lore:  "Conoces a Alexis?",
              lore2: "Conoces a Alexis?",
              lore3: "Conoces a Alexis?",
            },
            {
              id: 6,
              nombre: "Raymond",
              magia: "Oscuridad / Invocación de demonios / Sacrificio",
              lore:  "Chiquita.",
              lore2: "Chiquita.",
              lore3: "Chiquita.",
            },
            {
              id: 7,
              nombre: "Maria",
              magia: "Fuego / Invocación de aves",
              lore:  "--",
              lore2: "--",
              lore3: "--",
            },
            {
              id: 8,
              nombre: "--",
              magia: "--",
              lore: "",
              lore2: "",
              lore3: "",
            },
            {
              id: 9,
              nombre: "--",
              magia: "--",
              lore: "--",
              lore2: "",
              lore3: "",
            },
            {
              id: 10,
              nombre: "--",
              magia: "--",
              lore: "--",
              lore2: "",
              lore3: "",
            },
            {
              id: 11,
              nombre: "--",
              magia: "--",
              lore: "--",
              lore2: "",
              lore3: "",
            },
            {
              id: 12,
              nombre: "--",
              magia: "--",
              lore: "--",
              lore2: "",
              lore3: "",
            },
          ],
        },
        {
          id: 5,
          text: "Lista del profesorado de Arcus",
          estudiantes: [
            {
              id: 1,
              nombre: "Victor",
              magia: "--",
              lore:  "La Kardashian.",
              lore2: "La Kardashian.",
              lore3: "La Kardashian.",
            },
            {
              id: 2,
              nombre: "Elisabeth",
              magia: "No tiene",
              lore:  "Tutora de Jafang, Conocimiento de armas.",
              lore2: "No le pagan lo suficiente.",
              lore3: "--",
            },
            {
              id: 3,
              nombre: "Leon",
              magia: "Ilusión",
              lore:  "Practica de combate.",
              lore2: "--",
              lore3: "--",
            },
            {
              id: 4,
              nombre: "Chad",
              magia: "--",
              lore:  "Herbologia.",
              lore2: "Con un porrito en la mano, yo me lo liiiiioo.",
              lore3: "--",
            },
            {
              id: 5,
              nombre: "Fausto",
              magia: "--",
              lore:  "Elementos.",
              lore2: "--",
              lore3: "--",
            },
          ],
        },
        {
          id: 6,
          text: "Lista de Personajes de la Arena",
          estudiantes: [
            {
              id: 1,
              nombre: "Diablo",
              magia: "Fuego ?",
              lore: "Luchador en la Arena",
              lore2: "Vence a Matias Puño de Hierro.",
              lore3: "--",
            },
            {
              id: 2,
              nombre: "Leonardo",
              magia: "--",
              lore: "Jefe del club Estrella Dorada.",
              lore2: "Ofrece a Gael unirse a la Arena.",
              lore3: "--",
            },
          ],
        },
        {
          id: 7,
          text: "Otros personajes",
          estudiantes: [
            {
              id: 1,
              nombre: "Sebastián",
              magia: "--",
              lore:  "Guardia 1.",
              lore2: "Le dejó la mujer.",
              lore3: "--",
            },
            {
              id: 2,
              nombre: "Paco",
              magia: "--",
              lore:  "Guardia 2.",
              lore2: "Morreó a Sebastián.",
              lore3: "--",
            },
          ],
        },
      ],
    };
  },
  methods: {
    onRowClick(row) {
      this.index = this.personajes[
        this.$route.params.id - 1
      ].estudiantes.indexOf(row);
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
#personajes {
  background-color: rgba(255, 255, 255, 0.5);
  white-space: pre-line;
}

#block {
  width: 80%;
  margin: auto;
}
</style>