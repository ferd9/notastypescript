interface AudioPlayer{
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "mess",
    details: {
        author: "Alguien",
        year: 2016
    }
}

const song = "new song";

const {song: anotherSong, songDuration: durarion} = audioPlayer;
const { details: detalles } = audioPlayer;
const {author} = detalles;