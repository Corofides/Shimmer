import React from 'react';
import {DateTime} from 'luxon';
import './PostPreview.scss';
import usePost from '../../Hooks/usePosts';
import useSettings from '../../Hooks/useSettings';
import { css } from 'glamor';


export default ({onClick = (id) => {}, id, ...props}) => {

  const {getPost, loading} = usePost();
  const {settings} = useSettings();


  console.log("Id", id);

  if (loading) {
    return (
      <div>
        Loading
      </div>
    )
  }

  const postPreviewRule = css({
    "background-color": settings['brand-secondary-bg'],
    "cursor": "pointer",
    "display": "flex",
    "flex-direction": "row",
    "min-height": "150px",
  });

  const imageRule = css({
    "background-color": settings['dark-bg'],
    "position": "relative",
    "min-width": "50%",
  });

  const subTextRule = css({
    "color": settings["brand-secondary-text"],
    "font-size": "14px;"
  });

  const titleRule = css({
    "color": settings['brand-secondary-text'],
    "margin": "auto 0 0 0",
    "font-size": "16px",
  });

  const authorRule = css({
    "margin-bottom": 0,
    "margin-top": 0,
  });

  const {name, author, date_published, image} = getPost(id);

  console.log("PostImage", image);

  const dateTime = DateTime.fromISO(date_published);

  return (
    <a href={"/Shimmer#posts/" + id} {...props} {...postPreviewRule} onClick={() => {onClick(id)}} className={"PostPreview"}>
      {image ? <div {...imageRule} className={"PostPreview__Image"} /> : null}
      <div className={"PostPreview__Info"}>
        <span {...subTextRule} className={"PostPreview__Published"}>{dateTime.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}</span>
        <h2 {...titleRule} className={"PostPreview__Title"}>{name}</h2>
        <h3 {...subTextRule} {...authorRule} className={"PostPreview__Author"}>By {author}</h3>
      </div>
    </a>
  )

}