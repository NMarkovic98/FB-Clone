export async function getCareers(){

    const res = await fetch('http://localhost:1337/api/careers');
    const data = await res.json();

    return data;
}