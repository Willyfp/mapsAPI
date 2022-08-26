import {useNavigation} from '@react-navigation/core';
import Text from 'components/Text';
import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from 'styled-components';
import {ButtonHeader, ViewHeader} from './styles';

type HeaderProps = {
  title: string;
};

const Header = ({title}: HeaderProps) => {
  const {colors} = useTheme();

  const {goBack} = useNavigation();

  return (
    <ViewHeader>
      <ButtonHeader onPress={goBack}>
        <FontAwesome5Icon
          name="chevron-left"
          size={25}
          color={colors.text.primary}
        />
      </ButtonHeader>

      <Text fontSize={22} bold color={colors.text.primary}>
        {title}
      </Text>
    </ViewHeader>
  );
};

export default Header;
