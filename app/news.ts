export async function getFrontNews() {
  //Hit the hacker news api and get the front page stories
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const stories = await response.json();
  //Get the top 10 stories
  const topStories = stories.slice(0, 10);
  //Get the details of each story
  const news = await Promise.all(
    topStories.map(async (story) => {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${story}.json`
      );
      return await response.json();
    })
  );
  return news;
}

export async function getNews(id) {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  return await response.json();
}

//create a function to get the story and its comments
export async function getStory(id) {
  const story = await getNews(id);
  const comments = await getComments(story.kids);
  return { story, comments };
}

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

//export function to get all comments for a hacker news post including the child comments
export async function getAllComments(id) {
  let allComments = [];
  const story = await getNews(id);
  if (story.kids) {
    const comments = await getComments(story.kids);
    allComments = await getAllCommentsRecursive(comments);
  }
  return { story, allComments };
}

export async function getAllCommentsRecursive(comments) {
  const allComments = await Promise.all(
    comments.map(async (comment) => {
      if (comment.kids) {
        const childComments = await getComments(comment.kids);
        return {
          ...comment,
          childComments: await getAllCommentsRecursive(childComments),
        };
      }
      return comment;
    })
  );
  return allComments;
}
