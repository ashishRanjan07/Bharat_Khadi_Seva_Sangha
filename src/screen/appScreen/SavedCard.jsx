import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../utils/AppColor';
import GiftCard from '../../components/GiftCard';
import {responsive} from '../../utils/Responsive';
import ListHeader from '../../components/ListHeader';
import CardInfo from '../../components/CardInfo';
import SavedUPIInfo from '../../components/SavedUPIInfo';

const SavedCard = () => {
  return (
    <>
      <ListHeader title={'Save Gift and card Info'} />
      <ScrollView style={styles.main}>
        <StatusBar barStyle={'dark-content'} backgroundColor={AppColor.white} />
        {/* Gift Card Options */}
        <View style={styles.contentHolder}>
          <GiftCard />
          <CardInfo/>
          <SavedUPIInfo/>
        </View>
      </ScrollView>
    </>
  );
};

export default SavedCard;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  contentHolder: {
    marginVertical: responsive(10),
    padding: responsive(10),
    width: '100%',
    alignSelf: 'center',
    gap:responsive(20)
  },
});
