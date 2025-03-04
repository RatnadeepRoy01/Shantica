import { cookies } from "next/headers";
import { redirect } from "next/navigation";

  async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/"); // Redirect if not authenticated
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>Your token: {token}</p>
    </div>
  );
}

export default DashboardPage;
