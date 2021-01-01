import React from "react";

const API = async (url, abortSignal) => {
  const response = await fetch(url, { signal: abortSignal });
  return response.json();
};

export const useStateAPI = (url) => {
  const [value, setValue] = React.useState(null);
  React.useEffect(() => {
    // This is the abort controller that will cancel the fetch if the component was unmounted
    const controller = new AbortController();
    const signal = controller.signal;

    let mounted = true;

    const fetchData = async () => {
      try {
        const data = await API(url, signal);
        setValue(data.graphql);
      } catch (e) {
        console.log(e);
      }
    };

    if (mounted) {
      fetchData();
    }

    return () => {
      mounted = false;
      controller.abort();
    };
  }, [url]);

  return value;
};
