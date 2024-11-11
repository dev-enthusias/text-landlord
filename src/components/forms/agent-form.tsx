import { useState } from "react";
import SelectInput from "../ui/select-input";
import SubmitButton from "./submit-button";

export default function AgentForm() {
  const [propertyType, setPropertyType] = useState("");

  return (
    <form>
      <fieldset className="space-y-4">
        <SelectInput
          label="Properties"
          options={[{ value: "land", label: "Land" }]}
          value={propertyType}
          onChange={setPropertyType}
          placeholder="State"
        />
        <SelectInput
          label="Agents"
          options={[{ value: "land", label: "Land" }]}
          value={propertyType}
          onChange={setPropertyType}
          placeholder="City"
        />

        <SubmitButton isSubmitting={false} text="Submit" />
      </fieldset>
    </form>
  );
}
