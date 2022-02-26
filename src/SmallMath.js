import {useState} from 'react';
import { MultipleTabs } from './utils';
import { AdditionHome, OPOptions, SubtractionHome } from './MathOps';

export default function SmallMath() {
    const [selTile, setSelTile] = useState(0);

    const tabs = [
                  {
                    key: 0, displayName: "Addition", 
                    displayComponent: <AdditionHome propsOps={[OPOptions.TINY, OPOptions.LITTLE]} />
                  },
                  {
                    key: 1, displayName: "Subtraction", 
                    displayComponent: <SubtractionHome propsOps={[OPOptions.TINY, OPOptions.LITTLE]} />
                  }                  
                ];

      const props = {
        title: "Sahasra's practice 😎",
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