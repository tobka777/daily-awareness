import React from 'react';
import { useFela } from 'react-fela';

function Home() {
  document.body.style.backgroundColor = "skyblue";
  const { css } = useFela();
  return <div className={css({
	  font: "18px Arial Black, sans-serif",
	  fontWeight: 900,
    lineHeight: "28px",
    margin: 0,
    padding: "40vh 40px 0 40px",
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase"
  })}>Hallo das ist meine Nachricht!</div>;
}

export default Home;