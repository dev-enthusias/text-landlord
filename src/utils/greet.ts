export default function greetUser() {
  const date = new Date();
  const hour = date.getHours();

  return hour < 12
    ? "Good morning"
    : hour < 18
      ? "Good afternoon"
      : "Good evening";
}
