//  pages/about.js

export default function About() {
  return <h1>About Page</h1>;
}

export async function getStaticProps(context) {
  return {
    redirect: {
      destination: "/",
      permanent: true, // triggers 308
    },
  };
}
