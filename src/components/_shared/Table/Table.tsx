import * as React from 'react';
import {Table as SemTable} from 'semantic-ui-react';
import {TableCell} from './models'

interface PropsType {
  rows: TableCell[][]
}

export default function Table(props: PropsType) {
  const {rows} = props;

  return (
    <SemTable celled>
      <SemTable.Body>
        {rows.map((row, index) => {
          return (
            <SemTable.Row key={index}>
              {row.map((cell, index) => (
                <SemTable.Cell key={index} width={8}>{cell.content}</SemTable.Cell>
              ))}
            </SemTable.Row>
          )
        })}
      </SemTable.Body>
    </SemTable>
  );
}
