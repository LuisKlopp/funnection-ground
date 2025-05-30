import { useMemo, useState } from "react";

import { TrueTrueFalseType } from "@/types/true-true-false.types";

interface TrueTrueFalseModalProps {
  personalCommentData: TrueTrueFalseType;
  closeModal: () => void;
  userId: string;
}

const shuffleArray = (array: { value: string; type: string }[]) => {
  return array
    .map((item) => ({ ...item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value, type }) => ({ value, type }));
};

export const TrueTrueFalseModal = ({
  closeModal,
  userId,
  personalCommentData,
}: TrueTrueFalseModalProps) => {
  const [showFake, setShowFake] = useState(false);

  const shuffledComments = useMemo(
    () =>
      shuffleArray([
        { value: personalCommentData.real1, type: "real" },
        { value: personalCommentData.real2, type: "real" },
        { value: personalCommentData.real3, type: "real" },
        { value: personalCommentData.fake, type: "fake" },
      ]),
    [
      personalCommentData.fake,
      personalCommentData.real1,
      personalCommentData.real2,
      personalCommentData.real3,
    ]
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="box-shadow-04 relative mx-4 flex w-[700px] flex-col items-center justify-evenly rounded-lg bg-[#d6ecf8] py-8 shadow-lg">
        <button
          className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          X
        </button>
        <h2 className="text-xl font-semibold text-slate-700">
          <span className="text-[#4599a5]">{userId}</span>
          &apos;님의 진진진가
        </h2>
        <div className="fade-in-up mt-7 flex w-full px-20">
          <ul className="flex w-full flex-col gap-2">
            {shuffledComments.map((comment, index) => (
              <div className="flex" key={index}>
                <span className="w-[40px] text-[24px] text-black">
                  {index + 1}.
                </span>
                <div
                  className={`flex w-full items-center rounded-lg border-[3px] border-slate-800 bg-white p-3 text-2xl ${
                    showFake && comment.type === "fake"
                      ? "text-red-500"
                      : "text-gray-600"
                  }`}
                >
                  <div className="text-[26px]">{comment.value}</div>
                </div>
              </div>
            ))}
          </ul>
        </div>

        <button
          onClick={() => setShowFake(true)}
          className="mt-8 rounded-lg bg-gray-700 px-6 py-4 text-[20px] text-white shadow-md hover:bg-gray-800"
        >
          확인
        </button>
      </div>
    </div>
  );
};
