import React from 'react';
import Header from './Header';
import Text from './Text';
import PostPreview from './PostPreview';
import Readme from './Readme';
import { css } from 'glamor';

const Widgets = ({Cmp, children = null, colPos = 1, colSpan = 1, ...other}) => {

  console.log("Widgets", Cmp, colPos, colSpan);

  let widgetRule = css({
    'grid-column': colPos + " / span " + colSpan
  });

  const widgetComponents = {
    "Header": Header,
    "Text": Text,
    "PostPreview": PostPreview,
    "Readme": Readme,
  };

  if (!widgetComponents[Cmp]) {
    return (
      <strong>Could not render element</strong>
    );
  }

  return (React.createElement(widgetComponents[Cmp], {...other, ...widgetRule}, children))

};

export default Widgets;