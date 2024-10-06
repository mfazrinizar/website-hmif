"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { submitAspiration } from "@/lib/networks/aspirationQueries";
import { Aspiration } from "@/lib/types/aspirationType";
import { RateLimiter } from "@/lib/rateLimiter";

const rateLimiter = new RateLimiter({ windowSize: 10000, maxRequests: 2 });

const formSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email(),
  message: z.string().min(1).max(50),
});

export function FormAspiration() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: Aspiration) {
    // Apply rate limiting
    if (rateLimiter.limit()) {
      alert("Mohon tunggu sebelum mengirim aspirasi lagi.");
      return;
    }

    const aspirationResp = await submitAspiration(values);
    if (aspirationResp === "success") {
      alert("Aspirasi Anda berhasil terkirim!");
    } else {
      alert("Ada kesalahan saat mengirim aspirasi.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto flex flex-col gap-10 p-10 text-start md:w-3/4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Message</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-10 w-full text-xl" size={"lg"}>
          Send Message
        </Button>
      </form>
    </Form>
  );
}
