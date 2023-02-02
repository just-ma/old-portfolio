import radiohead_file from "../assets/songs/radiohead.mp3";
import sza_file from "../assets/songs/sza.mp3";
import jpegmafia_file from "../assets/songs/jpegmafia.mp3";
import gorillaz_file from "../assets/songs/gorillaz.mp3";
import kero_kero_bonito_file from "../assets/songs/kero_kero_bonito.mp3";
import injury_reserve_file from "../assets/songs/injury_reserve.mp3";
import kanye_west_file from "../assets/songs/kanye_west.mp3";
import steve_lacy_file from "../assets/songs/steve_lacy.mp3";
import tyler_the_creator_file from "../assets/songs/tyler_the_creator.mp3";
import blood_orange_file from "../assets/songs/blood_orange.mp3";
import cate_le_bon_file from "../assets/songs/cate_le_bon.mp3";
import spoon_file from "../assets/songs/spoon.mp3";
import alabama_shakes_file from "../assets/songs/alabama_shakes.mp3";

import radiohead_album from "../assets/pictures/spotify/radiohead.jpg";
import sza_album from "../assets/pictures/spotify/sza.jpg";
import jpegmafia_album from "../assets/pictures/spotify/jpegmafia.jpg";
import gorillaz_album from "../assets/pictures/spotify/gorillaz.jpg";
import kero_kero_bonito_album from "../assets/pictures/spotify/kero_kero_bonito.jpg";
import injury_reserve_album from "../assets/pictures/spotify/injury_reserve.jpg";
import kanye_west_album from "../assets/pictures/spotify/kanye_west.jpg";
import steve_lacy_album from "../assets/pictures/spotify/steve_lacy.jpg";
import tyler_the_creator_album from "../assets/pictures/spotify/tyler_the_creator.jpg";
import blood_orange_album from "../assets/pictures/spotify/blood_orange.jpg";
import cate_le_bon_album from "../assets/pictures/spotify/cate_le_bon.jpg";
import spoon_album from "../assets/pictures/spotify/spoon.jpg";
import alabama_shakes_album from "../assets/pictures/spotify/alabama_shakes.jpg";

const radiohead_audio = new Audio(radiohead_file);
const sza_audio = new Audio(sza_file);
const jpegmafia_audio = new Audio(jpegmafia_file);
const gorillaz_audio = new Audio(gorillaz_file);
const kero_kero_bonito_audio = new Audio(kero_kero_bonito_file);
const injury_reserve_audio = new Audio(injury_reserve_file);
const kanye_west_audio = new Audio(kanye_west_file);
const steve_lacy_audio = new Audio(steve_lacy_file);
const tyler_the_creator_audio = new Audio(tyler_the_creator_file);
const blood_orange_audio = new Audio(blood_orange_file);
const cate_le_bon_audio = new Audio(cate_le_bon_file);
const spoon_audio = new Audio(spoon_file);
const alabama_shakes_audio = new Audio(alabama_shakes_file);

const SPOTIFY = [
  {
    artist: "Radiohead",
    title: "Weird Fishes/ Arpeggi",
    src: radiohead_audio,
    album: radiohead_album,
  },
  {
    artist: "SZA",
    title: "Supermodel",
    src: sza_audio,
    album: sza_album,
  },
  {
    artist: "JPEGMAFIA",
    title: "The Who",
    src: jpegmafia_audio,
    album: jpegmafia_album,
  },
  {
    artist: "Gorillaz",
    title: "To Binge",
    src: gorillaz_audio,
    album: gorillaz_album,
  },
  {
    artist: "Kero Kero Bonito",
    title: "If I'd Known",
    src: kero_kero_bonito_audio,
    album: kero_kero_bonito_album,
  },
  {
    artist: "Injury Reserve",
    title: "Koruna & Lime",
    src: injury_reserve_audio,
    album: injury_reserve_album,
  },
  {
    artist: "Kanye West",
    title: "Ghost Town",
    src: kanye_west_audio,
    album: kanye_west_album,
  },
  {
    artist: "Steve Lacy",
    title: "Only If",
    src: steve_lacy_audio,
    album: steve_lacy_album,
  },
  {
    artist: "Tyler, The Creator",
    title: "I DON'T LOVE YOU ANYMORE",
    src: tyler_the_creator_audio,
    album: tyler_the_creator_album,
  },
  {
    artist: "Blood Orange",
    title: "Champagne Coast",
    src: blood_orange_audio,
    album: blood_orange_album,
  },
  {
    artist: "Cate le Bon",
    title: "Daylight Matters",
    src: cate_le_bon_audio,
    album: cate_le_bon_album,
  },
  {
    artist: "Spoon",
    title: "Inside Out",
    src: spoon_audio,
    album: spoon_album,
  },
  {
    artist: "Alabama Shakes",
    title: "Sound & Color",
    src: alabama_shakes_audio,
    album: alabama_shakes_album,
  },
];

export default SPOTIFY;
