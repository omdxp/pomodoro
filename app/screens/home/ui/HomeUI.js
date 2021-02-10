import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {
  homeStyles,
  screenStyles,
  textStyles,
  timerStyles,
} from '../../../styles';
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';
import Button from '../../../components/button';

export default function Home() {
  // states
  const [timerStart, setTimerStart] = useState(false);
  const [stopwatchStart, setStopwatchStart] = useState(false);
  const [totalDuration, setTotalDuration] = useState(1500000);
  const [timerReset, setTimerReset] = useState(false);
  const [stopwatchReset, setStopwatchReset] = useState(false);

  // booleans
  const [isIn25Min, setIsIn25Min] = useState(true);
  console.log('isIn25Min:', isIn25Min);
  console.log('totalDuration:', totalDuration);

  // timer functions
  const toggleTimer = () => {
    setTimerStart(!timerStart);
    setTimerReset(false);
  };

  const resetTimer = () => {
    setTimerStart(false);
    setTimerReset(true);
  };

  // stopwatch functions
  const toggleStopwatch = () => {
    setStopwatchStart(!stopwatchStart);
    setStopwatchReset(false);
  };

  const resetStopwatch = () => {
    setStopwatchStart(false);
    setStopwatchReset(true);
  };

  // get formatted time
  const getFormattedTime = (time) => {
    this.currentTime = time;
  };

  // this function handles the completion of the timeout
  useEffect(() => {
    if (isIn25Min) {
      setTotalDuration(1500000);
    } else {
      setTotalDuration(300000);
    }
    resetTimer();
  }, [isIn25Min]);
  const handleTimerComplete = () => {
    setIsIn25Min(!isIn25Min);
  };

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.head}>
        <Text style={textStyles.title}>Pomodoro</Text>
        <Text style={textStyles.subTitle}>Start your journey!</Text>
      </View>

      <ImageBackground
        source={{
          uri:
            'https://mir-s3-cdn-cf.behance.net/project_modules/disp/496ecb14589707.562865d064f9e.png',
        }}
        style={[homeStyles.imageBackgournd, homeStyles.body]}
        imageStyle={homeStyles.imageBackgourndBorders}>
        <ScrollView>
          <View style={screenStyles.center}>
            <Timer
              totalDuration={totalDuration}
              start={timerStart}
              reset={timerReset}
              options={timerStyles}
              handleFinish={handleTimerComplete}
              getTime={getFormattedTime}
            />
            <Button
              title={!timerStart ? 'Start' : 'Stop'}
              onPress={toggleTimer}
            />
            <Button title={'Reset'} onPress={resetTimer} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
