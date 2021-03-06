import React from "react";
import styled from "styled-components";

const Base = styled.section`
  display: grid;
  grid-template-columns: minmax(25ch, 60ch);
  justify-content: center;
  padding: 3.5rem;

  & > a:last-child {
    justify-self: center;
  }

  & > h1:first-child,
  & > h2:first-child,
  & > h3:first-child,
  & > h4:first-child,
  & > h5:first-child,
  & > h6:first-child {
    margin-bottom: 2em;
  }
`;

const Content = Base.extend`
  background: #fff;
  color: #212121;
`;

const Aside = Base.extend`
  background: #e0e0e0;
  color: #212121;
`;

const Highlight = Base.extend`
  background: var(--dark);
  color: #e0e0e0;
`;

export default { Content, Aside, Highlight };

export const Subsection = styled.div`
  display: grid;
  max-width: 30rem;
  margin: 0 auto 4rem;

  &:last-child {
    margin-bottom: 0;
  }

  & > img,
  & > a:last-child {
    justify-self: center;
  }
`;
