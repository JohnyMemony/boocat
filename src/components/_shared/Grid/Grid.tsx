import * as React from 'react';
import {Grid as SemGrid, GridColumn, GridRow, SemanticWIDTHS} from 'semantic-ui-react';

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

export const Row = ({children,}: { children: React.ReactNode }) => {
  return (
    <GridRow>{children}</GridRow>
  );
};
