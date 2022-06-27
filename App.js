// import './App.css';
import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  View,
} from 'react-native';

import { RadioGroup } from "./RadioGroup";
import { SubmitBtn } from "./SubmitBtn";

function App() {
  const menuState = {
    menus: [
      // first group of radio-buttons
      [
        { id: "101", value: "Vegetarian" },
        { id: "102", value: "Nut allergy" },
        { id: "103", value: "Halal" },
      ],
      // second group of radio-buttons
      [
        { id: "201", value: "Cashew chicken" },
        { id: "202", value: "Sweet and sour pork" },
        { id: "203", value: "Stir fried Tofu" },
        { id: "204", value: "Vegetable fried rice" },
        { id: "205", value: "Pad Thai" },
        { id: "206", value: "Massaman beef" },
      ],
      // third group of radio-buttons
      [
        { id: "301", value: "Peanut sauce" },
        { id: "302", value: "Oyster sauce" },
        { id: "303", value: "Vegetable spring rolls" },
        { id: "304", value: "Steamed rice" },
      ],
    ],
    rules: {
      // 'Vegetarian' is NOT compatible with 'Cashew chicken', 'Sweet and sour pork', 'Massaman beef', 'Oyster sauce'
      101: [201, 202, 206, 302],
      // 'Nut allergy' is NOT compatible with 'Cashew chicken', 'Peanut sauce',
      102: [201, 301],
      // 'Halal' is NOT compatible with 'Sweet and sour pork',
      103: [202],
      // 'Vegetable fried rice' is NOT compatible with 'Steamed rice' (you don't need more rice... carb overload),
      204: [304],
      // 'Pad thai' is NOT compatible with 'Steamed rice' (Pad thai comes with noodles),
      205: [304],
    },
  };

  const { menus } = menuState;
  const [answers, setAnswer] = useState([]);
  const initializeRules = () => new Array(menus.length);
  const [inputRules, setInputRules] = useState(initializeRules());

  useEffect(() => {
    handleResetRules();
  }, [answers]);

  const onSelectMenu = ({ menuIndx, value }) => {
    setAnswer((prevAnswers) => {
      const updatedAnswer = [...prevAnswers];
      const tempAnswers = [...updatedAnswer];
      tempAnswers[menuIndx] = value;
      if (menuIndx === 0) {
        setInputRules(initializeRules());
        return [value];
      }
      return [...tempAnswers];
    });
  };

  const handleResetRules = () => {
    answers.forEach((answerItem, answerIndx) => {
      setInputRules((prevRules) => {
        const { rules, menus } = menuState;
        const disabledInputs = rules[answerItem];
        const tempRules = [...prevRules];
        if (answerIndx + 1 === menus.length) return [...prevRules];
        tempRules[answerIndx + 1] =
          "undefined" === typeof disabledInputs ? [] : disabledInputs;
        return [...tempRules];
      });
    });
  };
  return (
    <SafeAreaView>
      <View style={{ padding: 30 }}>
        {menus.map((menuGroup, menuIndx) => (
          <RadioGroup
            key={menuIndx}
            onSelectMenu={onSelectMenu}
            menuGroup={menuGroup}
            menuIndx={menuIndx}
            inputRules={inputRules}
            answers={answers}
          />
        ))}
        <SubmitBtn isDisabled={!(menus.length === answers.length)} />
      </View>
    </SafeAreaView>

  );
}

export default App;