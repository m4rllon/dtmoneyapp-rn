import { useState, useRef } from "react";
import { 
    Container,
    InputContianer,
    ModalItensContainer,
    TextInput,
    IconInput,
    ItensScroll,
    ItenText,
 } from "./styles";
import { Modal, TouchableWithoutFeedback, View } from "react-native";

type TData = {
    id: string;
    name: string;
}
interface InputSelectProps{
    defaultValue?: string;
    data: TData[];
    onChooseOption?: (data:TData) => void;
}

export function InputSelect({defaultValue, data, onChooseOption}:InputSelectProps){
    const [ value, setValue ] = useState<string>(
        defaultValue ? defaultValue : 'Selecione'
    )
    const [isSelected, setIsSelected] = useState(
        value !== 'Selecione' ? true : false
    )
    const [statusModal, setStatusModal] = useState(false) 

    const handleOpenModal = () => {
        setStatusModal(true)
        handleMeasureInWindow()
    }
    const handleCloseModal = () => {
        setStatusModal(false)
    }
    const handleChooseItem = (data:TData) => {
        if(onChooseOption) {
            setValue(data.name)
            setIsSelected(true)
            onChooseOption(data)
        }
        
        handleCloseModal()
    }

    const viewRef = useRef<View>(null);
    const [modalPosition, setModalPosition] = useState({
        x:0,
        y:0,
    });
    
    const handleMeasureInWindow = () => {
      viewRef.current?.measureInWindow((x, y) => {
        setModalPosition({
            x: x,
            y: y,
        })
      });
    };

    return <Container>
        <TouchableWithoutFeedback onPress={handleOpenModal}>
            <View ref={viewRef}>
                <InputContianer>
                        <TextInput
                        $isActive={isSelected}>
                            {value}
                        </TextInput>
                        <IconInput 
                        name="arrow-drop-down"/>
                </InputContianer>
            </View>
        </TouchableWithoutFeedback>

        <Modal
        transparent
        visible={statusModal}
        onRequestClose={handleCloseModal}>
            <ModalItensContainer
            $modalPosition={modalPosition}>
                <ItensScroll>
                    {data.map( item => <TouchableWithoutFeedback 
                    key={item.id}
                    onPress={() => handleChooseItem(item)}>
                        <ItenText $isActive={value === item.id ? true : false}>{item.name}</ItenText>
                    </TouchableWithoutFeedback>)}
                </ItensScroll>
            </ModalItensContainer>
        </Modal>
    </Container>    
}