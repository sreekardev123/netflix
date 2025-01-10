import card_img1 from "../../assets/Movieimg/card_img1.avif";
import card_img2 from "../../assets/Movieimg/card_img2.jpg";
import card_img3 from "../../assets/Movieimg/card_img3.png";
import card_img4 from "../../assets/Movieimg/card_img4.jpg";
import card_img5 from "../../assets/Movieimg/card_img5.jpg";
import card_img6 from "../../assets/Movieimg/card_img6.jpg";
import card_img7 from "../../assets/Movieimg/card_img7.jpg";
import card_img8 from "../../assets/Movieimg/card_img8.jpg";
import card_img9 from "../../assets/Movieimg/card_img9.webp";
import card_img10 from "../../assets/Movieimg/card_img10.avif";
import card_img11 from "../../assets/Movieimg/card_img11.webp";
import card_img12 from "../../assets/Movieimg/card_img12.avif";
import tittleimg1 from "../../assets/Movieimg/tittleimg1.jpg";
import tittleimg2 from "../../assets/Movieimg/tittleimg2.jpg";
import tittleimg3 from "../../assets/Movieimg/tittleimg3.avif";
import tittleimg4 from "../../assets/Movieimg/tittleimg4.webp";
import tittleimg5 from "../../assets/Movieimg/tittleimg5.jpg";
import tittleimg6 from "../../assets/Movieimg/tittleimg6.jpg";
import tittleimg7 from "../../assets/Movieimg/tittleimg7.webp";
import tittleimg8 from "../../assets/Movieimg/tittleimg8.jpg";
import tittleimg9 from "../../assets/Movieimg/tittleimg9.webp";
import tittleimg10 from "../../assets/Movieimg/tittleimg10.webp";
import tittleimg11 from "../../assets/Movieimg/tittleimg11.webp";
import tittleimg12 from "../../assets/Movieimg/tittleimg12.webp";
import Trailer from   "../../assets/Trailer.mp4"


const Movies = [
  {
    name: "MUFASA",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis rhoncus vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    titleImage: tittleimg1,
    tittlename: "Geostorom",
    image: card_img1,
    category: "Western",
    language: "English",
    year: "2022",
    time: "3hr",
    video: " Trailer",
    rate: 3.4,
    reviews: 23,
  },
  {
    name: "Avengers",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis rhoncus vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    titleImage: tittleimg2,
    tittlename: "Rampage",
    image: card_img2,
    category: "Thriller",
    language: "English",
    year: "2021",
    time: "2hr",
    video: "",
    rate: 4.2,
    reviews: 85,
  },
  {
    name: "Venom",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis rhoncus vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    titleImage: tittleimg3,
    tittlename: "RRR",
    image: card_img3,
    category: "Sci-Fi",
    language: "English",
    year: "2023",
    time: "2hr",
    video: "",
    rate: 4.8,
    reviews: 150,
  },
  {
    name: "Jawan",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis rhoncus vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    titleImage: tittleimg4,
    tittlename: "Squid Game",
    image: card_img4,
    category: "Action",
    language: "Hindi",
    year: "2020",
    time: "2hr",
    video: "",
    rate: 4.5,
    reviews: 300,
  },
  {
    name: "The Ghost",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis rhoncus vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    titleImage: tittleimg5,
    tittlename: "Avengers CivilWar",
    image: card_img5,
    category: "Adventure",
    language: "Spanish",
    year: "2019",
    time: "1hr",
    video: "",
    rate: 4.0,
    reviews: 90,
  },
  {
    name: "War",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis rhoncus vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    titleImage: tittleimg6,
    tittlename: "The Conjuring",
    image: card_img6,
    category: "Adventure",
    language: "Spanish",
    year: "2019",
    time: "1hr",
    video: "",
    rate: 4.0,
    reviews: 90,
  },
  {
    name: "No Escape",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis rhoncus vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    titleImage: tittleimg7,
    tittlename: "Black Panther",
    image: card_img7,
    category: "Adventure",
    language: "Spanish",
    year: "2019",
    time: "1hr",
    video: "",
    rate: 4.0,
    reviews: 90,
  },
  {
    name: "Avengers EndGame",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis rhoncus vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    titleImage: tittleimg8,
    tittlename: "Kalki",
    image: card_img8,
    category: "Adventure",
    language: "Spanish",
    year: "2019",
    time: "1hr",
    video: "",
    rate: 4.0,
    reviews: 90,
  },
  {
    name: "Chicchore",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis rhoncus vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    titleImage: tittleimg9,
    tittlename: "Animal",
    image: card_img9,
    category: "Adventure",
    language: "Spanish",
    year: "2019",
    time: "1hr",
    video: "",
    rate: 4.0,
    reviews: 90,
  },
  {
    name: "Game Changer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis rhoncus vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    titleImage: tittleimg10,
    tittlename: "Spider Man",
    image: card_img10,
    category: "Adventure",
    language: "Spanish",
    year: "2019",
    time: "1hr",
    video: "",
    rate: 4.0,
    reviews: 90,
  },
  {
    name: "Lucky Baskhar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis rhoncus vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    titleImage: tittleimg11,
    tittlename: "Doctor Strange",
    image: card_img11,
    category: "Adventure",
    language: "Spanish",
    year: "2019",
    time: "1hr",
    video: "",
    rate: 4.0,
    reviews: 90,
  },
  {
    name: "Munjya",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis rhoncus vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    titleImage: tittleimg12,
    tittlename: "Munjya",
    image: card_img12,
    category: "Adventure",
    language: "Spanish",
    year: "2019",
    time: "1hr",
    video: "",
    rate: 4.0,
    reviews: 90,
  },
];

export default Movies;
