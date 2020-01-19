import * as React from 'react';
import {useDispatch} from 'react-redux';
import ComponentExample from '../../components/ComponentExample/ComponentExample';

export default function PageExample() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({type: 'TEST'});
  };

  return (
    <div>
      <ComponentExample/>
      <button type="button" onClick={handleClick}>reer</button>
    </div>
  );
}
