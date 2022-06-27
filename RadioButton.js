import React from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import PropTypes from 'prop-types';

export default function RadioButton({
    onChange,
    isSelected,
    disabled,
    id,
}) {
    return (
        <TouchableOpacity
            id={id}
            style={styles.container}
            disabled={disabled}
            onPress={onChange}
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
        </TouchableOpacity>
    );
}

RadioButton.propTypes = {
    onChange: PropTypes.func.isRequired,
    isSelected: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.any
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