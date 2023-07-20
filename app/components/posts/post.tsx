import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import Date from "../date";

type PostData = {
  id: string;
  date: string;
  title: string;
};

export const Post = ({ id, title, date }: PostData): JSX.Element => {
  return (
    <li className={utilStyles.listItem} key={id}>
      <Link href={`/${id}`}>{title}</Link>
      <br />
      <small className={utilStyles.lightText}>
        <Date dateString={date} />
      </small>
    </li>
  );
};
