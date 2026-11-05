export default function FeeNote({ className = "" }: { className?: string }) {
  return (
    <p className={`px-4 py-3 text-xs sm:text-sm italic text-slate-500 ${className}`}>
      *Fees may vary depending on university, course and intake.
    </p>
  );
}
