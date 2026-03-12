import BottomNav from "@/components/BottomNav";

export default function WithMenuLayout({ children }) {
  return (
    <>
      <div className="pb-24">{children}</div>
      <BottomNav />
    </>
  );
}