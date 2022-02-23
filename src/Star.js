import React from 'react';
import { MultipleTabs } from './utils';

const options = {BIG: 1, SMALL : 2, WHOLEDECIMAL : 3, DECIMAL : 4};
const operations = {MULT: 1, DIV : 2};

function AdditionHome() {
    const [selAdd, setSelAdd] = React.useState(0);

        const tabs = [
          {key: 0, displayName: "Big", displayComponent: <Addition option={options.BIG}  />},
          {key: 1, displayName: "Small", displayComponent: <Addition option={options.SMALL}   />},
          {key: 2, displayName: "Decimal", displayComponent: <Addition option={options.DECIMAL}   />}
        ];
      
      const props = {
        title: "Addition",
        selection: selAdd,
        onClick: setSelAdd,
        buttonClass: "tile3",
        returnButtonClass: "retButton3",
        returnDisplay: `<< All Addition`,
        tabs: tabs
      }
    return(
        <MultipleTabs {...props} />
        );
}

function Addition({option}) {
    let firstNum, secondNum, thirdNum, problemDesc;
    if (option === options.BIG) {
        firstNum = Math.floor(Math.random() * 9999 + 1);
        secondNum = Math.floor(Math.random() * 9999 + 1);
        thirdNum = Math.floor(Math.random() * 999 + 1);
    }
    if (option === options.SMALL) {
        firstNum = Math.floor(Math.random() * 999 + 1);
        secondNum = Math.floor(Math.random() * 99 + 1);
        thirdNum = Math.floor(Math.random() * 99 + 1);
    }
    if (option === options.DECIMAL) {
        firstNum = Math.round((Math.random() * 99 + 1) * 100) / 100;
        secondNum = Math.round((Math.random() * 9 + 1) * 100) / 100;
        thirdNum = Math.round((Math.random() * 9 + 1) * 100) / 100;
    }

    const sum = firstNum + secondNum + thirdNum;
    const [totalMarks, setTotalMarks] = React.useState(0);

    problemDesc = `${firstNum} + ${secondNum} + ${thirdNum} = `;

    return (
        <DisplayProblem heading="Addition" problemDesc={problemDesc} 
            answer={sum} total={totalMarks} setTotal={setTotalMarks}
        />
    );
}

function DivisionHome() {
    const [selDiv, setSelDiv] = React.useState(0);

        const tabs = [
          {key: 0, displayName: "Big", displayComponent: <MultDiv option={options.BIG} op={operations.DIV} />},
          {key: 1, displayName: "Small", displayComponent: <MultDiv option={options.SMALL}  op={operations.DIV} />},
          {key: 2, displayName: "Decimal", displayComponent: <MultDiv option={options.WHOLEDECIMAL}  op={operations.DIV} />}
        ];
      
      const props = {
        title: "Division",
        selection: selDiv,
        onClick: setSelDiv,
        buttonClass: "tile3",
        returnButtonClass: "retButton3",
        returnDisplay: `<< All Division`,
        tabs: tabs
      }
    return(
        <MultipleTabs {...props} />
        );
}

function MultDiv({option, op}) {
    let firstNum, secondNum, heading;
    if (option === options.BIG) {
        firstNum = Math.floor(Math.random() * 99 + 1);
        secondNum = Math.floor(Math.random() * 999 + 1);
        heading = "Big * Medium";
    }
    if (option === options.SMALL) {
        firstNum = Math.floor(Math.random() * 9 + 1);
        secondNum = Math.floor(Math.random() * 999 + 1);
        heading = "Medium * Small";
    }

    if (option === options.WHOLEDECIMAL) {
        firstNum = Math.floor(Math.random() * 99 + 1);
        secondNum = Math.round((Math.random() * 9 + 1) * 100) / 100;
        heading = "Decimal * Whole";
    }    
    if (option === options.DECIMAL) {
        firstNum = Math.floor(Math.random() * 99 + 1);
        secondNum = Math.round((Math.random() * 9 + 1) * 100) / 100;
        heading = "Decimal * Decimal";
    }

    const [totalMarks, setTotalMarks] = React.useState(0);
    const product = Math.round((firstNum * secondNum) * 100) / 100;
    let problemDesc, answer;
    if (op === operations.DIV) {
        heading = heading.replace('*', '÷');
        problemDesc = `${product} ÷ ${firstNum} = `;
        answer = secondNum;
    }
    else {
        problemDesc = `${firstNum} x ${secondNum} = `;
        answer = product;
    }
    
    return(
        <DisplayProblem heading={heading} problemDesc={problemDesc} 
            answer={answer}  total={totalMarks} setTotal={setTotalMarks}
        />
    );

}

