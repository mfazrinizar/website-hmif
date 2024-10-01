import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NavTabs() {
  return (
    <TabsList className="flex flex-col gap-2 md:flex-row md:gap-0">
      <div className="flex">
        <TabsTrigger value="inti">inti</TabsTrigger>
        <TabsTrigger value="kominfo">kominfo</TabsTrigger>
        <TabsTrigger value="akademik">akademik</TabsTrigger>
        <TabsTrigger value="psdm">psdm</TabsTrigger>
      </div>
      <div className="flex">
        <TabsTrigger value="pmb">pmb</TabsTrigger>
        <TabsTrigger value="kwu">kwu</TabsTrigger>
        <TabsTrigger value="kastrad">kastrad</TabsTrigger>
        <TabsTrigger value="adm">adm</TabsTrigger>
      </div>
    </TabsList>
  );
}
