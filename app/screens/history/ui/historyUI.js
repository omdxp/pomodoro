// import react native
import React from 'react';
import {Text, View, FlatList} from 'react-native';

// import history functions
import {dummyData} from '../functions';

// import styles
import {screenStyles, textStyles} from '../../../styles';

// export history UI
export default function HistoryUI() {
  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.column}>
        <FlatList
          data={dummyData}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Text style={textStyles.paragraph}>
              {item.name} - {item.name}
            </Text>
          )}
        />
      </View>
    </View>
  );
}
