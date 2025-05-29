import { TrueTrueFalseList } from "@/components/true-true-false/true-true-false-list";
import { TrueTrueFalseSubmitBox } from "@/components/true-true-false/true-true-false-submit-box";

export default async function TrueTrueFalsePage() {
  return (
    <div className="bg-gray02 flex h-[100dvh] w-full flex-col items-center justify-center gap-4">
      <div className="mdl:hidden flex w-full justify-center">
        <TrueTrueFalseSubmitBox />
      </div>
      <div className="mdl:block hidden">
        <TrueTrueFalseList />
      </div>
    </div>
  );
}
