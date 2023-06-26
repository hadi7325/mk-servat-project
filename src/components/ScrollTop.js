import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const  pathname = useLocation();
  const loaction = pathname.pathname = "../components/single-product/SingleProduct.js"
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loaction]);

  return null;
}