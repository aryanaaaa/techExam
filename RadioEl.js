import React from 'react';

import {
  Text,
  View,
} from 'react-native';

import RadioButton from './RadioButton';

export function RadioEl({ menuObj, menuObjIndx, parentIdx, onSelectItem, disabled, answers }) {
const handleOnChange = (value) => {
    onSelectItem(value)
}

  return ( 
    <View key={`${menuObj.id}-${menuObjIndx}-el`} style={{flexDirection:'row', alignItems:'center', }}>
      <RadioButton
        label={`menu-${parentIdx}`}
        id={`${menuObj.id}-${menuObjIndx}`}
        onChange={() => handleOnChange(menuObj.id)}
        disabled={disabled}
        isSelected={answers[parentIdx] === menuObj.id}
      />
      <Text style={{marginLeft:10}}>{menuObj.value}</Text>

    </View>
  );
}


