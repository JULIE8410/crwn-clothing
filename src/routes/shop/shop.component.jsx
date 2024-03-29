import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

//import { useContext, Fragment } from "react";
//import { CategoriesContext } from "../../contexts/categories.context";
// import ProductCard from "../../components/product-card/product-card.component";
//import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./shop.styles.scss";

const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<Category />}/>
    </Routes>
  );


  // const { categoriesMap } = useContext(CategoriesContext);

  // return (
  //   <div className="shop-container">
  //     {Object.keys(categoriesMap).map((title) => {
  //           const products = categoriesMap[title];
  //           return <CategoryPreview key={title} title={title} products={products} />
  //     })}
  //   </div>
  // );
};

export default Shop;
