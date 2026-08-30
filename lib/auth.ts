import { cookies } from "next/headers";

export function isAuthenticated(): boolean {
  try {
    const cookieStore = cookies();
    const session = cookieStore.get("unovia_admin_session");
    return session?.value === "authenticated";
  } catch (error) {
    console.error("Auth check failed:", error);
    return false;
  }
}
