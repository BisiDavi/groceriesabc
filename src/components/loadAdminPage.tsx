import React, { useEffect } from "react";
import { useRouter } from "next/router";

const LoadAdminPage = (): JSX.Element => {
  const useUser = () => ({ user: null, loading: false });

  const { user, loading } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!(user || loading)) {
      router.push("/admin");
    }
  }, [user, loading]);

  return <p>Redirecting ...</p>;
};

export default LoadAdminPage;