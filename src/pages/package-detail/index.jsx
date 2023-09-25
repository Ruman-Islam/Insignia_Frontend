import { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/common/Loader";
// import Head from "./components/Head";
import Body from "./components/Body/index";
import { Helmet } from "react-helmet";
const Head = lazy(() => import("./components/Head"));

const PackageDetailScreen = () => {
  const { id } = useParams();
  const [packageDetail, setPackageDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/packages/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPackageDetail(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Insignia - {packageDetail?.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="max-w-screen-xl mx-auto p-content__padding">
        <Suspense>
          <Head packageDetail={packageDetail} />
        </Suspense>

        <Body packageDetail={packageDetail} id={id} />
      </div>
    </section>
  );
};

export default PackageDetailScreen;
