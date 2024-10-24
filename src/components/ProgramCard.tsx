import { Clock } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { FollowerPointerCard } from "./ui/following-pointer";

type Props = {
  eventFormat: string;
  name: string;
  date: any;
  description: string;
  dinas: string;
  src: string | undefined;
  type: string;
};

export default function ProgramCard({
  eventFormat,
  name,
  date,
  description,
  dinas,
  src,
  type,
}: Props) {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    const formattedTitle = name.toLowerCase().split(" ").join("-"); // Format title untuk URL
    navigate(`/${type}/${dinas.toLowerCase()}/${formattedTitle}`); // Gunakan title sebagai bagian dari URL
  };

  return (
    <div className="b relative mb-7 h-fit w-full rounded-2xl p-4 md:h-auto md:p-7 lg:w-1/3">
      {type === "profile" ? (
        <>
          <p className="absolute left-12 top-12 rounded bg-primary px-2 py-1 text-white">
            {eventFormat}
          </p>
          <img
            src={src ? src : `/img/proker/${dinas}/${name}.png`}
            alt={`${name}`}
            className="mb-4 max-h-60 w-full rounded-t-2xl object-cover md:mb-0 md:h-full"
          />
          <div className="flex min-h-80 flex-col items-start justify-between gap-2 rounded-b-2xl border border-black bg-background p-6">
            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center justify-center gap-2 text-sm text-primary">
                <Clock />
                <div className="flex flex-row flex-wrap gap-1 text-start">
                  <p>{date}</p>
                </div>
              </div>
              <div className="line-clamp-1 overflow-hidden text-ellipsis">
                <h1 className="text-start text-xl font-medium text-primary md:text-3xl">
                  {name}
                </h1>
              </div>
              <div className="w-fit text-ellipsis pb-5 pt-2">
                <p className="line-clamp-5 text-left">{description}</p>
              </div>
            </div>
            <Button className="" type="submit" onClick={handleLearnMore}>
              More Info
            </Button>
          </div>
        </>
      ) : (
        <FollowerPointerCard
          title={
            <TitleComponent
              title={name}
              avatar={src ? src : `/img/proker/${dinas}/${name}.png`}
            />
          }
        >
          <p className="absolute left-5 top-5 rounded bg-primary px-2 py-1 text-white">
            {eventFormat}
          </p>
          <img
            src={src ? src : `/img/proker/${dinas}/${name}.png`}
            alt={`${name}`}
            className="mb-4 max-h-60 w-full rounded-t-2xl object-cover md:mb-0 md:h-full"
          />
          <div className="flex min-h-80 flex-col items-start justify-between gap-2 rounded-b-2xl border border-black bg-background p-6">
            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center justify-center gap-2 text-sm text-primary">
                <Clock />
                <div className="flex flex-row flex-wrap gap-1 text-start">
                  <p>{date}</p>
                </div>
              </div>
              <div className="line-clamp-1 overflow-hidden text-ellipsis">
                <h1 className="text-start text-xl font-medium text-primary md:text-3xl">
                  {name}
                </h1>
              </div>
              <div className="w-fit text-ellipsis pb-5 pt-2">
                <p className="line-clamp-5 text-left">{description}</p>
              </div>
            </div>
            <Button className="" type="submit" onClick={handleLearnMore}>
              More Info
            </Button>
          </div>
        </FollowerPointerCard>
      )}
    </div>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex items-center space-x-2 rounded-full bg-primary px-3 py-2">
    <img
      src={avatar}
      alt="thumbnail"
      className="h-10 w-10 rounded-full border-2 border-white"
    />
    <p className="">{title}</p>
  </div>
);
