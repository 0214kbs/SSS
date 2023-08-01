import { create } from "zustand";
import { SurveyType } from "./surveyStore.type";

const useTimeAttackStore = create<SurveyType>((set) => ({
  surveys: [
    {
      remainTime: "",
      title: "설문지 제목1",
      startTime: "2023-07-26-17-30",
      endTime: "2023-08-01-21-20",
      headCount: "10",
      closedHeadCount: "100",
      nickname: "닉네임abc",
      type: "NORMAL",
      probability: "27%",
      giveaways: "coffee",
    },
    {
      remainTime: "",
      title: "설문지 제목2",
      startTime: "2023-07-27-10-45",
      endTime: "2023-08-01-11-25",
      headCount: "15",
      closedHeadCount: "50",
      nickname: "닉네임def",
      type: "NORMAL",
      probability: "34%",
      giveaways: "chicken",
    },
    {
      remainTime: "",
      title: "설문지 제목3",
      startTime: "2023-07-28-14-00",
      endTime: "2023-08-01-15-30",
      headCount: "20",
      closedHeadCount: "80",
      nickname: "닉네임ghi",
      type: "NORMAL",
      probability: "45%",
      giveaways: "coffee",
    },
    {
      remainTime: "",
      title: "설문지 제목4",
      startTime: "2023-07-30-11-20",
      endTime: "2023-08-03-12-30",
      headCount: "30",
      closedHeadCount: "60",
      nickname: "닉네임mno",
      type: "NORMAL",
      probability: "47%",
      giveaways: "chicken",
    },
    {
      remainTime: "",
      title: "설문지 제목5",
      startTime: "2023-07-29-09-10",
      endTime: "2023-08-02-10-50",
      headCount: "25",
      closedHeadCount: "70",
      nickname: "닉네임jkl",
      type: "NORMAL",
      probability: "36%",
      giveaways: "coffee",
    },
    {
      remainTime: "",
      title: "설문지 제목6",
      startTime: "2023-07-31-10-30",
      endTime: "2023-08-06-20-30",
      headCount: "35",
      closedHeadCount: "120",
      nickname: "닉네임pqr",
      type: "NORMAL",
      probability: "40%",
      giveaways: "chicken",
    },
    {
      remainTime: "",
      title: "설문지 제목7",
      startTime: "2023-08-01-12-15",
      endTime: "2023-08-04-18-20",
      headCount: "50",
      closedHeadCount: "140",
      nickname: "닉네임stu",
      type: "NORMAL",
      probability: "45%",
      giveaways: "coffee",
    },
    {
      remainTime: "",
      title: "설문지 제목8",
      startTime: "2023-08-02-15-10",
      endTime: "2023-08-09-23-30",
      headCount: "65",
      closedHeadCount: "150",
      nickname: "닉네임vwx",
      type: "NORMAL",
      probability: "50%",
      giveaways: "chicken",
    },
    {
      remainTime: "",
      title: "설문지 제목9",
      startTime: "2023-08-03-16-40",
      endTime: "2023-08-07-21-40",
      headCount: "80",
      closedHeadCount: "160",
      nickname: "닉네임yz1",
      type: "NORMAL",
      probability: "55%",
      giveaways: "coffee",
    },
    {
      remainTime: "",
      title: "설문지 제목10",
      startTime: "2023-08-04-18-20",
      endTime: "2023-08-05-19-50",
      headCount: "100",
      closedHeadCount: "170",
      nickname: "닉네임234",
      type: "NORMAL",
      probability: "60%",
      giveaways: "chicken",
    },
    {
      remainTime: "",
      title: "설문지 제목11",
      startTime: "2023-08-05-19-50",
      endTime: "2023-08-08-22-50",
      headCount: "120",
      closedHeadCount: "180",
      nickname: "닉네임567",
      type: "NORMAL",
      probability: "65%",
      giveaways: "coffee",
    },
    {
      remainTime: "",
      title: "설문지 제목12",
      startTime: "2023-08-06-21-10",
      endTime: "2023-08-10-23-59",
      headCount: "150",
      closedHeadCount: "190",
      nickname: "닉네임890",
      type: "NORMAL",
      probability: "70%",
      giveaways: "chicken",
    },
    {
      remainTime: "",
      title: "설문지 제목13",
      startTime: "2023-08-01-22-20",
      endTime: "2023-08-03-12-30",
      headCount: "200",
      closedHeadCount: "200",
      nickname: "닉네임abc2",
      type: "NORMAL",
      probability: "75%",
      giveaways: "coffee",
    },

  ],
}));

export default useTimeAttackStore;