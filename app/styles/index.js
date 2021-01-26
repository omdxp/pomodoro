import {StyleSheet} from 'react-native';
import {Colors} from './colors';

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: Colors.mainColorDark,
    fontWeight: '700',
  },
  subTitle: {
    fontSize: 35,
    color: Colors.mainColor,
    fontWeight: '400',
  },
  paragraph: {
    fontSize: 20,
    color: Colors.black,
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
