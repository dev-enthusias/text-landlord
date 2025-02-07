import { BookAppointmentDataType } from "@/definition";
import { getToken } from "@/lib/actions";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getAppointments = async () => {
  const token = await getToken();

  try {
    const response = await fetch(`${BASE_URL}/private/v1/appointment/list`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching appointment list:", error);
  }
};

export const deleteAppointment = async (id: number) => {
  const token = await getToken();

  try {
    const response = await fetch(
      `${BASE_URL}/private/v1/appointment/remove/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting:", error);
  }
};

export const postAppointment = async (credentials: BookAppointmentDataType) => {
  const token = await getToken();

  try {
    const response = await fetch(`${BASE_URL}/private/v1/appointment/create`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating appointment:", error);
  }
};

export const updateAppointment = async (credentials: {
  name: string;
  phone: string;
  email: string;
  property_address: string;
  message: string;
  date: string;
  time: string;
  property_id: number;
  property_owner_id: number;
}) => {
  const token = await getToken();

  try {
    const response = await fetch(
      `${BASE_URL}/private/v1/appointment/update/${credentials.property_id}`,
      {
        method: "PUT",
        body: JSON.stringify(credentials),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating appointment:", error);
  }
};

export const cancelAppointment = async (id: number) => {
  const token = await getToken();

  try {
    const response = await fetch(
      `${BASE_URL}/private/v1/appointment/cancel/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error cancelling appointment:", error);
  }
};
