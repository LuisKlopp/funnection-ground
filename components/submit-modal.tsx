interface SubmitModalProps {
  contents: string;
}

export const SubmitModal = ({ contents }: SubmitModalProps) => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="fade-in-up rounded-xl bg-slate-800 px-4 py-2 font-jua text-sm text-white shadow-lg">
        {contents}
      </div>
    </div>
  );
};
