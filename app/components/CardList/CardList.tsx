import CardType from 'app/constants/types/Card';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import Card from '../Card/Card';
import styles from './styles';

const cardsInitData: CardType[] = [
  {
    id: 1,
    price: 100,
    thumbnailUrl: require('assets/images/jacket.jpg'),
    title: 'Red jacket for sale',
    description: 'In good condition',
  },
  {
    id: 2,
    price: 1000,
    thumbnailUrl: require('assets/images/couch.jpg'),
    title: 'Couch in great condition',
    description: 'In good condition',
  },
  {
    id: 3,
    price: 100,
    thumbnailUrl: require('assets/images/jacket.jpg'),
    title: 'Red jacket for sale',
    description: 'In good condition',
  },
];
const CardList = () => {
  const [cardData, setCardData] = useState<CardType[]>(cardsInitData);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false)
  return (
    <FlatList
      data={cardData}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => {
        const { id, price, thumbnailUrl, title, description } = item;
        return <Card card={item} onPress={() => {}} key={id} />;
      }}
      refreshing={isRefreshing}
      onRefresh={() => {
        setCardData([
          {
            id: 2,
            price: 1000,
            thumbnailUrl: require('assets/images/couch.jpg'),
            title: 'Couch in great condition',
            description: 'In good condition',
          },
          {
            id: 3,
            price: 100,
            thumbnailUrl: require('assets/images/jacket.jpg'),
            title: 'Red jacket for sale',
            description: 'In good condition',
          },
        ]);
      }}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      style={styles.cardList}
    ></FlatList>
  );
};

export default CardList;
