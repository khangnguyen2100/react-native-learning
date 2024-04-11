import CardList from 'app/components/CardList/CardList';
import AppSafeView from 'app/components/layouts/AppSafeView';
import React from 'react';

type Props = {};

const ListingScreen = (props: Props) => {
  return (
    <AppSafeView>
      <CardList />
    </AppSafeView>
  );
};

export default ListingScreen;
