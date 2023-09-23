import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../../components/common/Loader";
import Head from "./components/Head";
import Body from "./components/Body/index";

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
      <div className="max-w-screen-xl mx-auto p-content__padding">
        <Head previews={packageDetail?.previews} />
        <Body packageDetail={packageDetail} id={id} />
      </div>
    </section>
  );
};

export default PackageDetailScreen;
