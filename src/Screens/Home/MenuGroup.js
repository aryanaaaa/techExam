import React from 'react';

import {
  Text,
  View,
} from 'react-native';

import { RadioButton } from '../../components';

export default function MenuGroup(props) {
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
          <RadioButton
            key={`${menuObj.id}+${menuItemIndex}`}
            id={`${menuObj.id}-${menuItemIndex}`}
            title={menuObj.value}
            onChange={() => handleOnMenuSelect(menuObj.id)}
            isSelected={answers[menuIndx] === menuObj.id}
            disabled={
              0 !== menuIndx
                ? "undefined" === typeof inputRules[menuIndx]
                  ? true
                  : evalRules(inputRules, parseInt(menuObj.id))
                : false
            }
          />
        );
      })}
      <View style={{ marginVertical: 10 }} />
    </View>
  );
}
