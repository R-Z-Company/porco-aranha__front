import SpiderverseLogo
  from "@/components/spiderverse-logo/spiderverse-logo.component";

export default function TopAppBar() {

  return (
    <header
      className={"bg-transparent w-full py-4 flex justify-center items-center border-b-2 border-red-600 z-20 relative"}>
      <SpiderverseLogo size={"small"} />
    </header>
  );
}