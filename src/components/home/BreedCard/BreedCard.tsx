import * as React from 'react';
import Truncate from 'react-truncate';
import {Link} from 'react-router-dom';
import {Card, Image} from 'semantic-ui-react';
import {Breed} from '../../../models/cats';
import {constants} from '../../../constants';
import {buildRoute} from '../../../configs/routes';

import './BreedCard.scss';

const {URLS} = constants;

export default function BreedCard({data, imageUrl}: { data: Breed; imageUrl: string; }) {
  const {name, origin, description, id} = data;
  const postPageUrl = buildRoute(URLS.POST, id);

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
      <Card.Content extra>
        <Link to={postPageUrl}>Read more</Link>
      </Card.Content>
    </Card>
  );
}
