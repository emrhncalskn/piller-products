import Input from "@/components/form-elements/input";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { debounce } from "lodash";
export default function TextOption({ name, ...rest }: any) {
  const { control } = useFormContext();

  const debounceChange = (func: any) => debounce(func, 300);

  if (rest.type === "color") {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            type="color"
            {...rest}
            {...field}
            onChange={(e) =>
              debounceChange(() => field.onChange(e.target.value))
            }
          />
        )}
      />
    );
  }
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Input {...rest} {...field} />}
    />
  );
}
