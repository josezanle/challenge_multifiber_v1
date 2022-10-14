import Cliente from "./Cliente";
import Datos from "./Datos";
import Imagenes from "./Imagenes";
import Preguntas from "./Preguntas";
import Trayecto from "./Trayecto";


export const tabs = [
    {
        tab: "Datos",
        component: <Datos />
    },
    {
        tab: "Cliente",
        component: <Cliente />
    },
    {
        tab: "Trayecto",
        component: <Trayecto />
    },
    {
        tab: "Imágenes",
        component: <Imagenes />
    },
    {
        tab: "Preguntas",
        component: <Preguntas />
    },
]