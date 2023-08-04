import styled, {css} from 'styled-components';

type ToolbarType = {
    height : any
}

const ToolbarBox = styled.div.attrs<ToolbarType>((props) => ({
    height : props.height,
  }))`
  
    display: flex;
    flex-direction: column;
    width: 56px;
    height: 200px;
    border-radius: 100px;
    box-shadow : 2px 2px 2px 2px ${props => props.theme.colors.lightgray} ;
    background-color: black;
    /* border : 3px solid ${props => props.theme.colors.purple}; */
    position: absolute;
    right: calc(100% + 10px); 
    top: ${({ height }) => (height > 320 ? height : 320)}px;
  `;
  
  const Toolbar_InnerBox = styled.div.attrs({})`
    display: flex;
    width: 56px;
    height: 56px;
    border: none;
    padding: 29px 16.5px;
  `;
  
  export { ToolbarBox, Toolbar_InnerBox };