import { Fragment } from "react";
import Card from "../component/CardProfile";

import "./Movie.css";
export default function Profile() {
    const data = [
    {
      Nama: "John Wick",
      id: 1,
      Universitas: "Diponegoro",
      img: "https://i.pinimg.com/originals/ee/ff/46/eeff468a7cde5720e45c4f7a1daf8d95.png",
    },
    {
      Nama: "John Wick",
      id: 2,
      rate: 4,
      Universitas: "action, crime",
      img: "https://i.pinimg.com/originals/ee/ff/46/eeff468a7cde5720e45c4f7a1daf8d95.png",
    },
    {
      Nama: "John Wick",
      id: 3,
      rate: 4,
      Universitas: "action, crime",
      img: "https://i.pinimg.com/originals/ee/ff/46/eeff468a7cde5720e45c4f7a1daf8d95.png",
    },
  ];
    return (
      <>
      <p id="movies">All Movies</p>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <Card
            Nama={item.Nama}
            img={item.img}
            Universitas={item.Universitas}
           />
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
  }
  