import * as React from 'react';
import Truncate from 'react-truncate';
import {Card, Image} from 'semantic-ui-react';
import {Breed} from '../../../models/cats';

import './BreedCard.scss';

export default function BreedCard({data, imageUrl}: { data: Breed; imageUrl: string; }) {
  const {name, origin, description} = data;

  return (
    <Card className="bc-breed-card">
      <Image
        className="bc-breed-card__image"
        src={imageUrl}
        wrapped ui={false}/>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="country">{origin}</span>
        </Card.Meta>
        <Card.Description>
          <Truncate lines={3}>{description}</Truncate>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
