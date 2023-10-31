import React from 'react';
import './PostPreview.scss';


export default ({onClick, id, name, author, date_published}) => {

  return (
    <div onClick={() => {onClick(id)}} className={"PostPreview"}>
      <div className={"PostPreview__Image"} />
      <div className={"PostPreview__Info"}>
        <span className={"PostPreview__Published"}>{date_published}</span>
        <h2 className={"PostPreview__Title"}>{name}</h2>
        <h3 className={"PostPreview__Author"}>By {author}</h3>
      </div>
    </div>
  )

}