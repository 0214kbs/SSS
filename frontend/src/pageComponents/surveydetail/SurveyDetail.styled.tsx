import styled, { css } from 'styled-components'

const SurveyDetailPage = styled.div.attrs<any>((props) => ({}))`
    height: 100vh;
`
const BackButtonContainer = styled.div.attrs<any>((props) => ({}))`
    position: relative;
    height: 120px;
`
const BackButton = styled.div.attrs<any>((props) => ({}))`
    position: absolute;
    bottom: 0px;
    cursor: pointer;
`

const SurveyResultContainer = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    width: 1536px;
    padding: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    background-color: #F0F2F3;
`
export {SurveyDetailPage, BackButtonContainer, BackButton, SurveyResultContainer }
     