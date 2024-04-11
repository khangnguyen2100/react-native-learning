import AppHeading from 'app/components/common/AppHeading/AppHeading';
import AppText from 'app/components/common/AppText/AppText';
import React from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from 'app/constants/enums/colors';
import { IconProps } from '@expo/vector-icons/build/createIconSet';

type Props = {
  avatar: ImageSourcePropType;
  name: string;
  email: string;
};
type ItemProps = {
  icon: any;
  color: string;
  title: string;
};
const Item = (props: ItemProps) => {
  const { color, icon, title } = props;
  return (
    <View style={styles.item_wrapper}>
      <View
        style={[
          styles.item_icon_wrapper,
          {
            backgroundColor: color,
          },
        ]}
      >
        <MaterialCommunityIcons
          name={icon}
          color={colors.white}
          size={19}
          style={styles.item_icon}
        />
      </View>
      <AppHeading style={styles.item_title} heading='h4'>
        {title}
      </AppHeading>
    </View>
  );
};
const items: ItemProps[] = [
  {
    icon: 'format-list-bulleted',
    title: 'My Listings',
    color: colors.primary,
  },
  {
    icon: 'email',
    title: 'My Messages',
    color: colors.secondary,
  },
];
const footerItems: ItemProps[] = [
  {
    icon: 'logout',
    title: 'Logout',
    color: '#ffe66d',
  },
];

const Account = ({ avatar, name, email }: Props) => {
  return (
    <View style={styles.container}>
      {/* user info */}
      <View style={styles.user_info_wrapper}>
        <Image source={avatar} alt={name} style={styles.user_avatar} />
        <View style={styles.user_content_wrapper}>
          <AppHeading style={styles.user_name} heading='h4'>
            {name}
          </AppHeading>
          <AppText style={styles.description}>{email}</AppText>
        </View>
      </View>
      <View style={{ marginTop: 32 }}>
        {/* items */}
        {items.map(item => (
          <Item
            key={item.title}
            color={item.color}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </View>
      <View style={{ marginTop: 24 }}>
        {footerItems.map(item => (
          <Item
            key={item.title}
            color={item.color}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </View>

      {/* item footer */}
    </View>
  );
};

export default Account;
