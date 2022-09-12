import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const MainScreen = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textButtonStyle}>Показывать все задания</Text>
        </TouchableOpacity>
        <View style={styles.berderLineStyle} />
        <View style={styles.itemStyle}>
          <CheckBox
            lineWidth={1}
            animationDuration={0.5}
            onCheckColor={'#fff'}
            onFillColor={'#19C149'}
            tintColors={{true: '#000'}}
            onTintColor={'#19C149'}
            disabled={false}
            onAnimationType={'bounce'}
            offAnimationType={'bounce'}
            boxType={'square'}
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    checkbox: {
      width: 30,
      heigth: 30,
      alignSelf: "center",
    },
  itemStyle: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  berderLineStyle: {
    width: '100%',
    height: 1,
    backgroundColor: '#B9BDC4',
    marginBottom: 20,
  },
  buttonStyle: {
    width: '80%',
    borderColor: '#3396FF',
    borderWidth: 2,
    borderRadius: 8,
    alignSelf: 'center',
    paddingBottom: 8,
    paddingTop: 8,
    marginBottom: 40,
  },
  textButtonStyle: {
    color: '#3396FF',
    alignSelf: 'center',
    fontSize: 16,
  },
});

export default MainScreen;
