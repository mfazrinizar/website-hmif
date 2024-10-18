import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProfileInfo from "./ProfileInfo";
import ProfileCarousel from "@/components/Profile/ProfileCarousel";
import ProfilePrograms from "./ProfilePrograms";
import NavTabs from "../NavTabs";

import { useEffect, useState } from "react";
import axios from "axios";

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
  const [profile, setProfile] = useState([]);
  const [proker, setProker] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`/data/profile.json`).then((res) => {
      setProfile(res.data.data);
    });

    axios.get(`/data/proker.json`).then((res) => {
      setProker(res.data.data);
    });
  }, []);

  return (
    <Tabs defaultValue="inti" className="text-center">
      <h1 className="mb-8 text-center text-2xl font-bold text-primary xl:text-4xl">
        Our Kabinet
      </h1>
      <NavTabs>
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
      </NavTabs>
      {dinas.map((item, key) => (
        <TabsContent value={item} id={item} key={item}>
          <ProfileInfo dinas={item} item={profile[key]} />
          <ProfileCarousel dinas={item} item={profile[key]} />
          <ProfilePrograms proker={proker[key]} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
