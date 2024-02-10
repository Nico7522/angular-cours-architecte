export interface Group {
    name: string;
    creationDate: Date;
    styles: Style[];
    pays: string;
    artistes: Artist[]
}

export interface Style {
    styleName: string;
}

export interface Artist {
    id: number;
    name: string;
    surname: string;
}

export const stylesList: Style[] = [
    {styleName : "Rock"},
    {styleName : "Pop"},
    {styleName : "Rap"},
    {styleName : "Rnb"},
]

export const artistList: Artist[] = [
    {
        id: 1,
        name: "Jean",
        surname: "Jj"
    },
    {
        id: 2,
        name: "Pierre",
        surname: "PJ"
    },
    {
        id: 3,
        name: "Patrick",
        surname: "Patpat"
    },
    {
        id: 4,
        name: "Bob",
        surname: "Boby"
    },
]

export const groupList: Group[] = [
    {
        name: "The Rockers",
        creationDate: new Date("2022-01-01"),
        styles: [stylesList[0]], // Rock style
        pays: "France",
        artistes: [artistList[0], artistList[1]] // Jean Jj, Pierre PJ
    },
    {
        name: "Pop Sensations",
        creationDate: new Date("2022-02-15"),
        styles: [stylesList[1]], // Pop style
        pays: "États-Unis",
        artistes: [artistList[2], artistList[3]] // Patrick Patpat, Bob Boby
    },
    // Ajoutez d'autres groupes selon vos besoins
];