import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CatsState, getBreedData} from '../../store/cats/cats-store';
import {ApplicationState} from '../../store/models';
import PostContent from '../../components/post/PostContent/PostContent';

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
          <div className="page-content">
            <PostContent data={imageData}/>
          </div>
        </div>
      )}
    </div>
  );
}
