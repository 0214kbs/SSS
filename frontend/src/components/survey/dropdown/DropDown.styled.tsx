import styled,{ThemeProvider} from 'styled-components'

const DropDown_Box = styled.div.attrs({})`
    display : flex;
    flex-direction : column;
    width : 100%;
    min-height : 5px;

    gap : 30px;
    padding: 28px 23px;
`

const DropDown_content_Box = styled.div.attrs({})`
    display : flex;
    flex-wrap : wrap;
    align-items : center;
    flex-direction : row;
   
    width : 100%;
    min-height : 5%;
    
`

const MultipleCheckText = styled.input.attrs({type : 'text'})`
  display: flex;
  flex-wrap: wrap;

  width : 40%;
  min-width : 100px;
  height : 22px;
  border: none;
  outline: none;

  word-break: break-all;
  background: white;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${props => props.theme.fontSizes.small};
 
`;

const MultipleCheck = styled.label.attrs({})`
    display : flex;
    justify-content : center;
    width : 12%;
    height: 22px;
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.purple};

`;

const AddButton = styled.button.attrs({})`
    display : flex;
    flex-direction : row-reverse;
    width : 72.5%;
    min-width : 200px;
    text-align : center;
    justify-content : center;
    margin-left : 27px;

    border : 1px solid ${props => props.theme.colors.purple};
    border-radius : 20px;
    
    background-color : white;
    font-family: ${props => props.theme.fonts.HangeulFontRegular};
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.purple};
    cursor : pointer;
    
    &:hover {
    background-color: ${props => props.theme.colors.purple};
    color: white;
    }

`
const DeleteButton = styled.button.attrs({})`
  display: flex;
  border : none;
  background-color: white;
  font-size: ${props => props.theme.fontSizes.medium};
  color: red;

  
`;

const LinkSelect_List = styled.select.attrs({})`
  display : flex;
  text-align : center;
  width: 72.5%;
  margin-left : 25.5px;
  margin-top : 10px;
  height: 30px;

  border : none;
  font-size: ${props => props.theme.fontSizes.xsmall};
  color: ${props => props.theme.colors.purple};
  font-family: ${props => props.theme.fonts.HangeulFontSemiBold};
  box-sizing : border-box;
  box-shadow : 1px 1px 1px 1px ${props => props.theme.colors.lightgray} ;
  border : 1px solid ${props => props.theme.colors.lightgray};
  border-radius : 10px;
  
`
const LinkSelect_Option = styled.option.attrs({})`
    color: ${props => props.theme.colors.gray};
    font-family: ${props => props.theme.fonts.HangeulFontSemiBold};

`;
const Delete_Button_Container = styled.div.attrs({})`
    display : flex;
    width : 10%;
    min-width : 160px;
    justify-content : flex-end;
`



export {Delete_Button_Container,LinkSelect_List,LinkSelect_Option,DeleteButton,AddButton,DropDown_content_Box,MultipleCheck,MultipleCheckText,DropDown_Box}