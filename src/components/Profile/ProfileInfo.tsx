import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  dinas: string;
  item: any;
};

export default function ProfileInfo({ dinas, item }: Props) {
  const [infoDesc, setInfoDesc] = useState([]);
  const [infoTitle, setInfoTitle] = useState([]);

  useEffect(() => {
    if (item) {
      setInfoDesc(item.infoDesc || null);
      setInfoTitle(item.infoTitle || null);
    }
  }, [item]);

  return (
    <section
      id="profile-info"
      className="flex flex-col items-center gap-16 md:flex-row lg:gap-32"
    >
      <img
        src={`/img/profile/${dinas}/logo.png`}
        alt="logo-hmif"
        className="hidden md:block md:w-1/4"
      />
      <div className="space-y-6 md:w-3/5">
        <h4 className="text-left text-3xl font-medium uppercase text-primary">
          {infoTitle[0]}
        </h4>
        <p className="text-left text-base md:text-xl">{infoDesc[0]}</p>
        {infoDesc[1] && infoDesc[2] && infoTitle[1] && infoTitle[2] && (
          <Accordion type="single" collapsible className="space-y-8">
            <AccordionItem value="item-1">
              <AccordionTrigger className="capitalize">
                {infoTitle[1]}
              </AccordionTrigger>
              <AccordionContent className="text-left">
                {infoDesc[1]}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="capitalize">
                {infoTitle[2]}
              </AccordionTrigger>
              <AccordionContent className="text-left">
                {infoDesc[2]}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </section>
  );
}
