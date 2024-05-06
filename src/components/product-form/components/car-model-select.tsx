"use client";
import Input from "@/components/form-elements/input";
import Select from "@/components/form-elements/select";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import TextOption from "./text-option";

export default function CarModelSelect() {
  const form = useFormContext();

  const selectedCar = form.watch("car");
  const [isCustomCar, setIsCustomCar] = React.useState(false);

  useEffect(() => {
    console.log(selectedCar);
    if (selectedCar === "diger") {
      setIsCustomCar(true);
      form.register("car-custom", { required: true });
    } else {
      setIsCustomCar(false);
      form.unregister("car-custom");
    }
  }, [selectedCar]);

  return (
    <div className="flex flex-col gap-6 ahmet emir">
      <Select {...form.register("car", { required: true })}>
        <option value="">Aracınızı Seçin</option>
        <optgroup label="BMW">
          <option value="BMW 740Le xDrive">BMW 740Le xDrive</option>
          <option value="BMW i3 94Ah LCI">BMW i3 94Ah LCI</option>
          <option value="BMW i8 Coupé LCI">BMW i8 Coupé LCI</option>
        </optgroup>
        <optgroup label="Honda">
          <option value="Honda NSX">Honda NSX</option>
        </optgroup>
        <optgroup label="Hyundai">
          <option value="Hyundai IONIQ">Hyundai IONIQ</option>
          <option value="Hyundai Kona">Hyundai Kona</option>
        </optgroup>
        <optgroup label="Jaguar">
          <option value="Jaguar I-PACE">Jaguar I-PACE</option>
        </optgroup>
        <optgroup label="Kia">
          <option value="Kia Niro">Kia Niro</option>
        </optgroup>
        <optgroup label="Mercedes">
          <option value="Mercedes EQC">Mercedes EQC</option>
          <option value="Mercedes GLC 350 e">Mercedes GLC 350 e</option>
        </optgroup>
        <optgroup label="Nissan">
          <option value="Nissan Leaf">Nissan Leaf</option>
        </optgroup>
        <optgroup label="Renault">
          <option value="Renault Zoe">Renault Zoe</option>
        </optgroup>
        <optgroup label="Smart">
          <option value="Smart EQ">Smart EQ</option>
        </optgroup>
        <optgroup label="Tesla">
          <option value="Tesla Model 3">Tesla Model 3</option>
          <option value="Tesla Model S">Tesla Model S</option>
          <option value="Tesla Model X">Tesla Model X</option>
        </optgroup>
        <optgroup label="Toyota">
          <option value="Toyota Auris">Toyota Auris</option>
          <option value="Toyota CH-R">Toyota CH-R</option>
          <option value="Toyota Prius">Toyota Prius</option>
          <option value="Toyota RAV 4">Toyota RAV 4</option>
          <option value="Toyota Yaris">Toyota Yaris</option>
        </optgroup>
        <optgroup label="Volvo">
          <option value="Volvo S90 T8 Twin Engine">
            Volvo S90 T8 Twin Engine
          </option>
          <option value="Volvo XC90 T8 Twin Engine">
            Volvo XC90 T8 Twin Engine
          </option>
        </optgroup>

        <option value="diger">Diğer</option>
      </Select>
      {isCustomCar && (
        <TextOption name="car-custom" type="text" placeholder="Diğer" />
      )}
    </div>
  );
}
