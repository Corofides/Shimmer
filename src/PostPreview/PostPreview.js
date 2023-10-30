import React from 'react';
import './PostPreview.scss';


export default ({onClick, key, name, author, date_published}) => {

  return (
    <div onClick={() => {onClick(key)}} className={"PostPreview"}>
      <span>{date_published}</span>
      <h2>{name}</h2>
      <h3>{author}</h3>
    </div>
  )

}