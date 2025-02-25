import { getToken } from "@/lib/actions";
import { BASE_URL } from "../config";

export async function addAgent(payload: {
  agent_id: number;
  property_id: number;
  commission: string;
  end_date: string;
}) {
  try {
    const token = await getToken();

    const res = await fetch(`${BASE_URL}/private/v1/agent-assignment/assign`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorRes = await res
        .json()
        .catch(() => ({ message: "Unknown error occurred" }));
      return {
        success: false,
        error: errorRes.message || "Failed to add agent",
      };
    }

    const data = await res.json();
    return { success: true, data: data.data };
  } catch (error) {
    console.error("Error adding agent:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}

export async function searchAgentByEmail(email: string) {
  try {
    const token = await getToken();

    const res = await fetch(
      `${BASE_URL}/private/v1/agent-assignment/search-by-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email }),
      },
    );

    if (!res.ok) {
      const errorRes = await res
        .json()
        .catch(() => ({ message: "Unknown error occurred" }));
      return {
        success: false,
        error: errorRes.message || "Failed to search agent",
      };
    }

    const data = await res.json();
    return { success: true, data: data.data };
  } catch (error) {
    console.error("Error searching agent:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}
