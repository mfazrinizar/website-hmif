import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { setMemberData } from "@/lib/networks/profileQueries";
import { useEffect, useState } from "react";
import { ComboBox } from "../ui/combobox";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  instagram: z.string().min(2).max(50),
});

const position_framework = [
  {
    value: "5ad3d06d-5295-4c62-9e31-c1da04b4505a",
    label: "Ketua Himpunan",
  },
  {
    value: "4edc0cf4-e826-45c4-b22a-1c6e650896e0",
    label: "Wakil Ketua Himpunan",
  },
  {
    value: "a499d7ec-c751-4059-bfd5-107bfc040176",
    label: "Sekretaris Umum 1",
  },
  {
    value: "e368f595-5e73-45e9-adea-6f23fcf6f8bb",
    label: "Sekretaris Umum 2",
  },
];

const division_framework = [
  {
    value: "65705216-a957-4734-8af5-c149215f638d",
    label: "inti",
  },
];

export default function FormProfile() {
  const datas: string[] = [
    "name",
    "email",
    "position_id",
    "division_id",
    "instagram",
  ];

  const [positionSelect, setPositionSelect] = useState<string | undefined>();
  const [divisionSelect, setDivisionSelect] = useState<string | undefined>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      instagram: "",
      email: "",
    },
  });

  // useEffect(() => {
  //   console.log(positionSelect, divisionSelect);
  // }, [positionSelect, divisionSelect]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const processedValues = {
      ...values,
      position_id: positionSelect,
      division_id: divisionSelect,
    };
    await setMemberData(processedValues);

    toast("Data Telah Terkirim");
    form.reset();
    setPositionSelect("");
    setDivisionSelect("");
  }

  return (
    <section className="flex items-center justify-center">
      <div className="w-full rounded-xl border-2 border-primary px-10 py-8 lg:w-1/2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {datas.map((data: any) => {
              if (data == "position_id" || data == "division_id") {
                return data == "position_id" ? (
                  <div>
                    <label htmlFor="position" className="text-sm font-medium">
                      Position
                    </label>
                    <ComboBox
                      framework={position_framework}
                      value={positionSelect}
                      setValue={setPositionSelect}
                      id="position"
                    />
                  </div>
                ) : (
                  <div>
                    <label htmlFor="division" className="text-sm font-medium">
                      Division
                    </label>
                    <ComboBox
                      framework={division_framework}
                      value={divisionSelect}
                      setValue={setDivisionSelect}
                      id="division"
                    />
                  </div>
                );
              } else {
                return (
                  <FormField
                    key={data.id}
                    control={form.control}
                    name={data}
                    render={({ field }) => (
                      <FormItem className="flex flex-col justify-start">
                        <FormLabel className="text-start">{data}</FormLabel>
                        <FormControl>
                          <Input type="input" placeholder={data} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                );
              }
            })}

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
