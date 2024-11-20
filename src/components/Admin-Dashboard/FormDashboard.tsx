import FormProker from "./FormProker";

// interface Column {
//   column_name: string;
//   data_type: string;
//   is_nullable: string;
// }

// const formSchema = z.object({
//   name: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   date: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   event_format: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   description: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   dinas: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   benefits: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   assets: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// });

export default function FormDashboard({ tableName }: { tableName: string }) {
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     name: "",
  //     date: "",
  //     event_format: "",
  //     description: "",
  //     dinas: "",
  //     benefits: "",
  //     assets: "",
  //   },
  // });

  switch (tableName) {
    case "proker":
      return <FormProker />;
  }

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   const processedValues = {
  //     ...values,
  //     benefits: values.benefits
  //       ? values.benefits.split(",").map((item) => item.trim())
  //       : [],
  //     assets: values.assets
  //       ? values.assets.split(",").map((item) => item.trim())
  //       : [],
  //   };

  //   console.log(processedValues);
  // }

  // const { data, error, isLoading } = useQuery<Column[], Error>({
  //   queryKey: [tableName], // Unique query key
  //   queryFn: () =>
  //     new Promise<Column[]>((resolve, reject) => {
  //       getTableStructureWithFunction(tableName)
  //         .then((res) => {
  //           // console.log(res);
  //           if (res) {
  //             resolve(res);
  //           } else {
  //             reject("No data found");
  //           }
  //         })
  //         .catch((err) => {
  //           reject(err);
  //         });
  //     }),
  //   enabled: !!tableName,
  // });

  return <section className="flex items-center justify-center"></section>;
}
