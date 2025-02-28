export function formatDateToLong(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Converts a Unix timestamp in milliseconds to a time format like "04:00am"
 * @param {number} timestamp - Unix timestamp in milliseconds
 * @returns {string} Time in format "hh:mmam" or "hh:mmpm"
 */
export function convertTimestampToTimeFormat(timestamp: number): string {
  const date = new Date(timestamp);

  // Get hours and minutes separately to ensure we include minutes when they're zero
  let hours = date.getHours();
  const minutes = date.getMinutes();

  // Format for 12-hour clock
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // Convert 0 to 12 for 12am

  // Ensure two digits for hours and minutes
  const hoursStr = hours < 10 ? "0" + hours : hours.toString();
  const minutesStr = minutes < 10 ? "0" + minutes : minutes.toString();

  // Build the formatted time string
  return `${hoursStr}:${minutesStr} ${ampm}`;
}
