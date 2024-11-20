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
  assets: z.string().min(2, {
    message: "Assets must be at least 2 characters.",
  }),
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
      assets: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const processedValues = {
      ...values,
      benefits: values.benefits
        ? values.benefits.split(",").map((item) => item.trim())
        : [],
      assets: values.assets
        ? values.assets.split(",").map((item) => item.trim())
        : [],
    };

    console.log(processedValues);
    await setProkerData(processedValues);
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
