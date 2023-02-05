export async function getCareers() {
  const res = await fetch('http://127.0.0.1:1337/api/careers');
  const data = await res.json();

  return data;
}
