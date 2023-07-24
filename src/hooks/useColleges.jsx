import { useEffect, useState } from "react";

const useColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://campus-explorer-server.vercel.app/colleges")
      .then((res) => res.json())
      .then(
        (data) => {
          setColleges(data);
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
  }, []);

  return { colleges, loading, error };
};

export default useColleges;
