import { Alert } from 'react-native';

import Share from 'react-native-share';

const SharePosters = async ({ title, message, url, subject }) => {
  const shareOptions = { title, message, url, subject, type: 'jpg' };

  try {
    await Share.open(shareOptions)
    .then((shareResponse => console.log('ShareResponse : ', shareResponse)))
    .catch(console.error);
  } catch (error) {
    Alert.alert({ title: 'Error sharing:', message: error.message });
  };
};

export default SharePosters;