import * as React from 'react';
import {Rating as SeRating} from 'semantic-ui-react';

interface PropsType {
  rating: number;
  maxRating?: number;
}

export default function Rating({rating, maxRating = 5}: PropsType) {
  return (
    <SeRating icon='star' disabled rating={rating} maxRating={maxRating}/>
  );
}
