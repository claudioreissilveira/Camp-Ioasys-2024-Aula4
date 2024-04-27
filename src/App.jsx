import React from "react";
import selfPhoto from "./assets/fotoprofissional.jpg";
import { Abuttonlink } from "./components/Abutton";
import "./App.css";

function App() {
  const linktree = [
    {
      name: "GitHub",
      title: "linkGit",
      href: "https://github.com/claudioreissilveira",
    },
    {
      name: "LinkedIn",
      title: "linkLinkedIn",
      href: "https://www.linkedin.com/in/claudio-roberto-595186281/",
    },
    {
      name: "Twitter",
      title: "linkTwitter",
      href: "https://twitter.com/claudioxkr",
    },
    {
      name: "Instagram",
      title: "linkInsta",
      href: "https://www.instagram.com/claudiorgrs_/",
    },
    {
      name: "YouTube",
      title: "linkYt",
      href: "https://www.youtube.com/channel/UCEVaoym5HMiUYXAvJJ1rUMA",
    },
  ];
  const name = "Claudio Roberto";
  const city = "Belo Horizonte, Minas Gerais";
  const hobby = "Adoro jogar basquete";

  return (
    <>
      <article className="card">
        <img
          className="main-img"
          src={selfPhoto}
          width="170px"
          alt="selfPhoto"
        />
        <h2 className="main-name">{name}</h2>
        <p>{city}</p>
        <span>{hobby}</span>
        <ul>
          {linktree.map((links) => {
            return (
              <li>
                <Abuttonlink
                  title={links.title}
                  href={links.href}
                  key={links.name}
                >
                  {links.name}
                </Abuttonlink>
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
}

export default App;
