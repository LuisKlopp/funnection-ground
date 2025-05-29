"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";

import { Input } from "@/components/input";
import { useModal } from "@/hooks/useModal";
import { cn } from "@/lib/utils";

import { SubmitModal } from "../submit-modal";

export const TrueTrueFalseSubmitBox = () => {
  const { openModal, closeModal, isModal } = useModal();

  const [inputs, setInputs] = useState([
    { id: 1, value: "", type: "닉네임" },
    { id: 2, value: "", type: "진짜" },
    { id: 3, value: "", type: "진짜" },
    { id: 4, value: "", type: "진짜" },
    { id: 5, value: "", type: "가짜" },
  ]);

  const disabled = !inputs.every((input) => input.value.trim() !== "");

  const handleChange = (index: number, newValue: string) => {
    setInputs((prev) =>
      prev.map((input, i) =>
        i === index ? { ...input, value: newValue } : input
      )
    );
  };

  const handleSubmit = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/ground-submissions`, {
        nickname: inputs.find((input) => input.type === "닉네임")?.value || "",
        real1: inputs.find((input) => input.type === "진짜")?.value || "",
        real2: inputs.filter((input) => input.type === "진짜")[1]?.value || "",
        real3: inputs.filter((input) => input.type === "진짜")[2]?.value || "",
        fake: inputs.find((input) => input.type === "가짜")?.value || "",
      })
      .then(() => {
        setInputs((prev) => prev.map((input) => ({ ...input, value: "" })));
        openModal();
        setTimeout(() => {
          closeModal();
        }, 1500);
      })
      .catch((error) => {
        console.error("진진가 제출 실패:", error);
        alert("제출 중 오류가 발생했습니다. 다시 시도해주세요.");
      });
  };

  return (
    <div className="box-shadow-04 flex w-[90%] flex-col items-center justify-center gap-12 rounded-lg border-2 bg-[#7baab8] p-4 pt-8 pb-8">
      {isModal && <SubmitModal contents="진진진가 제출완료 ✅" />}
      <Link href={"/"} className="absolute top-5 left-5">
        뒤로가기
      </Link>
      <h1 className="text-center text-3xl text-white">
        Funnection Ground <br /> 진진진가
      </h1>
      <div className="flex w-full flex-col gap-4">
        {inputs.map((input, index) => (
          <div
            key={input.id}
            className="flex w-full items-center justify-center gap-4"
          >
            <div
              className={cn(
                "flex w-[70px] items-center justify-center rounded-lg border-2 border-white p-1 font-bold text-white",
                {
                  "bg-[#5e6dae]": input.type === "진짜",
                  "bg-[#aa5454]": input.type === "가짜",
                  "bg-[#5ea34d]": input.type === "닉네임",
                }
              )}
            >
              <span>{input.type}</span>
            </div>
            <Input
              placeholder={`${input.type} 입력`}
              className="!h-[40px] !w-full"
              value={input.value}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={disabled}
        className={cn("submit-button button-base bg-[#44657b]", {
          "pointer-events-none bg-[#b6bcbc]": disabled,
        })}
      >
        제출하기
      </button>
    </div>
  );
};
