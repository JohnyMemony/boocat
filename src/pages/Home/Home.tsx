import * as React from 'react';
import {useDispatch} from 'react-redux';
import ComponentExample from '../../components/ComponentExample/ComponentExample';
import {getBreeds} from '../../store/cats/cats-store';

export default function Home() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBreeds());
  }, []);

  return (
    <div>
      <ComponentExample/>
    </div>
  );
}
