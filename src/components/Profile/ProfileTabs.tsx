import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileInfo from "./ProfileInfo";
import ProfileCarousel from "@/components/Profile/ProfileCarousel";

const divisi = [
  "inti",
  "kominfo",
  "akademik",
  "psdm",
  "pmb",
  "kwu",
  "kastrad",
  "adm",
];

export default function ProfileTabs() {
  return (
    <Tabs defaultValue="inti" className="text-center">
      <h1 className="mb-8 text-center text-2xl font-bold text-primary xl:text-4xl">
        Our Kabinet
      </h1>
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
      {divisi.map((item) => (
        <TabsContent value={item}>
          <ProfileInfo divisi={item} />
          <ProfileCarousel divisi={item} />
        </TabsContent>
      ))}
      {/* <TabsContent value="inti">
        <ProfileInfo divisi="inti" />
        <ProfileCarousel divisi="inti" />
      </TabsContent>
      <TabsContent value="kominfo">
        <ProfileInfo divisi="kominfo" />
        <ProfileCarousel divisi="kominfo" />
      </TabsContent>
      <TabsContent value="akademik"></TabsContent>
      <TabsContent value="psdm"></TabsContent>
      <TabsContent value="pmb"></TabsContent>
      <TabsContent value="kwu"></TabsContent>
      <TabsContent value="kastrad"></TabsContent>
      <TabsContent value="adm"></TabsContent> */}
    </Tabs>
  );
}
