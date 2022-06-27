import React from 'react';
import {
    Button,
    TouchableOpacity,
    Text
} from 'react-native';

export function SubmitBtn({ isDisabled }) {
    return (
        <TouchableOpacity
            disabled={isDisabled}
            underlayColor='#fff'
            style={{ backgroundColor: isDisabled ? 'gray' : 'red', alignSelf: 'center', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20 }}>
            <Text style={{ color: 'white' }}>Submit</Text>
        </TouchableOpacity>
    )
}