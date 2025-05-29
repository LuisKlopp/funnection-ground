"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";

import { useModal } from "@/hooks/useModal";
import { TrueTrueFalseType } from "@/types/true-true-false.types";

import { Button } from "../button/button";
import { TrueTrueFalseModal } from "./true-true-false-modal";

export const TrueTrueFalseList = () => {
  const [trueTrueFalseList, setTrueTrueFalseList] = useState<
    TrueTrueFalseType[]
  >([]);
  const { openModal, isModal, closeModal } = useModal();
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [personalTtfData, setPersonalTtfData] = useState<TrueTrueFalseType>({
    id: 0,
    real1: "",
    real2: "",
    real3: "",
    nickname: "",
    fake: "",
  });

  const fetchTrueTrueFalse = async () => {
    const { data } = await axios.get<TrueTrueFalseType[]>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/ground-submissions`
    );
    setTrueTrueFalseList(data);
  };

  const handleUserClick = (userId: string) => {
    setSelectedUserId(userId);
    openModal();
    const matchingComment = trueTrueFalseList.find(
      (comment) => comment.nickname === userId
    );
    setPersonalTtfData(matchingComment as TrueTrueFalseType);
  };

  return (
    <div className="h-1dvh flex w-full flex-col items-center justify-center gap-4">
      <Link href={"/"} className="absolute top-5 left-5">
        뒤로가기
      </Link>
      <h1 className="mdl:text-4xl py-1 text-3xl font-medium text-slate-700">
        Funnection 진진진가
      </h1>
      <span className="text-lg text-slate-500">진짜 세 개와 가짜 하나</span>

      <div className="flex gap-4 text-[20px]">
        {trueTrueFalseList.map((item) => (
          <div
            key={item.id}
            className="fade-in-up button-base custom-button bg-thickPurple flex !min-w-24 !items-center !justify-center !p-4 text-white"
            onClick={() => handleUserClick(item.nickname)}
          >
            {item.nickname}
          </div>
        ))}
      </div>
      <div className="mt-8 flex w-full justify-center">
        <Button
          onClick={fetchTrueTrueFalse}
          buttonTitle="진진진가 확인"
          className="!w-[160px] !p-4"
        />
      </div>
      {isModal && (
        <TrueTrueFalseModal
          closeModal={closeModal}
          personalCommentData={personalTtfData}
          userId={selectedUserId}
        />
      )}
    </div>
  );
};
