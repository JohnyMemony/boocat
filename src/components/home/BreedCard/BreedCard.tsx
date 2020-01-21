import * as React from 'react';
import Truncate from 'react-truncate';
import {Card, Icon, Image} from 'semantic-ui-react';
import {Breed} from '../../../models/cats';

import './BreedCard.scss';

export default function BreedCard({data}: { data: Breed }) {
  const {name, origin, description} = data;

  return (
    <Card className="bc-breed-card">
      <Image
        src='https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=500'
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
