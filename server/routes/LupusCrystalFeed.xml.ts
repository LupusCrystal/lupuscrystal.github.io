import RSS from 'rss';

export default defineEventHandler(async (event) => {
  const { slug } = getRouterParams(event)  
  const blog_posts = await queryCollection(event, "blog")
  .select("title", "description", "path", "date")
  .order("date", "DESC")
  .all()

  const feed = new RSS({
    title: "LupusCrystal",
    site_url: "https://lupuscrystal.github.io",
    feed_url: "https://lupuscrystal.github.io/LupusCrystalFeed.xml",
  });

  for (const post of blog_posts) {
    feed.item({
      title: post.title || "",
      description: post.description,
      author: "LupusCrystal",
      date: post.date,
      url: `https://lupuscrystal.github.io${post.path}`,
    });
  }

  setHeaders(event, { 'Content-Type': 'application/rss+xml' });
  return feed.xml();
});
