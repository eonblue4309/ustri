import React from "react";
import styled from "styled-components";
import Card from "../../components/styled/Card";
import Schedule from "./Schedule";
import Contact from "./Contact";
import Introduction from "./Introduction";

const Announcement = Card.extend`
  margin-bottom: 2rem;
`;

const Offer = () => (
  <Announcement>
    <h3>Announcement</h3>
    <p>
      The USTRI Honbu dojo is currently offering a free introductory month of
      training. No contracts are required. Please contact Gensui sensei for more
      information.
    </p>
  </Announcement>
);

export default () => (
  <div>
    <Introduction />
    <Offer />
    <Schedule />
    <Contact />
  </div>
);
