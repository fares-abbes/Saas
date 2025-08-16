"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subjects } from "@/constants";

const formSchema = z.object({
  username: z.string().min(1, { message: "companion is required" }),
  subject: z.string().min(1, { message: "subject is required" }),
  topic: z.string().min(1, { message: "topic is required" }),
  voice: z.string().min(1, { message: "voice is required" }),
  style: z.string().min(1, { message: "style is required" }),
  duration: z.number().min(1, { message: "duration is required" }), // FIXED: use z.number() instead of z.coerce.number()
});

type FormSchemaType = z.infer<typeof formSchema>;

const CompanionForm = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: 15,
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (values) => {
    console.log(values);
  };

  return (
    <div className="max-w-md mx-auto py-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Companion name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the companion name"
                    {...field}
                    className="input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="input capitalize">
                      <SelectValue placeholder="select the subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem
                          value={subject}
                          key={subject}
                          className="capitalize"
                        >
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>what should the companion help with?</FormLabel>
                <FormControl>
                  <Input
                    placeholder="derivatives and integrals"
                    {...field}
                    className="input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="voice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>voice</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="input capitalize">
                      <SelectValue placeholder="select the voice" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">male</SelectItem>
                      <SelectItem value="female">female</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Style</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="input capitalize">
                      <SelectValue placeholder="select the style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="formal">formal</SelectItem>
                      <SelectItem value="casual">casual</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estimated Session duration in minutes</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="15"
                    {...field}
                    className="input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full cursor-pointer">
            build your companion
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CompanionForm;
