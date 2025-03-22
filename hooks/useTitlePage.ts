import { useEffect } from "react";

const useTitlePage = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]); // Runs whenever the title changes
};

export default useTitlePage;
