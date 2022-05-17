import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  border-radius: 10px;
  width: 150px;
  min-height: 150px;
  margin: 5px 0;
  background-color: ${props => props.bgColor}
  display: flex;
  justify-content: center;
`

const ButtonText = styled.Text`
  color: ${props => props.textColor};
  font-size: 20px;
  text-align: center;
  text-transform: capitalize;
`;

function PressableButton({bgColor, textColor, children}) {

  return (
    <ButtonContainer bgColor={bgColor}>
      <ButtonText textColor={textColor}>{children}</ButtonText>
    </ButtonContainer>
  );
}

export default PressableButton;
