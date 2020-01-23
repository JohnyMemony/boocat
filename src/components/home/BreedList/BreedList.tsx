import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CatsState, getBreeds} from '../../../store/cats/cats-store';
import {Grid, Row, Col} from '../../_shared/Grid/Grid';
import BreedCard from '../BreedCard/BreedCard';
import {ApplicationState} from '../../../store/models';
import {LocalState} from '../../../store/local/local-store';

export default function BreedList() {
  const dispatch = useDispatch();
  const catsState = useSelector<ApplicationState, CatsState>(state => state.rCats);
  const localState = useSelector<ApplicationState, LocalState>(state => state.rLocalData);
  const {breedsPhotos} = localState;

  React.useEffect(() => {
    dispatch(getBreeds());
  }, []);

  const renderCards = () => {
    return catsState.breeds.map((breed, index: number) => {
      const imageUrl = breedsPhotos[index].url;

      return (
        <Col lg="4" key={breed.id}>
          <BreedCard data={breed} imageUrl={imageUrl}/>
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
