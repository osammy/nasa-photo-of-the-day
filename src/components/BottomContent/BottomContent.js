import React from "react";
import './bottomContent.css';
import {formatDate} from'../../data';
import Socials from '../Socials/Socials';

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
    <div className="content">
      <p className="silent">{formatDate(date)}</p>
      {/*<p className="silent">{date}</p>*/}
      <h2 className="text-title">{title}</h2>
      <p className="text-body">{explanation}</p>
      <p className="silent">Photographed by {copyright}</p>
      {/*<Socials />*/}
    </div>
  );
}


export default BottomContent;