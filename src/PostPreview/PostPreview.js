import React from 'react';
import './PostPreview.scss';


export default ({onClick, id, name, author, date_published}) => {

  return (
    <div onClick={() => {onClick(id)}} className={"PostPreview"}>
      <div className={"PostPreview__Image"} />
      <div className={"PostPreview__Info"}>
        <span>{date_published}</span>
        <h2>{name}</h2>
        <h3>{author}</h3>
      </div>
    </div>
  )

}