import { useLoaderData } from "remix";

import { getFrontNews } from "~/news";
import { getComments } from "~/comments";

export const loader = () => {
  return getFrontNews();
};

export default function IndexRoute() {
  let news = useLoaderData();

  return (
    <div>
      <h1 className="drac-heading-2xl drac-text-pink-purple">
        Hacker News Front Page
      </h1>
      <ul>
        {news.map((news) => (
          <li
            variant="subtle"
            className="drac-list drac-box drac-card drac-card-subtle drac-border-pink drac-bg-pink drac-p-md drac-m-md"
          >
            <a
              href={`/item/${news.id}`}
              className="drac-anchor drac-text drac-line-height drac-text-pink"
            >
              {news.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
