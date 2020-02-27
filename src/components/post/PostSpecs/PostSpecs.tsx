import * as React from 'react';
import {Breed} from '../../../models/cats';
import Table from '../../_shared/Table/Table';
import {TableCell} from '../../_shared/Table/models';
import Rating from '../../_shared/Rating/Rating';

interface PropsType {
  data: Breed;
}

export default function PostSpecs(props: PropsType) {
  const {data} = props;

  if (!data) return null;

  const {
    dog_friendly,
    stranger_friendly,
    social_needs,
    shedding_level,
    intelligence,
    health_issues,
    grooming,
    energy_level,
    child_friendly,
    affection_level,
    adaptability,
  } = data;

  const tableRows: TableCell[][] = [
    [{content: 'Dog friendly'}, {content: (<Rating rating={dog_friendly}/>)}],
    [{content: 'Stranger friendly'}, {content: (<Rating rating={stranger_friendly}/>)}],
    [{content: 'Social needs'}, {content: (<Rating rating={social_needs}/>)}],
    [{content: 'Shedding level'}, {content: (<Rating rating={shedding_level}/>)}],
    [{content: 'Intelligence'}, {content: (<Rating rating={intelligence}/>)}],
    [{content: 'Health issues'}, {content: (<Rating rating={health_issues}/>)}],
    [{content: 'Grooming'}, {content: (<Rating rating={grooming}/>)}],
    [{content: 'Energy level'}, {content: (<Rating rating={energy_level}/>)}],
    [{content: 'Child friendly'}, {content: (<Rating rating={child_friendly}/>)}],
    [{content: 'Affection level'}, {content: (<Rating rating={affection_level}/>)}],
    [{content: 'Adaptivity'}, {content: (<Rating rating={adaptability}/>)}],
  ];

  return (
    <div className="post-specs">
      <Table rows={tableRows}/>
    </div>
  )
}
