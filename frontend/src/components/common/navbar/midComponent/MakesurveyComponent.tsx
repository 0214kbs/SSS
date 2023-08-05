"use client";
import React from "react";
import { StyledText, StyledMidComp, StyledTitleInput } from "../Navbar.styled";
import Image from "next/image";
import Button from "@/components/button";
import useMakeSurveyApiStore from "@/stores/makesurvey/useMakeSurveyApiStore";
import makeSurveyPost from "@/api/makesurvey/makeSurveyPost";


const MakesruveyComponent = (props: any) => {
    const pathname = props.pathname;
    const {
        titleText,
        setTitleText,
        titleContent,
        conditionText,
        conditionContent,
        headcount,
        startsurvey,
        endsurvey,
        selectedbutton,
        targetselected,
      } = useMakeSurveyApiStore(); 
      const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleText(event.target.value);
      };
    const handleCreateButtonClick = () => { 
        const surveyData = {
            titleText,
            titleContent,
            conditionText,
            conditionContent,
            headcount,
            startsurvey,
            endsurvey,
            selectedbutton,
            targetselected,
        }
        console.log(surveyData)
        makeSurveyPost(surveyData)
   
        .then((responseData) => {
        console.log("Survey created successfully:", responseData);
        })
        .catch((error) => {
        console.error("Error :", error);
        });
    };
    return (
        <StyledMidComp pathname={pathname}>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px",maxWidth : "600px"}} >
                <StyledTitleInput onChange={handleTitleChange} value={titleText} style={{minWidth : "600px",maxWidth : "600px"}}></StyledTitleInput>
                <StyledText>
                    <Image src='/survey/check.png' width={12} height={12} style={{ marginRight: "10px" }} alt="체크" />
                    모든 변경사항이 반영되었습니다.
                </StyledText>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ width: "93px", height: "35px" }}>
                    <Button use="gray" label="임시저장" />
                </div>
                <div style={{ width: "93px", height: "35px" }}>
                    <Button use="longYellow" label="생성하기" onClick={handleCreateButtonClick} />
                </div>
            </div>
        </StyledMidComp>
    );
};

export default MakesruveyComponent;