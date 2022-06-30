import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';

export default function Button({
    isDisabled,
    title
}) {

    const stateStyle = isDisabled ? styles.disabled : styles.enabled

    return (
        <TouchableOpacity
            disabled={isDisabled}
            underlayColor='#fff'
            style={[styles.container, stateStyle]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    isDisabled: PropTypes.bool,
    title: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    enabled: {
        backgroundColor: 'red'
    },
    disabled: {
        backgroundColor: 'gray'
    },
    title: {
        color: 'white'
    }
});