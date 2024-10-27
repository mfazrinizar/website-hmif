import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Calendar, ArrowRight, Mail, Users } from "lucide-react";
import { Button } from "../ui/button";
import ProgramCard from "../ProgramCard";
import { rndImage } from "@/lib/genImage";
import { supabase } from "@/lib/createClient";
import { Database } from "database.types";
import { useLocation } from "react-router-dom";

export default function AcademicCardsDetail() {
  const { type, title } = useParams();
  const [data, setData] = useState<any>(null);
  const [event, setEvent] = useState<any[]>([]);
  const [programs, setPrograms] = useState<any[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const { details_id } = location.state || {};

  useEffect(() => {
    if (!title) {
      console.error("Title is undefined. Redirecting...");
      return;
    }

    switch (type) {
      case "beasiswa":
        fetchData(
          "academic_scholarship",
          "academic_scholarship_details",
          title,
        );
        break;
      case "competition":
        fetchData(
          "academic_scholarship",
          "academic_scholarship_details",
          title,
        );
        break;
      case "seminar":
        fetchData(
          "academic_scholarship",
          "academic_scholarship_details",
          title,
        );
        break;
      default:
        fetchData(
          "academic_scholarship",
          "academic_scholarship_details",
          title,
        );
    }
  }, [details_id]);

  async function fetchData(
    mainTable: keyof Database["public"]["Tables"],
    detailsTable: keyof Database["public"]["Tables"],
    title: string,
  ) {
    try {
      const { data: fetchedData, error } = await supabase
        .from(mainTable)
        .select(
          `
            title,
            category,
            date,
            description,
            img,
            type,
            details_id,
            details:${detailsTable} (
              img_details,
              open_register,
              category,
              available_to,
              presented_by,   
              description_details
            )
          `,
        )
        .eq("details_id", details_id)
        .maybeSingle();

      setData(fetchedData);

      // Ambil semua data di tabel utama untuk event mendatang
      const { data: eventList } = await supabase.from(mainTable).select("*");
      setEvent(eventList ?? []);

      if (error) {
        console.error("Error fetching data:", error.message);
      } else {
        setData(fetchedData);
        // console.log(fetchedData);
      }
    } catch (err) {
      console.error("Error in fetchData:", err);
    }
  }

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
              src={import.meta.env.VITE_SUPABASE_BUCKET_URL + data.img}
              alt={data.title}
            />
            <div className="my-8">
              <div className="my-5">
                <div className="ms-5 flex items-center font-medium">
                  <Calendar className="me-2 w-5" />
                  <p>
                    {type === "seminar" ? data.details.date : "Open Register"}
                  </p>
                </div>
                <p className="ms-11 text-[#3E3E3E]">
                  {type === "scholarship" || type === "competition"
                    ? data.details.open_register
                    : data.details.time}
                </p>
              </div>

              <div className="my-7">
                <div className="ms-5 flex items-center font-medium">
                  <Mail className="me-2 w-5" />
                  <p>
                    {type === "competition"
                      ? "Deadline Submission"
                      : type === "seminar"
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
                      : type === "seminar"
                        ? "This event is open to :"
                        : "Available to"}
                  </p>
                </div>
                <p className="ms-11 text-[#3E3E3E]">
                  {type === "competition"
                    ? data.details.announcement
                    : type === "seminar"
                      ? data.details.open_to
                      : data.details.available_to}
                </p>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <Button className="mt-5 w-full border-2 border-primary">
            Free Register
          </Button>

          {/* Guidebook Button hanya untuk competition */}
          {type === "competition" && (
            <Button className="mt-2 w-full border-2 border-primary bg-[#F5F5F5] text-primary">
              Guidebook
            </Button>
          )}
        </div>

        {/* Dynamic Details Section */}
        <div className="w-full lg:ms-12 lg:w-3/4">
          <p className="inline-block rounded bg-primary px-2 py-2 text-white">
            {data.category}
          </p>
          <h1 className="pb-6 pt-5 text-3xl font-bold text-primary">
            {data.title}
          </h1>
          <p className="mb-10 text-lg font-medium text-[#3E3E3E]">
            Presented by {data.details.presented_by}
          </p>
          <p className="mb-5 text-xl font-medium">Event Details :</p>
          <div
            className="whitespace-pre-wrap text-[#3E3E3E]"
            dangerouslySetInnerHTML={{
              __html: data.details.description_details,
            }}
          />
        </div>
      </div>
      <img
        src="/img/academic-ellipse-1.png"
        alt="academic-ellipse-1"
        className="absolute left-0 -z-10 w-1/5"
      />

      {/* Upcoming Events */}
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
              type={"academic"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
