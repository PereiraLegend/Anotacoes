const url = 'http://localhost:3000/produtos'

async function getData() {
  const res = await fetch(url)
  
  return res.json()
}