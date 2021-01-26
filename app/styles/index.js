import {StyleSheet} from 'react-native';
import {Colors} from './colors';

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontFamily: 'TitilliumWeb-SemiBold',
    color: Colors.mainColorDark,
  },
  subTitle: {
    fontSize: 35,
    fontFamily: 'TitilliumWeb-Regular',
    color: Colors.mainColor,
  },
  paragraph: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Light',
    color: Colors.black,
  },
  button: {
    fontSize: 30,
    fontFamily: 'TitilliumWeb-ExtraLight',
  },
});

export const buttonStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
    margin: 10,
    padding: 10,
    backgroundColor: Colors.mainColor,
    borderRadius: 10,
  },
});

export const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.grey,
  },
  row: {
    flexDirection: 'row',
  },
});
