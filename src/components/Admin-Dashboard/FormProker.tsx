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
import { setProkerData } from "@/lib/networks/prokerQueries";
import { supabase } from "@/lib/createClient";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  date: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
  event_format: z.string().min(2, {
    message: "Event format must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "description must be at least 2 characters.",
  }),
  dinas: z.string().min(2, {
    message: "Dinas must be at least 2 characters.",
  }),
  benefits: z.string().min(2, {
    message: "Benefits must be at least 2 characters.",
  }),
  assets: z
    .array(z.instanceof(File))
    .nonempty("Harap unggah minimal satu foto"),
});

export default function FormProker() {
  const datas: string[] = [
    "name",
    "date",
    "event_format",
    "description",
    "dinas",
    "benefits",
    "assets",
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      date: "",
      event_format: "",
      description: "",
      dinas: "",
      benefits: "",
      assets: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
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

      assets.map(async (file: any) => {
        const fileName =
          `${values.name.toLowerCase().split(" ").join("_")}` + getIndexImg();
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from(`img/proker/${values.dinas.toLowerCase()}`)
          .upload(fileName, file);

        if (uploadError) {
          throw new Error(
            `Gagal upload foto ${values.name}: ${uploadError.message}`,
          );
        }

        pathImage.push(`/img/proker/${values.dinas.toLowerCase()}/${fileName}`);
      });

      const processedValues = {
        ...values,
        dinas: values.dinas.toLowerCase(),
        benefits: values.benefits
          ? values.benefits.split(",").map((item) => item.trim())
          : [],
        assets: pathImage,
      };

      console.log(processedValues);
      await setProkerData(processedValues);
      alert("Data berhasil disimpan!");
      form.reset();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="flex items-center justify-center">
      <div className="w-full rounded-xl border-2 border-primary px-10 py-8 lg:w-1/2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {datas.map((data: any) => {
              if (data == "benefits" && data == "assets") {
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
                            type=""
                            placeholder={`${data} 1, ${data} 2, ...`}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                          <Input type="" placeholder={data} {...field} />
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
