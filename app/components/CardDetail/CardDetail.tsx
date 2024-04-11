import CardType from 'app/constants/types/Card';
import { formatPrice } from 'app/utils/format';
import React from 'react';
import { Image, View } from 'react-native';
import AppHeading from '../common/AppHeading/AppHeading';
import AppText from '../common/AppText/AppText';
import styles from './styles';
import AuthorType from 'app/constants/types/Author';
import AuthorInfo from '../AuthorInfo/AuthorInfo';

type Props = {
  card: CardType;
  author: AuthorType;
};

const CardDetail = (props: Props) => {
  const { card, author } = props;
  return (
    <View style={styles.wrapper}>
      {/* image */}
      <Image source={card.thumbnailUrl} alt={card.title} style={styles.image} />

      {/* content */}
      <View style={styles.content_wrapper}>
        <AppHeading heading='h3' style={styles.title}>
          {card.title}
        </AppHeading>
        <AppText style={styles.price}>{formatPrice(card.price)}</AppText>
      </View>

      {/* author info */}
      <AuthorInfo author={author} />
    </View>
  );
};

export default CardDetail;
