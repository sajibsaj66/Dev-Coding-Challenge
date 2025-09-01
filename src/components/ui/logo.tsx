import LogoIcon from "@/assets/Icons/Logo.png";
export default function Logo() {
  return (
    <div className="flex items-center gap-x-3">
      <img src={LogoIcon} alt="logo_icon" />
      <h3 className="text-xl font-bold text-white">Untitled UI</h3>
    </div>
  );
}
