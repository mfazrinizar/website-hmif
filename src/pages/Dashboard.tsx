import NavTabs from "@/components/NavTabs";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import TableDashboard from "@/components/Admin-Dashboard/TableDashboard";
import { getTableStructureWithFunction } from "@/lib/networks/tableQueries";

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
    <section id="admin-dashboard">
      <Tabs defaultValue="academic_competition" className="text-center">
        <h1 className="mb-8 text-center text-2xl font-bold text-primary xl:text-4xl">
          Our Kabinet
        </h1>
        <NavTabs>
          <div className="flex overflow-x-auto">
            {pages.map((item, key) => (
              <TabsTrigger value={item} key={key + item}>
                {item}
              </TabsTrigger>
            ))}
          </div>
        </NavTabs>
        {pages.map((item, key) => (
          <TabsContent value={item} id={item} key={key + item}>
            <TableDashboard tableName={item} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
