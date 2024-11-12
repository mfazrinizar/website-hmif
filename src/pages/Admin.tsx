"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

import { signInUser, getUser } from "@/lib/networks/adminQueries";
import { useQuery } from "@tanstack/react-query";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(2).max(50),
});

export default function Admin() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (await signInUser(values)) navigate("/admin/dashboard");

    // const { data } = useQuery<any, Error>({
    //   queryKey: ["user"],
    //   queryFn: () =>
    //     new Promise<any>((resolve, reject) => {
    //       getUser()
    //         .then((res) => {
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
    // });

    // console.log(data);
    // console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto mt-40 space-y-8 md:w-1/2"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
