import * as React from 'react';
import {Grid as SemGrid, GridColumn, GridRow, SemanticWIDTHS} from 'semantic-ui-react';

interface RowProps {
  children: React.ReactNode,
  verticalAlign?: "bottom" | "middle" | "top"
}

export const Grid = ({children,}: { children: React.ReactNode }) => {
  return (
    <SemGrid>{children}</SemGrid>
  );
};

export const Col = ({children, lg}: { children: React.ReactNode; lg?: SemanticWIDTHS; }) => {
  return (
    <GridColumn largeScreen={lg}>{children}</GridColumn>
  );
};

export const Row = (props: RowProps) => {
  const {children, verticalAlign} = props;

  return (
    <GridRow verticalAlign={verticalAlign}>{children}</GridRow>
  );
};
