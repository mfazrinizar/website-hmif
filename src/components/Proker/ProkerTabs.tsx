import NavTabs from '../NavTabs';
import { Tabs, TabsContent } from '../ui/tabs';
import ProkerCards from './ProkerCards';

export default function ProkerTabs() {
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

  return (
    <Tabs defaultValue="inti" className="text-center">
    <h1 className="mb-8 pt-0 md:pt-8 lg:pt-0 text-center text-2xl font-bold text-primary xl:text-4xl">
      Our Kabinet
    </h1>
    <NavTabs />
    {dinas.map((item) => (
      <TabsContent value={item}>
        <ProkerCards dinas={item}/> 
      </TabsContent>
    ))}
  </Tabs>
  )
}
