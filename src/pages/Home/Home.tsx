import * as React from 'react';
import BreedList from '../../components/home/BreedList/BreedList';

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="page-content">
          <BreedList/>
        </div>
      </div>
    </div>
  );
}
