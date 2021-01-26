import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Button({title, onPress, disabled, style}) {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={style}>
            <View style={}>
                <Text style={}></Text>
                </View>
        </TouchableOpacity>
    )
}
