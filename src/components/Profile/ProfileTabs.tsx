import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProfileInfo from "./ProfileInfo";
import ProfileCarousel from "@/components/Profile/ProfileCarousel";
import NavTabs from "../NavTabs";
import ProgramCard from "../ProgramCard";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowRight } from "lucide-react";

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
          <section id="profile-programs">
            <h1 className="mb-8 text-center text-2xl font-bold text-primary xl:text-4xl">
              Our Programs
            </h1>

            <div className="flex flex-col lg:flex-row">
              {proker &&
                proker[key]
                  ?.slice(0, 3)
                  ?.map((item: any) => (
                    <ProgramCard
                      key={key}
                      eventFormat={item["eventFormat"]}
                      name={item["name"]}
                      date={item["date"]}
                      description={item["description"]}
                      dinas={item["dinas"]}
                      src={undefined}
                    />
                  ))}
            </div>
            <Link
              to={"/proker"}
              className="text flex items-center justify-center gap-2 font-bold text-primary"
            >
              <p className="text-3xl">See More About Program Kerja INTI</p>
              <ArrowRight className="size-8" />
            </Link>
          </section>
        </TabsContent>
      ))}
    </Tabs>
  );
}
