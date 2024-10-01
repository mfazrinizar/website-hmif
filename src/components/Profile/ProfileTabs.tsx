import { Tabs, TabsContent } from "@/components/ui/tabs";
import ProfileInfo from "./ProfileInfo";
import ProfileCarousel from "@/components/Profile/ProfileCarousel";
import NavTabs from "../NavTabs";

const dinas = [
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
      <NavTabs />
      {dinas.map((item) => (
        <TabsContent value={item}>
          <ProfileInfo dinas={item} />
          <ProfileCarousel dinas={item} />
        </TabsContent>
      ))}
      {/* <TabsContent value="inti">
        <ProfileInfo dinas="inti" />
        <ProfileCarousel dinas="inti" />
      </TabsContent>
      <TabsContent value="kominfo">
        <ProfileInfo dinas="kominfo" />
        <ProfileCarousel dinas="kominfo" />
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
