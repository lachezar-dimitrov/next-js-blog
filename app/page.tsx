import { Post } from "./components/posts/post";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "./styles/utils.module.css";

const Home = (): JSX.Element => {
  const allPostsData = getSortedPostsData();

  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <Post key={id} id={id} date={date} title={title} />
        ))}
      </ul>
    </section>
  );
};

export default Home;
