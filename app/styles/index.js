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
    color: Colors.white,
  },
  textButton: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-SemiBold',
    color: Colors.mainColor,
  },
  center: {
    textAlign: 'center',
  },
  errorText: {
    color: Colors.error,
    fontSize: 17,
    fontFamily: 'TitilliumWeb-Regular',
  },
});

export const buttonStyles = StyleSheet.create({
  container: {
    width: '75%',
    height: 60,
    margin: 10,
    padding: 10,
    backgroundColor: Colors.mainColor,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const textInputStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 30,
    fontFamily: 'TitilliumWeb-SemiBold',
  },
});

export const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.grey,
  },
  column: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  head: {
    flex: 1,
    padding: 10,
  },
  body: {
    flex: 3,
    padding: 10,
    backgroundColor: Colors.mainColor,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  bodyText: {
    ...textStyles.paragraph,
    color: Colors.white,
    fontSize: 24,
  },
});
