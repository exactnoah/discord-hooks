// Fetches the latest comic from xkcd and formats it for Discord
export async function produceComicChaos() {
  const res = await fetch("https://xkcd.com/info.0.json");
  if (!res.ok) throw new Error(`xkcd API failed: ${res.status}`);
  const comic = await res.json();
  
  const maxNum = comic.num;
  const randomNum = Math.floor(Math.random() * maxNum) + 1;

  const resRandom = await fetch(`https://xkcd.com/${randomNum}/info.0.json`);
  if (!resRandom.ok) throw new Error(`xkcd API failed for comic #${randomNum}: ${resRandom.status}`);
  const comicRandom = await resRandom.json();

  // Format: Title, alt text, and link to the comic
  return `**${comicRandom.safe_title}**\n-#(#${comicRandom.num})\n"${comicRandom.alt}"\n[Image Link](${comicRandom.img})`;
}
