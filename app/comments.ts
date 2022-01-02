// export function to get hacker news comments from array of comment id
export async function getComments(ids) {
  const comments = await Promise.all(
    ids.map(async (id) => {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      return await response.json();
    })
  );
  return comments;
}
