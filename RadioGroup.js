import React from 'react';
import { RadioEl } from "./RadioEl";

import {
  View,
} from 'react-native';

export function RadioGroup(props) {
  const { menuGroup, menuIndx, inputRules, answers, onSelectMenu } = props;
  const handleOnMenuSelect = (value) => {
    onSelectMenu({ menuIndx, value });
  };

  const evalRules = (inputRules, id) => {
    const rules = inputRules.filter(
      (itemInputRules) =>
        Array.isArray(itemInputRules) && -1 !== itemInputRules.indexOf(id)
    );
    return rules.length > 0;
  };

  const evalIfChecked = (answers, menuIndx) => {
    return !("undefined" === typeof answers[menuIndx]);
  };
  return (
    <View key={menuIndx}>
      {menuGroup.map((menuObj, menuItemIndex) => {
        evalIfChecked(answers);
        return (
          <RadioEl
            key={`${menuItemIndex}-what`}
            menuObj={menuObj}
            menuObjIndx={menuItemIndex}
            parentIdx={menuIndx}
            onSelectItem={handleOnMenuSelect}
            disabled={
              0 !== menuIndx
                ? "undefined" === typeof inputRules[menuIndx]
                  ? true
                  : evalRules(inputRules, parseInt(menuObj.id))
                : false
            }
            answers={answers}
          />
        );
      })}
      <View style={{ marginVertical: 10 }} />
    </View>
  );
}
