import React from "react";
import OptionContainer from "../option-container";
import { Spec } from "@/types/spec";
import RadioButtons from "../radio-buttons";
import RadioButton from "../radio-button";
import ColorButton from "../color-button";
import Input from "@/components/form-elements/input";
import CarModelSelect from "../car-model-select";
import TextOption from "../text-option";

export default function ProductSpecifications({
  title,
  specs,
}: {
  title: string;
  specs: Spec[];
}) {
  const createSpec = (spec: Spec) => {
    switch (spec.type) {
      case "radio":
        return (
          <RadioButtons>
            {spec.options?.map((option) => (
              <RadioButton
                key={option.value}
                id={option.value}
                name={spec.name}
                value={option.value}
                label={option.label}
                isCircle={spec.subType === "circle"}
              />
            ))}
          </RadioButtons>
        );
      case "color":
        return (
          <RadioButtons>
            {spec.options?.map((option) => (
              <ColorButton
                key={option.value}
                backgroundColor={option.value}
                id={option.value}
                name={spec.name}
              />
            ))}
          </RadioButtons>
        );
      case "text":
        return (
          <TextOption
            type={spec.subType === "color" ? "color" : "text"}
            name={spec.name}
            placeholder={spec.placeholder}
          />
        );
      case "car-select":
        return <CarModelSelect />;
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <header>
        <h3 className="text-3xl">{title}</h3>
      </header>

      <section className="flex flex-col gap-2.5">
        {specs.map((spec) => (
          <OptionContainer key={spec.title} title={spec.title}>
            {createSpec(spec)}
          </OptionContainer>
        ))}
      </section>
    </div>
  );
}
