import { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/common/Loader";
import Body from "./components/Body/index";
import { mockData } from "../../constants/common";
import Layout from "../../components/common/Layout";
const Head = lazy(() => import("./components/Head"));

const PackageDetailScreen = () => {
  const { id } = useParams();
  const [packageDetail, setPackageDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch(`http://localhost:8080/packages/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPackageDetail(data);
    //     setLoading(false);
    //   });
    const fetchData = () => {
      const data = mockData.find((pg) => pg.id === id);
      setPackageDetail(data);
    };
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout title={packageDetail?.title}>
      <section>
        <div className="max-w-screen-xl mx-auto p-content__padding">
          <Suspense>
            <Head packageDetail={packageDetail} />
          </Suspense>

          <Body packageDetail={packageDetail} id={id} />
        </div>
      </section>
    </Layout>
  );
};

export default PackageDetailScreen;