function MultiplicationHome() {
    const [selMul, setSelMul] = React.useState(0);

        const tabs = [
          {key: 0, displayName: "Big", displayComponent: <Multiplication option={options.BIG} />},
          {key: 1, displayName: "Small", displayComponent: <Multiplication option={options.SMALL} />},
          {key: 2, displayName: "1 Decimal", displayComponent: <Multiplication option={options.WHOLEDECIMAL} />},
          {key: 3, displayName: "All Decimal", displayComponent: <Multiplication option={options.DECIMAL} />}
        ];
      
      const props = {
          title: "Multiplication",
        selection: selMul,
        onClick: setSelMul,
        buttonClass: "tile3",
        returnButtonClass: "retButton3",
        returnDisplay: `<< All Multiply`,
        tabs: tabs
      }
    return(
        <MultipleTabs {...props} />
        );
}

function Multiplication({option}) {
    let firstNum, secondNum, heading;
    if (option === options.BIG) {
        firstNum = Math.floor(Math.random() * 999 + 1);
        secondNum = Math.floor(Math.random() * 99 + 1);
        heading = "Big Multiply";
}
    if (option === options.SMALL) {
        firstNum = Math.floor(Math.random() * 999 + 1);
        secondNum = Math.floor(Math.random() * 9 + 1);
        heading = "Small Multiply";
    }

    if (option === options.WHOLEDECIMAL) {
        firstNum = Math.floor(Math.random() * 99 + 1);
        secondNum = Math.round((Math.random() * 9 + 1) * 100) / 100;
        heading = "Whole * Decimal";
    }    
    if (option === options.DECIMAL) {
        firstNum = Math.round((Math.random() * 99 + 1) * 100) / 100;
        secondNum = Math.round((Math.random() * 9 + 1) * 100) / 100;
        heading = "Decimal * Decimal";
    }    

    const [totalMarks, setTotalMarks] = React.useState(0);

    const product = firstNum * secondNum;
    
    return(
        <DisplayProblem heading={heading} problemDesc={`${firstNum} x ${secondNum} = `} 
            answer={product}  total={totalMarks} setTotal={setTotalMarks}
        />
    );
}

function DisplayProblem({heading, answer, problemDesc, total, setTotal}) {
    const refAnswer = React.useRef();

    function checkAnswer(event) {
        event.preventDefault();
        if (refAnswer.current.valueAsNumber === answer) {
            setTotal(m => m + 10);
            refAnswer.current.value = '';
        }
    }

    React.useEffect(() => {
        refAnswer.current.focus();
    }
    );

    return (
        <div className="problem">
            <form>
            <label className="subheading">{heading}</label>
        <span className="totals">{`Marks scored : ${total}`}</span>
            <fieldset>
            {problemDesc}
            <input type="number" ref={refAnswer} className="inputNumber"></input>
            <br></br>
            <button type="submit" className="submit" onClick={checkAnswer}>Check</button>
            </fieldset>
            </form>
        </div> 
    )
}

export default function Star() {
    const [selTile, setSelTile] = React.useState(0);

        const tabs = [
          {key: 0, displayName: "Division", displayComponent: <DivisionHome />},
          {key: 1, displayName: "Multiply", displayComponent: <MultiplicationHome />},
          {key: 2, displayName: "Addition", displayComponent: <AdditionHome />}
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
