import { fetchBlog } from "@/app/lib/data";
import Link from "next/link";
import moment from "moment";

const categoryOrder = {
  upcoming: 0,
  orchestra: 1,
  "choral / vocal ensemble": 2,
  chamber: 3,
  dancer: 4,
  "voice + instruments": 5,
  solo: 6,
};

export const revalidate = 60;

export default async function Works() {
  const postsByDate = await fetchBlog();
  console.log(postsByDate);

  return (
    <div className="flex">
      <div className="w-1/6 p-5 hidden md:block md:p-10 relative">
        <ul className="sticky top-20">
          {Object.keys(postsByDate)
            .sort((entryA, entryB) => moment(entryA).isBefore(entryB))
            .map((month) => (
              <li key={month} className="mb-6">
                <Link href={`#${month}`} className="underline font-light">
                  {month.toUpperCase()}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="p-5 md:p-10 text-sm">
        {Object.entries(postsByDate)
          .sort((entryA, entryB) =>
            moment([entryA[0]]).isBefore(categoryOrder[entryB[0]])
          )
          .map(([month, posts]) => {
            return (
              <div key={month} id={month} className="mb-4 scroll-my-24">
                <h2 className="text-xl font-bold mb-6">
                  {month.toUpperCase()}
                </h2>
                {posts.map((post) => {
                  return (
                    <div className="mb-8 text-l" key={post.get("title")}>
                      <div className="mb-4 text-base">
                        <Link
                          href={{
                            pathname: `/works/${post.get("id")}`,
                          }}
                          className="mb-2 font-medium"
                        >
                          {post.get("title")}
                        </Link>
                        <p className="text-sm">{post.get("body")}</p>
                        <p className="text-xs">
                          {moment(post.get("created_date")).format(
                            "MMMM DD, YYYY"
                          )}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
}
