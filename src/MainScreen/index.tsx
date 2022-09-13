import React, {useState} from 'react';
import Basket from '../assets/SVG/trash-969.svg';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const itemData = [
  {subject: 'math', task: 'Стр 4, упр. 24'},
  {subject: 'math', task: 'Стр 4, упр. 24'},
];

const MainScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [isSelected, setSelection] = useState(false);
  const RenderItem = () => {
    return (
      <>
        <View style={styles.itemStyle}>
          <View style={styles.leftWrapper}>
            <View style={styles.checkBoxWrapper}>
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
              />
            </View>
            <View style={styles.subjectWrapper}>
              <Text style={styles.title}>Матем</Text>
              <Text style={styles.text}>Стр 4, упр. 24</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.iconStyle}>
            <View style={styles.wrapperStyle}>
              <Basket width={18} height={18} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.lowLineStyle} />
      </>
    );
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.textButtonStyle}>Показывать все задания</Text>
      </TouchableOpacity>
      <View style={styles.berderLineStyle} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <FlatList
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={itemData}
          renderItem={RenderItem}
        />
      </ScrollView>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.addButtonStyle}>
        <Text style={styles.addTextButtonStyle}>Добавить</Text>
      </TouchableOpacity>

      <Modal
        style={styles.modalWrapper}
        animationType="fade"
        transparent
        visible={modalVisible}>
        <View>
          <View style={styles.modal}>
            <View style={styles.modalBlock}>
              <Text style={styles.modalText}>Добавить предмет</Text>
              <Text style={styles.modalsubText}>
                Укажите заголовок и задание
              </Text>
              <TextInput
                placeholder="Заголовок"
                style={styles.input}
                onChangeText={() => console.log('YYYY')}
                // value={''}
              />
              <TextInput
                placeholder="Задание"
                style={styles.input}
                onChangeText={() => console.log('YYYY')}
                // value={''}
              />

              <View style={styles.lowButtonWrapper}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text>Отмена</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text>Сохранить</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lowButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    alignSelf: 'center',
    marginBottom: 10,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    padding: 10,
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
  },
  modalsubText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 6,
  },
  modalBlock: {
    paddingTop: 10,
    width: '80%',

    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 8,
  },
  modal: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 14,
    padding: 24,
  },

  modalWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  addButtonStyle: {
    width: '80%',
    backgroundColor: '#3396FF',

    borderRadius: 8,
    alignSelf: 'center',
    paddingBottom: 8,
    paddingTop: 8,
    marginBottom: 40,
  },
  addTextButtonStyle: {
    color: '#fFF',
    alignSelf: 'center',
    fontSize: 16,
  },
  lowLineStyle: {
    width: '90%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: '#B9BDC4',
    marginBottom: 16,
  },
  leftWrapper: {
    flexDirection: 'row',
  },
  wrapperStyle: {
    alignSelf: 'center',
  },
  iconStyle: {
    alignSelf: 'center',
    width: 32,
    height: 32,
    backgroundColor: '#F7F6F6',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  subjectWrapper: {
    width: 150,
    marginLeft: 26,
    alignSelf: 'center',
  },
  checkBoxWrapper: {
    width: 30,
    heigth: 30,
    alignSelf: 'center',
  },
  itemStyle: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
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
