import React from 'react';
import './PostPreview.scss';


export default ({name, author, date_published}) => {

  return (
    <div className={"PostPreview"}>
      <span>{date_published}</span>
      <h2>{name}</h2>
      <h3>{author}</h3>
    </div>
  )

}