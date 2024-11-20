import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { getTableStructureWithFunction } from "@/lib/networks/tableQueries";

interface Column {
  column_name: string;
  data_type: string;
  is_nullable: string;
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  date: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  event_format: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  dinas: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  benefits: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  assets: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function FormDashboard({ tableName }: { tableName: string }) {
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const { data, error, isLoading } = useQuery<Column[], Error>({
    queryKey: [tableName], // Unique query key
    queryFn: () =>
      new Promise<Column[]>((resolve, reject) => {
        getTableStructureWithFunction(tableName)
          .then((res) => {
            console.log(res);
            if (res) {
              resolve(res);
            } else {
              reject("No data found");
            }
          })
          .catch((err) => {
            reject(err);
          });
      }),
    enabled: !!tableName,
  });

  data?.map((e) => console.log(e.data_type));

  return (
    <section className="flex items-center justify-center">
      <div className="w-full rounded-xl border-2 border-primary px-10 py-8 lg:w-1/2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {data?.map((e) => {
              if (e.column_name != "id") {
                if (e.data_type == "ARRAY") {
                  return <div></div>;
                } else {
                  return (
                    <FormField
                      control={form.control}
                      name={e.column_name}
                      render={({ field }) => (
                        <FormItem className="flex flex-col justify-start">
                          <FormLabel className="text-start">
                            {e.column_name}
                          </FormLabel>
                          <FormControl>
                            <Input type="" placeholder="shadcn" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  );
                }
              }
            })}

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
