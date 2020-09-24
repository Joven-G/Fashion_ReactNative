import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box, Text } from './Theme';
import RoundIconButton from './RoundIconButton';

interface HeaderProps {
    left: {
        icon: string;
        onPress: () => void;
    };
    title: string;
    right?: {
        icon: string;
        onPress: () => void;
    };
    dark: boolean;
}

const Header = ({ left, title, right, dark }: HeaderProps) => {
    const insets = useSafeAreaInsets();
    const color = dark ? 'background' : 'secondary';
    const backgroundColor = dark ? 'secondary' : undefined;

    return (
        <Box 
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            paddingHorizontal="m"
            style={{ marginTop: insets.top }}
        >
            <RoundIconButton 
                name={left.icon} 
                iconRatio={0.4}
                onPress={left.onPress}
                size={44}
                align={backgroundColor === undefined ? "flex-start" : "center"}
                {...{ color, backgroundColor }}
            />
            <Text variant="header" {...{ color }}>{title.toUpperCase()}</Text>
            {right ? (
                <RoundIconButton 
                    name={right.icon}  
                    iconRatio={0.4}
                    onPress={right.onPress}
                    size={44}
                    align={backgroundColor === undefined ? "flex-end" : "center"}
                    {...{ color, backgroundColor }}
                />
            ) : (
                <View style={{ width: 44 }} />
            )}
        </Box>
    )
}

Header.defaultProps = { dark: false }

export default Header;