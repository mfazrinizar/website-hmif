import { Link } from "react-router-dom";
import { CarouselItem } from "../ui/carousel";
import { Mail, Instagram } from "lucide-react";

type Props = {
  nama: string;
  jabatan: string;
  angkatan: string;
  instagram: string;
  email: string;
};

export default function ProfileCarouselItem({
  nama,
  jabatan,
  angkatan,
  instagram,
  email,
}: Props) {
  return (
    <CarouselItem className="flex items-center gap-32">
      <img
        src={`/img/profile/${nama}.png`}
        alt={nama}
        className="hidden w-1/4 md:block"
      />
      <div className="space-y-2 text-left lg:space-y-4">
        <h4 className="text-2xl font-medium text-primary lg:text-4xl">
          {jabatan}
        </h4>
        <p className="text-base font-medium md:text-xl">{nama}</p>
        <p className="text-base font-normal md:text-xl">{angkatan}</p>
        <Link
          to={`https://www.instagram.com/${instagram}/`}
          className="flex items-center gap-2 text-base font-normal text-primary md:text-xl"
        >
          <Instagram /> <p>{instagram}</p>
        </Link>
        <Link
          to={`https://mail.google.com/mail/u/0/?pli=1#search/${email}?compose=new`}
          className="flex items-center gap-2 text-base font-normal text-primary md:text-xl"
        >
          <Mail /> <p>{email}</p>
        </Link>
      </div>
    </CarouselItem>
  );
}
