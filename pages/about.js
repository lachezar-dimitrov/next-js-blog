//  pages/about.js
export async function getStaticProps(context) {
  return {
    redirect: {
      destination: "/",
      permanent: true, // triggers 308
    },
  };
}
