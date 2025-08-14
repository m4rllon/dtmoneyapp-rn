import { Container, PickerCategory } from "./styles";
import {Picker} from '@react-native-picker/picker';
import { useState } from "react";

interface ValuesListProps {
  id: string;
  name: string;
}

interface CategorySelectProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
  valuesList: ValuesListProps[];
}

export function PickerForm({ selectedValue, onValueChange, valuesList }: CategorySelectProps){
    const [selectedPicker, setSelectedPicker] = useState(
        selectedValue === '' ? false : true
    )

    return(
        <Container>
            <PickerCategory
            selectedValue={selectedValue}
            onValueChange={ (itemValue, itemIndex) => {
                if(itemValue) {
                    // @ts-ignore
                    onValueChange(itemValue)
                    setSelectedPicker(true)
                }
            }}
            $isSelected={selectedPicker}
            dropdownIconColor={
                selectedPicker ? '#E1E1E6' : '#7C7C8A'
            }>
                <Picker.Item label="Selecione" value={''} enabled={false}/>
                {
                    valuesList.map(value => <Picker.Item 
                    label={value.name} 
                    key={value.id}
                    value={value.id}/>)
                }
            </PickerCategory>
        </Container>
    )
}