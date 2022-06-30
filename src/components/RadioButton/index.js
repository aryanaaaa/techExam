import React from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from 'react-native';

import PropTypes from 'prop-types';

export default function RadioButton({
    onChange,
    isSelected,
    disabled,
    id,
    title,
}) {

    const handleOnChange = (value) => {
        onChange(value)
    }

    return (
        <TouchableOpacity
            key={id}
            style={styles.container}
            disabled={disabled}
            onPress={handleOnChange}
        >
            <View
                style={[styles.outerCircle, { borderColor: disabled ? 'black' : 'red', }]}
            >
                <View style={{
                    height: 10,
                    width: 10,
                    borderRadius: 10,
                    backgroundColor: 'red',
                    opacity: isSelected ? 1 : 0

                }}>
                </View>
            </View>
            <Text style={{ marginLeft: 10 }}>{title}</Text>
        </TouchableOpacity>
    );
}

RadioButton.propTypes = {
    onChange: PropTypes.func.isRequired,
    isSelected: PropTypes.bool,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    id: PropTypes.any,
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
    },
    outerCircle: {
        height: 20,
        width: 20,
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
});