export default async function handler(req, res) {
  try {
    const response = await fetch('https://ubilling.net.ua/aerialalerts/?xml=true');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(data);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}
