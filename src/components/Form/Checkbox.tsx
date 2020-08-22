import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather as Icon } from '@expo/vector-icons';
import { Box, Text } from "..";

interface CheckboxProps  {
    label: string;
    checked: boolean;
    onChange: () => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
    return (
        <BorderlessButton onPress={() => onChange()} style={{ justifyContent: 'center' }}>
            <Box flexDirection="row">
                <Box 
                    height={20} 
                    width={20} 
                    marginRight="s"
                    alignItems="center" 
                    justifyContent="center"
                    borderRadius="s"
                    borderWidth={1}
                    borderColor="primary" 
                    backgroundColor={checked ? "primary" : "background"}
                >
                    <Icon name="check" color="white"/>
                </Box>
                <Text variant="button">{label}</Text>
            </Box>
        </BorderlessButton>
    );
};

export default Checkbox;