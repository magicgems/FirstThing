import React from 'react';
import { MultipleTabs } from './utils';
import { AdditionHome, MultiplicationHome, DivisionHome, OPOptions } from './MathOps';

export default function Star() {
    const [selTile, setSelTile] = React.useState(0);

    const tabs = [
                  {
                    key: 0, displayName: "Division", 
                    displayComponent: <DivisionHome propsOps={[OPOptions.BIG, OPOptions.SMALL, OPOptions.WHOLEDECIMAL]} />
                  },
                  {
                    key: 1, displayName: "Multiply", 
                    displayComponent: <MultiplicationHome propsOps={[OPOptions.BIG, OPOptions.SMALL, OPOptions.DECIMAL, OPOptions.WHOLEDECIMAL]} />
                  },
                  {
                    key: 2, displayName: "Addition", 
                    displayComponent: <AdditionHome propsOps={[OPOptions.BIG, OPOptions.SMALL, OPOptions.DECIMAL]} />
                  }
                ];

      const props = {
        title: "Akshara's practice 💯",
        selection: selTile,
        onClick: setSelTile,
        buttonClass: "tile2",
        returnButtonClass: "retButton2",
        returnDisplay: `<< All Practice`,
        tabs: tabs
      }
    return(
        <MultipleTabs {...props} />
        );
}
