import AppointmentCard from "@/components/ui/appointment-card";
import PrevPageButton from "@/components/ui/prev-page";
import { getAppointments } from "@/api/services/appointment";
import { AppointmentRDT } from "@/definitions/tenant";

export default async function Appointments() {
  const appointments = (await getAppointments()) as AppointmentRDT;

  return (
    <section>
      <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-2">
          <PrevPageButton className="text-black" />
          <h1 className="text-xl font-semibold text-black">Appointments</h1>
        </div>
      </header>

      <section className="px-3 py-5 lg:px-10 lg:py-7">
        <div className="grid gap-3 lg:grid-cols-2 lg:gap-5 xl:grid-cols-3">
          {appointments.data.list.map((appointment) => (
            <AppointmentCard key={appointment.id} data={appointment} />
          ))}
        </div>
      </section>
    </section>
  );
}
