import NavTabs from "@/components/NavTabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableDashboard from "@/components/Admin-Dashboard/TableDashboard";
import FormDashboard from "@/components/Admin-Dashboard/FormDashboard";

const pages = [
  "academic_competition",
  "academic_competition_details",
  "academic_scholarship",
  "academic_scholarship_details",
  "academic_seminar",
  "academic_seminar_details",
  "proker",
  "member",
];

export default function Dashboard() {
  return (
    <section id="admin-dashboard" className="-mx-5 md:-mx-12 xl:-mx-20">
      <Tabs defaultValue="academic_competition" className="flex">
        <div>
          <TabsList className="fixed bottom-0 top-0 flex h-full w-1/3 flex-col items-start justify-start border-r-2 border-primary px-4 pt-8">
            <a href="/" className="mb-10">
              <div className="flex gap-4">
                <img
                  src="/img/logo-hmif.png"
                  alt="logo-hmif"
                  className="size-12 xl:size-16"
                />
                <div className="flex flex-col justify-center text-primary">
                  <h1 className="text-xl font-bold md:text-2xl xl:text-3xl">
                    HMIF UNSRI
                  </h1>
                  <p className="text-xs font-medium xl:text-sm">
                    Kuatkan Formasi Wujudkan Inovasi
                  </p>
                </div>
              </div>
            </a>
            {pages.map((item, key) => (
              <TabsTrigger value={item} key={key + item} className="my-2">
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {pages.map((item, key) => (
          <TabsContent
            value={item}
            id={item}
            key={key + item}
            className="relative left-1/3 w-2/3 px-10"
          >
            <FormDashboard tableName={item} />
            <TableDashboard tableName={item} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
