import * as React from 'react';
import PostContentBlock from '../PostContentBlock/PostContentBlock';
import PostSpecs from '../PostSpecs/PostSpecs';
import {CatImage} from '../../../models/cats';

import './PostContent.scss';

interface PropsType {
  data: CatImage;
}

export default function PostContent(props: PropsType) {
  const {data} = props;

  if (!data) return null;

  const {url, breeds} = data;
  const [breedData] = breeds;
  const {name, description, temperament, origin, life_span} = breedData;

  return (
    <div className="post-content">
      <div className="post-content__head">
        <h1 className="post-content__title">{name}</h1>
        <div className="post-content__image">
          <img src={url} alt={name}/>
        </div>
      </div>
      <div className="post-content__body">
        <PostContentBlock name="Country" content={origin}/>
        <PostContentBlock name="Description" content={description}/>
        <PostContentBlock name="Temperament" content={temperament}/>
        <PostContentBlock name="Life span" content={life_span}/>
        <PostSpecs data={breedData} />
      </div>
    </div>
  );
}
