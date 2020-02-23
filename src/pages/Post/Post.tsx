import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CatsState, getBreedData} from '../../store/cats/cats-store';
import {ApplicationState} from '../../store/models';

export default function Post(props: any) {
  const {match} = props;
  const breedId = match.params.id;
  const dispatch = useDispatch();
  const catsState = useSelector<ApplicationState, CatsState>(state => state.rCats);
  const {imageData} = catsState;

  React.useEffect(() => {
    dispatch(getBreedData(breedId));
  }, []);

  return (
    <div className="post">
      {imageData && (
        <div className="container">
          <div className="post__content">
            <h1 className="post__title">Post page</h1>
            <div className="post__image"></div>
          </div>
        </div>
      )}
    </div>
  );
}
