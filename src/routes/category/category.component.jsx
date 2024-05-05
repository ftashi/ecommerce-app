
import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';

import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap, selectIsCategoriesLoading } from '../../store/categories/category.selector';
import './category.styles.scss'

const Category = () =>{
  const { category }  = useParams();
  const categoriesMap = useSelector(selectCategoriesMap)
  const  [products, setProducts] = useState(categoriesMap[category]);

  const isLoading = useSelector(selectIsCategoriesLoading)

useEffect(() => {
setProducts(categoriesMap[category]);
}, [category, categoriesMap]);

   return(
<Fragment>
<h2 className='category-title'>{category.toUpperCase()}</h2>
     
     {
      isLoading ? <Spinner /> : 

       <div className='category-container'>
  {products && 
    products.map((product) => 
    (<ProductCard key={product.id} product={product} />))
  }
  </div>
     }

 
</Fragment>

  )
}
export default Category;