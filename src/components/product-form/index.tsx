"use client";
import React, { ReactNode } from "react";
import ProductFooter from "./components/product-footer";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function ProductForm({
  children,
  defaultValues,
}: {
  children: ReactNode;
  defaultValues: any;
}) {
  const form = useForm({
    defaultValues,
  });

  const onSubmit = async (data: any) => {
    data.defaultValues = undefined;
    const res = await fetch("https://piller.com.tr/wp-admin/admin-ajax.php?action=invio_mail",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
    alert("Teklif isteğiniz alınmıştır. En kısa sürede dönüş yapılacaktır.");
    console.log(res)
  };
  return (
    <>
      <FormProvider {...form}>
        <form
          className="flex flex-col gap-10"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {children}
        </form>
      </FormProvider>
      <DevTool control={form.control} /> {/* set up the dev tool */}
    </>
  );
}
