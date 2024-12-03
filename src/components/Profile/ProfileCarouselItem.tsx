import { CarouselItem } from "../ui/carousel";
import { Mail, Instagram } from "lucide-react";
import { LinkPreview } from "../ui/link-preview";

type Props = {
  name: string;
  position: string;
  gen: string;
  instagram: string;
  email: string;
  dinas: string;
};

export default function ProfileCarouselItem({
  name,
  position,
  gen,
  instagram,
  email,
  dinas,
}: Props) {
  return (
    <CarouselItem className="flex items-center gap-32">
      <img
        src={`/img/profile/${dinas}/${name}.png`}
        alt={name}
        className="hidden w-1/4 md:block"
      />
      <div className="space-y-2 text-left lg:space-y-4">
        <h4 className="text-2xl font-medium text-primary lg:text-4xl">
          {position}
        </h4>
        <p className="text-base font-medium md:text-xl">{name}</p>
        <p className="text-base font-normal md:text-xl">{gen}</p>
        <LinkPreview
          url={`https://www.instagram.com/${instagram}/`}
          className="flex items-center gap-2 text-base font-normal text-primary md:text-xl"
        >
          <Instagram /> <p>{instagram}</p>
        </LinkPreview>
        <LinkPreview
          url={`https://mail.google.com/mail/u/0/?pli=1#search/${email}?compose=new`}
          className="flex items-center gap-2 text-base font-normal text-primary md:text-xl"
        >
          <Mail /> <p>{email}</p>
        </LinkPreview>
      </div>
    </CarouselItem>
  );
}
