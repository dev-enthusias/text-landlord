import { useState } from "react";
import SelectInput from "../ui/select-input";

export default function AgentForm() {
  const [propertyType, setPropertyType] = useState("");

  return (
    <form>
      {" "}
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

        <button
          type="submit"
          className="w-full rounded-lg bg-primary py-3 font-semibold transition-colors duration-300 ease-out hover:bg-primary/80"
        >
          Assign
        </button>
      </fieldset>
    </form>
  );
}
