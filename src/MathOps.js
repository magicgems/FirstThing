import React from 'react';
import { MultipleTabs } from './utils';

export const OPOptions = {BIG: 0, SMALL : 1, WHOLEDECIMAL : 2, DECIMAL : 3, TINY: 4, LITTLE: 5};
const OPOptionNames = ["Big", "Small", "1 Decimal", "All Decimals", "Tiny", "Little"];
const OPTypes = {ADD : 0, SUB: 1, MULT: 2, DIV : 3};

export function AdditionHome({propsOps}) {
    const [selAdd, setSelAdd] = React.useState(0);

        let tabs = [];
        for (let option of propsOps) {
            const item = {
                            key : option, 
                            displayName : OPOptionNames[option],
                            displayComponent: <AddSub option={option} op={OPTypes.ADD} />
                         }
            tabs.push(item);
        }

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

export function SubtractionHome({propsOps}) {
    const [selSub, setSelSub] = React.useState(0);

        let tabs = [];
        for (let option of propsOps) {
            const item = {
                            key : option, 
                            displayName : OPOptionNames[option],
                            displayComponent: <AddSub option={option} op={OPTypes.SUB} />
                         }
            tabs.push(item);
        }

      const props = {
        title: "Subtraction",
        selection: selSub,
        onClick: setSelSub,
        buttonClass: "tile3",
        returnButtonClass: "retButton3",
        returnDisplay: `<< All Subtraction`,
        tabs: tabs
      }
    return(
        <MultipleTabs {...props} />
        );
}

function AddSub({option, op}) {
    let firstNum, secondNum, thirdNum, problemDesc;
    if (option === OPOptions.BIG) {
        firstNum = Math.floor(Math.random() * 9999 + 1);
        secondNum = Math.floor(Math.random() * 9999 + 1);
        thirdNum = Math.floor(Math.random() * 999 + 1);
    }
    if (option === OPOptions.SMALL) {
        firstNum = Math.floor(Math.random() * 999 + 1);
        secondNum = Math.floor(Math.random() * 99 + 1);
        thirdNum = Math.floor(Math.random() * 99 + 1);
    }
    if (option === OPOptions.DECIMAL) {
        firstNum = Math.round((Math.random() * 99 + 1) * 100) / 100;
        secondNum = Math.round((Math.random() * 9 + 1) * 100) / 100;
        thirdNum = Math.round((Math.random() * 9 + 1) * 100) / 100;
    }
    if (option === OPOptions.TINY) {
        firstNum = Math.floor(Math.random() * 9 + 1) + Math.floor(Math.random() * 9 + 1);
        secondNum = Math.floor(Math.random() * 9 + 1) + Math.floor(Math.random() * 9 + 1);
    }
    if (option === OPOptions.LITTLE) {
        firstNum = Math.floor(Math.random() * 99 + 1);
        secondNum = Math.floor(Math.random() * 99 + 1);
    }

    const sum = firstNum + secondNum + (thirdNum?thirdNum:0);
    const [totalMarks, setTotalMarks] = React.useState(0);

    let answer, heading;
    if (op === OPTypes.SUB) {
        problemDesc = `${sum} - ${firstNum} = `;
        answer = secondNum;
        heading = "Addition";
    }
    else {
        problemDesc = `${firstNum} + ${secondNum} ${thirdNum ? ' + ' + thirdNum : ''} = `;
        answer = sum;
        heading = "Subtraction";
    }

    return (
        <DisplayProblem heading={heading} problemDesc={problemDesc} 
            answer={answer} total={totalMarks} setTotal={setTotalMarks}
        />
    );
}

export function DivisionHome({propsOps}) {
    const [selDiv, setSelDiv] = React.useState(0);

    let tabs = [];
    for (let option of propsOps) {
        const item = {
                        key : option, 
                        displayName : OPOptionNames[option],
                        displayComponent: <MultDiv option={option} op={OPTypes.DIV} />
                     }
        tabs.push(item);
    }

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
    if (option === OPOptions.BIG) {
        firstNum = Math.floor(Math.random() * 99 + 1);
        secondNum = Math.floor(Math.random() * 999 + 1);
        heading = "Big * Medium";
    }
    if (option === OPOptions.SMALL) {
        firstNum = Math.floor(Math.random() * 9 + 1);
        secondNum = Math.floor(Math.random() * 999 + 1);
        heading = "Medium * Small";
    }

    if (option === OPOptions.WHOLEDECIMAL) {
        firstNum = Math.floor(Math.random() * 99 + 1);
        secondNum = Math.round((Math.random() * 9 + 1) * 100) / 100;
        heading = "Decimal * Whole";
    }    
    if (option === OPOptions.DECIMAL) {
        firstNum = Math.round((Math.random() * 9 + 1) * 100) / 100;
        secondNum = Math.round((Math.random() * 9 + 1) * 100) / 100;
        heading = "Decimal * Decimal";
    }

    const [totalMarks, setTotalMarks] = React.useState(0);
    const product = Math.round((firstNum * secondNum) * 100) / 100;
    let problemDesc, answer;
    if (op === OPTypes.DIV) {
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

export function MultiplicationHome({propsOps}) {
    const [selMul, setSelMul] = React.useState(0);

    let tabs = [];
    for (let option of propsOps) {
        const item = {
                        key : option, 
                        displayName : OPOptionNames[option],
                        displayComponent: <MultDiv option={option} op={OPTypes.MULT} />
                     }
        tabs.push(item);
    }

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

// function Multiplication({option}) {
//     let firstNum, secondNum, heading;
//     if (option === OPOptions.BIG) {
//         firstNum = Math.floor(Math.random() * 999 + 1);
//         secondNum = Math.floor(Math.random() * 99 + 1);
//         heading = "Big Multiply";
// }
//     if (option === OPOptions.SMALL) {
//         firstNum = Math.floor(Math.random() * 999 + 1);
//         secondNum = Math.floor(Math.random() * 9 + 1);
//         heading = "Small Multiply";
//     }

//     if (option === OPOptions.WHOLEDECIMAL) {
//         firstNum = Math.floor(Math.random() * 99 + 1);
//         secondNum = Math.round((Math.random() * 9 + 1) * 100) / 100;
//         heading = "Whole * Decimal";
//     }    
//     if (option === OPOptions.DECIMAL) {
//         firstNum = Math.round((Math.random() * 99 + 1) * 100) / 100;
//         secondNum = Math.round((Math.random() * 9 + 1) * 100) / 100;
//         heading = "Decimal * Decimal";
//     }    

//     const [totalMarks, setTotalMarks] = React.useState(0);

//     const product = firstNum * secondNum;
    
//     return(
//         <DisplayProblem heading={heading} problemDesc={`${firstNum} x ${secondNum} = `} 
//             answer={product}  total={totalMarks} setTotal={setTotalMarks}
//         />
//     );
// }

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
