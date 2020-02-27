import * as React from 'react';

import './PostContentBlock.scss';

interface PropsType {
  name: string;
  content: string;
}

export default function PostContentBlock(props: PropsType) {
  const {name, content} = props;

  return (
    <div className="pc-block">
      <div className="pc-block__name">
        <b>{name}:</b>
      </div>
      <div className="pc-block__content">{content}</div>
    </div>
  );
}
