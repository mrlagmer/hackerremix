import { useLoaderData } from "remix";

import { getAllComments } from "~/news";
import Comment from "~/components/Comment";

export const loader = ({ params }) => {
  return getAllComments(params.itemId);
};

export default function IndexRoute() {
  let news = useLoaderData();
  return (
    <div>
      <a href={news.story.url} target="_blank">
        <h1 className="drac-heading-2xl drac-text-pink-purple">
          {news.story.title}
        </h1>
      </a>
      {news?.allComments?.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
}
