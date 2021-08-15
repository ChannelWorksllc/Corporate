// ページ遷移時にトップへ戻り、遷移先でトップを表示するための記述

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(function(){
      window.scrollTo(0, 0);
    }, 230)
  }, [pathname]);

  return null;
}