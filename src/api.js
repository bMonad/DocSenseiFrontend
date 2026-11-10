const API = import.meta.env.VITE_API_URL ?? "";

async function readError(res) {
  try {
    const body = await res.json();
    if (typeof body.detail === "string") return body.detail;
  } catch {
    /* not JSON */
  }
  return `Request failed (${res.status})`
}

async function json(res) {
  if (!res.ok) throw new Error(await readError(res));
  return res.json()
}


export async function getHealthStatus(signal) {
  const response = await fetch(`${API}/api/health`, { signal });
  if (!response.ok) throw new Error(`Health check failed (${response.status})`);
}


export async function uploadPdf(file, signal) {
  const form = new FormData();
  form.append("file", file);
  return json(
    await fetch(`${API}/api/documents`,
      { method: "POST", body: form, signal })
  );
}
