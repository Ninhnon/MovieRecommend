import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../constants/responsive';
import CUSTOM_COLOR from '../../constants/colors';
import Tag from '../Cards/Tag';
const SegmentControl = props => {
  const [selectedValue, setSelectedValue] = useState(props.values[0]);
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        {props.values.map(value => (
          <TouchableOpacity
            activeOpacity={0.6}
            key={value}
            onPress={() => setSelectedValue(value)}>
            <View
              style={[
                styles.tag,
                selectedValue === value && styles.selectedView,
              ]}>
              <Text
                style={[
                  styles.line,
                  selectedValue === value && styles.selected,
                ]}>
                {value}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 42,
    marginTop: '1.5%',
    flexDirection: 'row',
    marginBottom: '3%',
  },
  tag: {
    height: 24,
    width: 60,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: CUSTOM_COLOR.White,
    margin: 8,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    fontFamily: FONT_FAMILY.Semibold,
    fontSize: scale(12),
    alignSelf: 'center',
    color: CUSTOM_COLOR.InkGray,
  },
  selected: {
    color: CUSTOM_COLOR.White,
  },
  selectedView: {
    backgroundColor: '#E82251',
  },
});
export default SegmentControl;
