import Head from "next/head";
import Link from "next/link";
import { PostId, getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../components/date";
import styles from "../layout.module.css";
import utilStyles from "../styles/utils.module.css";

type Params = PostId;

type StaticParams = {
  params: Params;
  searchParams: URLSearchParams;
};

export default async function Post({
  params,
}: StaticParams): Promise<JSX.Element> {
  const postData = await getPostData(params.id);

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div className={styles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    </>
  );
}

export const generateStaticParams = (): PostId[] => getAllPostIds();
