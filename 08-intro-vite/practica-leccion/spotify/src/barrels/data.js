import {
    megusta,
    cancionesImpactan,
    forge,
    kindie,
    meRecuerdaA,
    queMeRecuerda,
    sime,
    tresTresTres,
    workout,
    descubrimiento,
    mixDiario1,
    mixDiario2,
    mixDiario3,
    mixDiario4,
    strokes,
    nujabes,
    joji,
    aimer,
    radwimps,
} from "../barrels/assets";


const contentSidebar = [
    {
        imgUrl: megusta,
        nombre: "Tus me gusta",
        anclado: false,
        tipo: "Playlist",
        autor: "709 canciones",
    },
    {
        imgUrl: kindie,
        nombre: "K-indie",
        anclado: true,
        tipo: "Playlist",
        autor: "Morán",
    },
    {
        imgUrl: workout,
        nombre: "Workout",
        anclado: true,
        tipo: "Playlist",
        autor: "Morán",
    },
    {
        imgUrl: cancionesImpactan,
        nombre: "Canciones que me impactan",
        anclado: true,
        tipo: "Playlist",
        autor: "Morán",
    },
    {
        imgUrl: forge,
        nombre: "Forge Mx9😎",
        anclado: false,
        tipo: "Playlist",
        autor: "Forge",
    },
    {
        imgUrl: meRecuerdaA,
        nombre: "Me recuerda a",
        anclado: false,
        tipo: "Playlist",
        autor: "Morán",
    },
    {
        imgUrl: queMeRecuerda,
        nombre: "Que me recuerda a alguien",
        anclado: false,
        tipo: "Playlist",
        autor: "Morán",
    },
    {
        imgUrl: tresTresTres,
        nombre: "3:33 a.m",
        anclado: false,
        tipo: "Playlist",
        autor: "Morán",
    },
    {
        imgUrl: sime,
        nombre: "Sime identifico",
        anclado: false,
        tipo: "Playlist",
        autor: "Morán",
    },
    {
        imgUrl: aimer,
        nombre: "Estación de Aimer",
        anclado: false,
        tipo: "Playlist",
        autor: "Spotify",
    },
]

const contentMiniPlaylist = [
    {
        imgUrl: workout,
        titulo: "Workout",
    },
    {
        imgUrl: cancionesImpactan,
        titulo: "Canciones que me impactan",
    },
    {
        imgUrl: queMeRecuerda,
        titulo: "Que me recuerda a alguien",
    },
    {
        imgUrl: tresTresTres,
        titulo: "3:33 a.m",
    },
    {
        imgUrl: meRecuerdaA,
        titulo: "Me recuerda a",
    },
    {
        imgUrl: forge,
        titulo: "Forge Mx9",
    },
    {
        imgUrl: sime,
        titulo: "Sime identifico",
    },
    {
        imgUrl: kindie,
        titulo: "K-indie",
    },
];

const contentMadeFor = [
    {
        imgUrl: descubrimiento,
        titulo:
            "Tu atajo a joyas ocultas, recomendaciones y futuras canciones favoritas. Se actualiza cada lunes. La música habla por sí misma.",
    },
    {
        imgUrl: mixDiario1,
        titulo: "Nogizaka46, THE YELLOW MONKEY, Vaundy y más",
    },
    {
        imgUrl: mixDiario2,
        titulo: "People In The Box, NoisyCell, Cat Trumpet y más",
    },
    {
        imgUrl: mixDiario3,
        titulo: "Eir Aoi, RADWIMPS, Sayuri y más",
    },
    {
        imgUrl: mixDiario4,
        titulo: "Soutaiseiriron, Quruli, Mondo Grosso y más",
    },
];

const contentMusic = [
    {
        imgUrl: strokes,
        titulo: "Con MGMT, Franz Ferdinand, Blur y más.",
    },
    {
        imgUrl: nujabes,
        titulo: "Con Force Of Nature, Substantial, TSUTCHIE y más",
    },
    {
        imgUrl: joji,
        titulo: "People In The Box, NoisyCell, Cat Trumpet y más",
    },
    {
        imgUrl: aimer,
        titulo: "Con YOASOBI, 美波, Sayuri y más",
    },
    {
        imgUrl: radwimps,
        titulo: "Con ヨルシカ, Vaundy, SEKAI NO OWARI y más",
    },
];

export { contentSidebar, contentMadeFor, contentMusic, contentMiniPlaylist };
