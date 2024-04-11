import { ImageSourcePropType } from 'react-native';

type CardType = {
  id: string | number;
  title: string;
  price: number;
  thumbnailUrl: ImageSourcePropType;
  description?: string;
};
export default CardType;
