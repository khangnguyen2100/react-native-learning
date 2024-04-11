import React from 'react';
import { Image, View } from 'react-native';
import AppHeading from '../common/AppHeading/AppHeading';
import AppText from '../common/AppText/AppText';
import styles from './styles';
import AuthorType from 'app/constants/types/Author';

type Props = {
  author: AuthorType;
};

const AuthorInfo = ({ author }: Props) => {
  return (
    <View style={styles.author_wrapper}>
      <Image
        source={author.avatar}
        alt={author.name}
        style={styles.author_avatar}
      />
      <View style={styles.author_content_wrapper}>
        <AppHeading style={styles.author_name} heading='h4'>
          {author.name}
        </AppHeading>
        <AppText style={styles.author_items_count}>
          {author.itemsCount} Listings
        </AppText>
      </View>
    </View>
  );
};

export default AuthorInfo;
