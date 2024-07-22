const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

async function getTmdbData(urlApi) {
  try {
    const res = await fetch(urlApi, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(`${res.status} - ${data.status_message || 'Unknown error'}`);
    }

    const data = await res.json();
    return data;
  } catch(err) {
    console.error(err);
  }
}

export default getTmdbData;