import React, { useState } from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import Screen from './components/Screen/Screen';
import ButtonBox from './components/Button/ButtonBox';

const App = () => {
  const [calculation, setCalculation] = useState({
    number: '0',
    question: '0',
  });
  const [result, setResult] = useState(0);

  const decimalHandler = () => {
    setCalculation({
      number: `${calculation.number}.`,
      question: `${calculation.question}.`,
    });
  };

  const clearHandler = (() => {
    setCalculation({
      number: calculation.number.slice(0, -1),
      question: calculation.question.slice(0, -1),
    });
  });

  const clickButtonHandler = ({ value, category }) => {
    switch (category) {
      case 'Decimal': {
        if (calculation.number.slice(-1) !== '.') {
          decimalHandler();
        }
        break;
      }
      case 'Clear': {
        if (calculation.question.slice(-1) !== '0') {
          clearHandler();
        }
        break;
      }
      case 'AllClear': {
        setCalculation({
          number: '0',
          question: '0',
        });
        setResult(0);
        break;
      }
      case 'Percent': {
        const percent = `${parseFloat(calculation.number) / 100}`;
        setCalculation({
          number: percent,
          question: calculation.question.replace(calculation.number, percent),
        });
        break;
      }
      case 'Number': {
        if (result !== 0 && calculation.number === '0') {
          setCalculation({
            number: `${value}`,
            question: `${value}`,
          });
          setResult(0);
        } else
        if (calculation.question === '0') {
          setCalculation({
            number: `${value}`,
            question: `${value}`,
          });
        } else {
          setCalculation({
            number: `${calculation.number}${value}`,
            question: `${calculation.question}${value}`,
          });
        }
        break;
      }
      case 'Operator': {
        // eslint-disable-next-line no-restricted-globals
        if (isNaN(parseInt(calculation.question.slice(-1), 10))) {
          setCalculation({
            number: `${calculation.number.replace(/.$/, value)}`,
            question: `${calculation.question.replace(/.$/, value)}`,
          });
        } else {
          setCalculation({
            number: `${calculation.number}${value}`,
            question: `${calculation.question}${value}`,
          });
        }
        break;
      }
      case 'Equal': {
        // eslint-disable-next-line no-eval
        setResult(eval(calculation.question)); // no recommended using eval()
        setCalculation((prevCalculation) => ({
          ...prevCalculation,
          number: '0',
        }));
        break;
      }
      default: break;
    }
  };

  return (
    <Wrapper
      screen={(
        <Screen
          calculation={calculation.question}
          result={result}
        />
)}
      buttonBox={(
        <ButtonBox
          setCalculation={clickButtonHandler}
        />
)}
    />
  );
};

export default App;
