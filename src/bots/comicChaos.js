// Fetches the latest comic from xkcd and formats it for Discord
export async function produceComicChaos() {
  const res = await fetch("https://xkcd.com/info.0.json");
  if (!res.ok) throw new Error(`xkcd API failed: ${res.status}`);
  const comic = await res.json();
  
  // Format: Title, alt text, and link to the comic
  return `**${comic.safe_title}** (Comic #${comic.num})\n\n"${comic.alt}"\n\n${comic.img}`;
}
