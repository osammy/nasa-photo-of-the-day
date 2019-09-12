import React from "react";
import "./bottomContent.css";
import { formatDate } from "../../data";
import styled from "styled-components";
import "./bottomContent.css";
import Skeleton from 'react-skeleton-loader';

// import Socials from '../Socials/Socials';

const BottomComponent = styled.div`
  .silent {
    color: #999;
    letter-spacing: 0.1em;
    margin-top: 20px;
    /*font-size:1.5em;*/
  }

  .text-title {
    font-weight: bold;
    letter-spacing: 0.1em;
    font-size: 1.7rem;
  }

  .text-body {
    word-spacing: 0.1em;
  }

  p,
  h2 {
    padding: 10px 0;
    /*font-size:1.5em;*/
  }
`;

function BottomContent({
  explanation,
  media_type,
  url,
  hdUrl,
  date,
  title,
  copyright
}) {
  return (
    <BottomComponent className="content">
      <p className="silent">{formatDate(date) || <Skeleton width="300px" color="#ccc" />}</p>
      {/*<p className="silent">{date}</p>*/}
      <h2 className="text-title">{title || <Skeleton width="450px" color="#ccc" />}</h2>
      <p className="text-body">{explanation || <Skeleton width="650px" color="#ccc" widthRandomness={0.01} count={4} />}</p>
      <p className="silent">Photographed by {copyright || <Skeleton width="250px" color="#ccc" />}</p>
      {/*<Socials />*/}
    </BottomComponent>
  );
}

export default BottomContent;
