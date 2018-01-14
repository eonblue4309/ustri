import React from "react";
import Sections from "../../components/Sections";

const WhatIsIaijutsu = () => (
  <article>
    <h3>Iaijutsu</h3>
    <img src="images/iaijutsu-kanji.svg" />
    <p>
      Iaijutsu is a martial art (bujutsu) that strives to supress a sudden
      attack by the attacker against the defender using a single, swift stroke
      of the sword and seeks to master the various principles of drawing,
      re-sheathing and using the sword.
    </p>
    <p>
      Furthermore, iaijutsu is a martial way (budo) as it practiced with a
      humble and modest heart and continually trains the spirit.
    </p>
  </article>
);

const WhatIsTamiyaRyu = () => (
  <article>
    <h3>Tamiya Ryu</h3>
    <img src="images/tamiyaryu-kanji.svg" />
    <p>
      Tamiya Ryu Iaijutsu is a military art (bugei) that was introduced in the
      Tensho period (1573-1591) by its founder, Tamiya Heibei Narimasa.
      Narimasa, together with Katayama Hoki no kami Hisayasu (the founder of
      Hoki Ryu) and Sekiguchi Jushin (the founder of Sekiguchi Ryu) were pupiles
      of Hayashizake Jinsuke Shigenobu, the founder of iaijutsu.
    </p>
    <p>
      The style characteristics of the Tamiya school of swordsmenship are: First
      volume (Omote no maki) containing evelen kata and Second volume (Koran no
      maki) containing fourteen kata.
    </p>
    <p>
      As a serious course of study, learning Tamiya Ryu Iaijutsu involves having
      a clear understanding of the concepts known as "Tamiya Nobility" and
      "Tamiya Purity".
    </p>
  </article>
);

export default () => (
  <Sections.Light>
    <h2>What Is Iaijutsu</h2>
    <WhatIsIaijutsu />
    <WhatIsTamiyaRyu />
  </Sections.Light>
);
