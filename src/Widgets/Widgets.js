import React from 'react';
import Header from './Header';
import Text from './Text';
import PostPreview from './PostPreview';

const Widgets = ({Cmp, children = null, ...other}) => {

  const widgetComponents = {
    "Header": Header,
    "Text": Text,
    "PostPreview": PostPreview,
  };

  if (!widgetComponents[Cmp]) {
    return (
      <strong>Could not render element</strong>
    );
  }

  console.log("Widget", Cmp, "props", other);

  return React.createElement(widgetComponents[Cmp], other, children)

};

export default Widgets;