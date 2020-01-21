import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CatsState, getBreeds} from '../../../store/cats/cats-store';
import {Grid, Row, Col} from '../../_shared/Grid/Grid';
import BreedCard from '../BreedCard/BreedCard';
import {ApplicationState} from '../../../store/models';

export default function BreedList() {
  const dispatch = useDispatch();
  const catsState = useSelector<ApplicationState, CatsState>(state => state.cats);

  React.useEffect(() => {
    dispatch(getBreeds());
  }, []);

  const renderCards = () => {
    return catsState.breeds.map((breed) => {
      return (
        <Col lg="4" key={breed.id}>
          <BreedCard data={breed}/>
        </Col>
      )
    });
  };

  return (
    <Grid>
      <Row>
        {renderCards()}
      </Row>
    </Grid>
  );
}
