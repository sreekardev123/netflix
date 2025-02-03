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
// import tittleimg1 from "../../assets/Movieimg/tittleimg1.jpg";
// import tittleimg2 from "../../assets/Movieimg/tittleimg2.jpg";
// import tittleimg3 from "../../assets/Movieimg/tittleimg3.avif";
// import tittleimg4 from "../../assets/Movieimg/tittleimg4.webp";
// import tittleimg5 from "../../assets/Movieimg/tittleimg5.jpg";
// import tittleimg6 from "../../assets/Movieimg/tittleimg6.jpg";
// import tittleimg7 from "../../assets/Movieimg/tittleimg7.webp";
// import tittleimg8 from "../../assets/Movieimg/tittleimg8.jpg";
// import tittleimg9 from "../../assets/Movieimg/tittleimg9.webp";
// import tittleimg10 from "../../assets/Movieimg/tittleimg10.webp";
// import tittleimg11 from "../../assets/Movieimg/tittleimg11.webp";
// import tittleimg12 from "../../assets/Movieimg/tittleimg12.webp";
// import Trailer from "../../assets/Trailer.mp4";

const Movies = [
  {
    name: "MUFASA",
    desc: "The Lion King explores Mufasa's backstory and how he became the King of the Pride Lands. The movie reveals that as a cub, Mufasa is swept away by a flood and separated from his parents Masego and Afia. He is adopted by a royal lion family, much to the leader, King Obasi's, discontent.",
    image: card_img1,
    category: "Western",
    language: "English",
    year: "2024",
    time: "2hr",
    trailerurl: "https://www.youtube.com/embed/lMXh6vjiZrI",
    rate: 3.4,
    reviews: 23,
  },
  {
    name: "Avengers",
    desc: "The Avengers are a team of extraordinary individuals, including Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye, assembled by S.H.I.E.L.D. to protect Earth from global threats, often facing off against powerful villains and extraterrestrial forces, requiring them to overcome their individual differences and unite as a team to safeguard the planet.",
    image: card_img2,
    category: "Thriller",
    language: "English",
    year: "2018",
    time: "2hr45min",
    trailerurl: "https://www.youtube.com/embed/TcMBFSGVi1c",
    rate: 4.2,
    reviews: 85,
  },
  {
    name: "Venom",
    desc: "Venom refers to a toxic substance produced by certain animals, like snakes, spiders, and scorpions, which is actively injected into prey or predators through a bite or sting, causing harm or death depending on the type of toxin involved; essentially, it's a poisonous secretion delivered through a specialized mechanism, often used for hunting or defense.",
    image: card_img3,
    category: "Thriller",
    language: "English",
    year: "2024",
    time: "2hr",
    trailerurl: "https://www.youtube.com/embed/-FmWuCgJmxo",
    rate: 4.8,
    reviews: 150,
  },
  {
    name: "Jawan",
    desc: "A prison warden recruits inmates to commit outrageous crimes that shed light on corruption and injustice - and that lead him to an unexpected reunion. A prison warden recruits inmates to commit outrageous crimes that shed light on corruption and injustice - and that lead him to an unexpected reunion.",
    image: card_img4,
    category: "Action",
    language: "Hindi",
    year: "2023",
    time: "2hr30min",
    trailerurl: "https://www.youtube.com/embed/db6e22CkmJY",
    rate: 4.5,
    reviews: 300,
  },
  {
    name: "The Ghost",
    desc: "An ex-Interpol officer wreaks havoc and sends shock waves across the global underworld but goes missing in action, only to remerge years later, for his beloved family.",

    image: card_img5,
    category: "Adventure",
    language: "Telugu",
    year: "2023",
    time: "2hr45min",
    trailerurl: "https://www.youtube.com/embed/TP7cvtNhHqQ",
    rate: 4.0,
    reviews: 90,
  },
  {
    name: "War",
    desc: "A war is a sustained, organized armed conflict between nations or political groups, characterized by widespread violence, destruction, and loss of life, often involving regular military forces and conducted on a large scale, causing significant social and economic disruption across affected regions; it is a form of political violence where the use of force aims to achieve strategic objectives.",

    image: card_img6,
    category: "Action",
    language: "Hindi",
    year: "2019",
    time: "3hr",
    trailerurl: "https://www.youtube.com/embed/XkHV7ROmIVA",
    rate: 4.0,
    reviews: 90,
  },
  {
    name: "No Escape",
    desc: "No Escape is a high-stakes thriller project where the protagonist, usually an ordinary individual thrust into a dangerous situation, must navigate a hostile environment with no clear path to safety, desperately trying to escape imminent threats while facing extreme challenges and moral dilemmas, often with limited resources and time, all while protecting themselves and potentially others around them.",

    image: card_img7,
    category: "Thriller",
    language: "English",
    year: "2017",
    time: "1hr20min",
    trailerurl: "https://www.youtube.com/embed/FsOt3sKjrh8",
    rate: 4.0,
    reviews: 90,
  },
  {
    name: "Avengers EndGame",
    desc: "Avenger Endgame is a Marvel superhero film where the surviving Avengers, devastated by Thanos' actions in Infinity War which erased half of all life in the universe, must band together to travel through time, retrieve the Infinity Stones from different points in the past, and attempt to reverse the damage, ultimately facing Thanos in a final, epic battle to restore the universe and those they lost.",

    image: card_img8,
    category: "Adventure",
    language: "English",
    year: "2019",
    time: "3hr",
    trailerurl: "https://www.youtube.com/embed/0jNvJU52LvU",
    rate: 4.0,
    reviews: 90,
  },
  {
    name: "Chicchore",
    desc: "Chhichhore is a Bollywood film that follows a middle-aged man, Anirudh, who recounts his college days to his critically ill son, sharing stories about his group of friends labelled as losers and how they navigated their academic and personal struggles, ultimately conveying the message that winning isn't everything and that one's self-worth isn't defined by failures, but by the journey and the people around them.",

    image: card_img9,
    category: "Romantic",
    language: "Hindi",
    year: "2019",
    time: "2hr",
    trailerurl: "https://www.youtube.com/embed/t56jPOpGFts",
    rate: 4.0,
    reviews: 90,
  },
  {
    name: "Game Changer",
    desc: "A game changer description for your project should highlight how it radically alters the current approach or landscape within your field, introducing a significantly improved solution or innovative concept that could potentially disrupt the market or significantly enhance user experience, essentially setting a new standard for others to follow.",

    image: card_img10,
    category: "Adventure",
    language: "Telugu",
    year: "2025",
    time: "2hr45min",
    trailerurl: "https://www.youtube.com/embed/QSu9-DBjMPI",
    rate: 4.0,
    reviews: 90,
  },
  {
    name: "Lucky Baskhar",
    desc: "Three years earlier, Baskhar is a cashier in Magadha, one of the few remaining private banks in India following nationalisation. On the side, he helps uneducated people write checks and banking forms for a fee. He lives with his wife Sumathi, who left her rich family to be with him and aspires to start a home food business, their young son Karthik, and Prahalad, Baskhar's father, a former chartered accountant who was paralyzed and became voluntarily mute after being scammed into a bad business deal.",

    image: card_img11,
    category: "Adventure",
    language: "Telugu",
    year: "2024",
    time: "2hr35min",
    trailerurl: "https://www.youtube.com/embed/krdomVobIxE",
    rate: 4.0,
    reviews: 90,
  },
  {
    name: "Munjya",
    desc: "In 1952, in a village in the Konkan, a young boy named Gotya is in love with Munni, a girl seven years older than him. When Munni's marriage is arranged with another man, Gotya unsuccessfully attempts to poison him. After being scolded by his mother and made a priest, Gotya, determined to marry Munni, takes his sister Gita to a dense jungle called Chetukwadi to perform black magic under a peepal tree. In the process, he accidentally kills himself when trying to sacrifice his sister, and becomes a malevolent spirit named Munjya that haunts the tree.",

    image: card_img12,
    category: "Horror",
    language: "Hindi",
    year: "2024",
    time: "2hr",
    trailerurl: "https://www.youtube.com/embed/8X3uF80H5LU",
    rate: 4.0,
    reviews: 90,
  },
];

export default Movies;
