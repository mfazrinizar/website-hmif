import NavTabs from "@/components/NavTabs";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import TableDashboard from "@/components/Admin-Dashboard/TableDashboard";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormDashboard from "@/components/Admin-Dashboard/FormDashboard";

const pages = ["academic", "proker", "profile"];

export default function Dashboard() {
  return (
    <section id="admin-dashboard">
      <Tabs defaultValue="academic" className="text-center">
        <h1 className="mb-8 text-center text-2xl font-bold text-primary xl:text-4xl">
          Our Kabinet
        </h1>
        <NavTabs>
          <div className="flex">
            {pages.map((item, key) => (
              <TabsTrigger value={item} key={key + item}>
                {item}
              </TabsTrigger>
            ))}
          </div>
        </NavTabs>
        {pages.map((item, key) => (
          <TabsContent value={item} id={item} key={key + item}>
            <FormDashboard tableName={item} />
            <TableDashboard tableName={item} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
