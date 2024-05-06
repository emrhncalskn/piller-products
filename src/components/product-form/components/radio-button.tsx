"use client";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

export default function RadioButton({
  id,
  name,
  value,
  label,
  isCircle,
}: {
  id: string;
  name: string;
  value: string;
  label: string;
  isCircle: boolean;
}) {
  const form = useFormContext();

  const [checked, setChecked] = useState(false);
  const watch = form.watch(name);

  useEffect(() => {
    if (watch === value) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [watch]);

  return (
    <>
      <input
        className="
            w-0 h-0 opacity-0 absolute
        "
        type="radio"
        id={id}
        value={value}
        required
        {...form.register(name)}
      />
      <label
        htmlFor={id}
        className={clsx(
          "cursor-pointer border flex justify-center items-center  border-solid ",
          isCircle ? " w-5 h-5 p-6 rounded-full" : "rounded-[40px] p-4 px-5",
          checked ? "bg-[#2a50fe] text-white border-[#2a50fe]" : "border-black"
        )}
      >
        {label}
      </label>
    </>
  );
}
