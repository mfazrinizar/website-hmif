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
import { useDataByName } from "@/lib/networks/adminQueries";
import { setMemberData, updateMemberData } from "@/lib/networks/profileQueries";
import { useEffect, useRef, useState } from "react";
import { ComboBox } from "../ui/combobox";
import { toast } from "sonner";
import { useDashboardContext } from "@/lib/context/dashboardContext";
import { supabase } from "@/lib/createClient";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  instagram: z.string().min(2).max(50),
  assets: z
    .array(z.instanceof(File))
    .nonempty("Harap unggah minimal satu foto"),
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
  {
    value: "a095d168-808c-4f29-b564-8acafb037203",
    label: "kominfo",
  },
];

export default function FormProfile() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const datas: string[] = [
    "name",
    "email",
    "position_id",
    "division_id",
    "instagram",
    "assets",
  ];

  const { formData }: any = useDashboardContext();

  const [positionSelect, setPositionSelect] = useState<
    { value: any; label: any } | undefined
  >({ value: "", label: "" });
  const [divisionSelect, setDivisionSelect] = useState<
    { value: any; label: any } | undefined
  >({ value: "", label: "" });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      instagram: "",
      email: "",
      assets: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (formData) {
        const processedValues = {
          ...values,
          position_id: positionSelect!.value,
          division_id: divisionSelect!.value,
        };

        const { data, error } = await updateMemberData(processedValues);
        console.log(data, error);

        toast("Data Telah Terkirim");
        form.reset();
        setPositionSelect({ value: "", label: "" });
        setDivisionSelect({ value: "", label: "" });
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        const { assets } = values;
        let indexImg = 0;
        const pathImage: any = [];

        function getIndexImg() {
          if (indexImg == 0) {
            indexImg++;
            return "";
          } else {
            return indexImg++;
          }
        }

        const label = divisionSelect!.label;

        await Promise.all(
          assets.map(async (file: any) => {
            const fileName =
              `${values.name
                .toLowerCase()
                .replace(/[^a-z\s]/g, "")
                .split(" ")
                .join("_")}` + getIndexImg();
            const { data: uploadData, error: uploadError } =
              await supabase.storage
                .from(`img/profile/${label}`)
                .upload(fileName, file);

            if (uploadError) {
              throw new Error(
                `Gagal upload foto ${values.name}: ${uploadError.message}`,
              );
            }

            pathImage.push(`/img/profile/${label}/${fileName}`);
          }),
        );

        const processedValues = {
          ...values,
          position_id: positionSelect!.value,
          division_id: divisionSelect!.value,
          assets: pathImage,
        };

        await setMemberData(processedValues);

        toast("Data Telah Terkirim");
        form.reset();
        setPositionSelect({ value: "", label: "" });
        setDivisionSelect({ value: "", label: "" });
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  function searchLabel(value: any) {
    division_framework.filter((item) => item.value === value);
  }

  useEffect(() => {
    if (formData) {
      form.reset({
        name: formData.name,
        instagram: formData.instagram,
        email: formData.email,
        assets: formData.assets,
      });
    }

    setPositionSelect({
      value: formData ? formData.position_id : "",
      label: searchLabel(formData ? formData.position_id : ""),
    });
    setDivisionSelect({
      value: formData ? formData.division_id : "",
      label: searchLabel(formData ? formData.division_id : ""),
    });

    console.log(formData);
  }, [formData]);

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
              } else if (data == "assets") {
                return (
                  <FormField
                    key={data.id}
                    control={form.control}
                    name={data}
                    render={({ field }) => (
                      <FormItem className="flex flex-col justify-start">
                        <FormLabel className="text-start">{data}</FormLabel>
                        <FormControl>
                          <Input
                            ref={fileInputRef}
                            type="file"
                            multiple
                            accept="image/*"
                            placeholder={data}
                            onChange={(e) => {
                              const files = e.target.files
                                ? Array.from(e.target.files)
                                : [];
                              field.onChange(files);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
