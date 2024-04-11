import { formatPrice } from 'app/utils/format';
import React from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  TouchableHighlight,
  View,
} from 'react-native';
import AppHeading from '../common/AppHeading/AppHeading';
import AppText from '../common/AppText/AppText';
import styles from './styles';
import CardType from 'app/constants/types/Card';
import colors from 'app/constants/enums/colors';
type Props = {
  card: CardType;
  onPress?: ((event: GestureResponderEvent) => void);
};
const Card = ({ card, onPress }: Props) => {
  const { id, price, thumbnailUrl, title, description } = card;
  return (
    <TouchableHighlight
      key={id}
      style={styles.card_wrapper}
      onPress={onPress}
      underlayColor={colors.white}
    >
      <View style={styles.card}>
        <Image source={thumbnailUrl} style={styles.thumbnail} />
        <View style={styles.content}>
          <AppHeading heading='h4' style={styles.name}>
            {title}
          </AppHeading>
          <AppText style={styles.price}>{formatPrice(price)}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Card;
