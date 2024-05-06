"use client";
import Button from "@/components/form-elements/button";
import Input from "@/components/form-elements/input";
import React from "react";
import { useFormContext } from "react-hook-form";
import TextOption from "./text-option";

export default function ProductFooter() {
  const form = useFormContext();
  return (
    <div className="erc-product-footer">
      <div className="flex gap flex-col items-center gap-6">
        <TextOption name="email" type="email" placeholder="Mail Adresiniz" />
        <Button type="submit">Teklif İste</Button>
      </div>
    </div>
  );
}
