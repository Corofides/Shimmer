import React from 'react';
import {DateTime} from 'luxon';
import './PostPreview.scss';
import usePost from '../../Hooks/usePosts';
import Loading from './Views/Loading'
import Loaded from './Views/Loaded';


export default ({onClick = (id) => {}, id, ...props}) => {

  const {getPost, loading} = usePost();

  if (loading) {
    return (
      <Loading />
    );

  }

  const {name, author, date_published, image} = getPost(id);
  const dateTime = DateTime.fromISO(date_published);
  const published = dateTime.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);

  return (
    <Loaded name={name} author={author} published={published} image={image} {...props} />
  )



}