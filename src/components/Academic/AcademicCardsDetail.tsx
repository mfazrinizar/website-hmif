import { useParams, useNavigate } from "react-router-dom"; // Tambahkan useNavigate
import { useEffect, useState } from "react";
import { Calendar, ArrowRight, Mail, Users } from "lucide-react";
import { Button } from "../ui/button";
import ProgramCard from "../ProgramCard";
import { rndImage } from "@/lib/genImage";

export default function AcademicCardsDetail() {
  const { type, title } = useParams();
  const [data, setData] = useState<any>(null);
  const [event, setEvent] = useState([]);
  const [programs, setPrograms] = useState<any[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!title) {
      console.error("Title is undefined. Redirecting...");
      return;
    }

    const dataUrl = `/data/academic/${type}.json`;
    fetch(dataUrl)
      .then((response) => response.json())
      .then((fetchedData) => {
        // Cari data yang sesuai dengan title dari URL
        const selectedData = fetchedData.find(
          (item: any) =>
            item.title.toLowerCase().split(" ").join("-") === title,
        );
        setData(selectedData);
        setEvent(fetchedData);
      });
  }, [type, title]);

  useEffect(() => {
    if (event.length > 3) setPrograms(rndImage({ array: event }));
    else setPrograms(event);
  }, [event]);

  if (!data) return <p>Loading...</p>;

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* Navigation */}
      <div className="mb-5 flex flex-wrap items-center font-medium text-[#636363]">
        {/* Navigasi menggunakan useNavigate */}
        <p
          onClick={() => navigate("/")}
          className="cursor-pointer hover:text-black"
        >
          Home
        </p>
        <ArrowRight className="mx-1" />
        <p
          onClick={() => navigate("/academic")}
          className="cursor-pointer hover:text-black"
        >
          Academic
        </p>
        <ArrowRight className="mx-1" />
        <p
          onClick={handleRefresh}
          className="cursor-pointer font-semibold capitalize text-primary"
        >
          {data.type}
        </p>
      </div>

      {/* Content */}
      <div className="mb-16 mt-10 flex flex-wrap lg:flex-nowrap">
        <div className="mb-10 w-full lg:mb-0 lg:w-1/4">
          <div className="rounded-2xl border border-black">
            <img
              className="mb-8 w-full rounded-t-2xl object-cover"
              src={data.details.imgDetails || data.img} // Gunakan imgDetails jika tersedia
              alt={data.title}
            />
            <div className="my-8">
              <div className="my-5">
                <div className="ms-5 flex items-center font-medium">
                  <Calendar className="me-2 w-5" />
                  <p>
                    {type === "seminar" ? data.details.date : "Open Register"}
                  </p>{" "}
                  {/* Teks dinamis */}
                </div>
                <p className="ms-11 text-[#3E3E3E]">
                  {type === "scholarship"
                    ? data.details.openRegister
                    : type === "competition"
                      ? data.details.openRegister
                      : data.details.time}
                  {/* Date atau time */}
                </p>
              </div>

              <div className="my-7">
                <div className="ms-5 flex items-center font-medium">
                  <Mail className="me-2 w-5" />
                  <p>
                    {type === "competition"
                      ? "Deadline Submission"
                      : type == "seminar"
                        ? data.details.media
                        : "Category"}
                  </p>
                </div>
                <p className="ms-11 text-[#3E3E3E]">
                  {type === "competition"
                    ? data.details.submission
                    : type === "seminar"
                      ? ""
                      : data.details.category}
                </p>
              </div>

              <div className="my-5">
                <div className="ms-5 flex items-center font-medium">
                  <Users className="me-2 w-5" />
                  <p>
                    {type === "competition"
                      ? "Announcement"
                      : type == "seminar"
                        ? "This event is open to :"
                        : "Available to"}
                  </p>
                </div>
                <p className="ms-11 text-[#3E3E3E]">
                  {type === "competition"
                    ? data.details.announcement
                    : type === "seminar"
                      ? data.details.openTo
                      : data.details.availableTo}
                </p>
              </div>
            </div>
          </div>

          {/* Tombol Register */}
          <Button className="mt-5 w-full border-2 border-primary">
            Free Register
          </Button>

          {/* Tombol Guidebook hanya untuk competition */}
          {type === "competition" && (
            <Button className="mt-2 w-full border-2 border-primary bg-[#F5F5F5] text-primary">
              Guidebook
            </Button>
          )}
        </div>

        {/* Dynamic Details Section */}
        <div className="w-full lg:ms-12 lg:w-3/4">
          <p className="inline-block rounded bg-primary px-2 py-2 text-white">
            {data.category} {/* Category */}
          </p>
          <h1 className="pb-6 pt-5 text-3xl font-bold text-primary">
            {data.title} {/* Title */}
          </h1>
          <p className="mb-10 text-lg font-medium text-[#3E3E3E]">
            Presented by {data.details.presentedBy} {/* Presented by */}
          </p>
          <p className="mb-5 text-xl font-medium">Event Details :</p>
          <div
            className="whitespace-pre-wrap text-[#3E3E3E]"
            dangerouslySetInnerHTML={{
              __html: data.details.descriptionDetails,
            }}
          />
        </div>
      </div>

      {/* Upcoming Event */}
      <div className="text-center">
        <h1 className="mb-5 text-3xl font-bold text-primary">
          Upcoming Events
        </h1>
        <p className="mb-5 text-[#3E3E3E]">
          “Memulai perjalanan untuk terhubung dengan sesama pelajar, para ahli,
          dan pengalaman akademis di berbagai kampus, serta menemukan beragam
          peluang beasiswa yang tersedia untuk Anda!”
        </p>
        <div className="flex flex-col lg:flex-row">
          {programs.flat().map((item: any, key: any) => (
            <ProgramCard
              key={key}
              eventFormat={item["category"]}
              name={item["title"]}
              date={item["date"]}
              description={item["description"]}
              dinas={item["type"]}
              src={item["img"]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
