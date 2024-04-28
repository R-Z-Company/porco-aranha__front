import SpiderverseLogo
  from "@/components/spiderverse-logo/spiderverse-logo.component";

export default function TopAppBar() {

  return (
    <header
      className={"fixed bg-transparent backdrop-blur-sm w-full py-4 flex justify-center items-center border-b-2 border-red-600 z-20"}>
      <SpiderverseLogo size={"small"} />
    </header>
  );
}