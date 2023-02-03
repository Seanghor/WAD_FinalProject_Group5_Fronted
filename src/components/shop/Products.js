import {React,useRef , useState, useEffect} from 'react'
import '../.././pages/styles/shop.css';
import Slider from '@mui/material/Slider';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
const Products = () => {
  const categoriesList = useRef(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  let componentMounted= true;

  useEffect(() => {
    const getProducts = async() => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      if(componentMounted){
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        
      }
      return ()=>{
       componentMounted = false;
      }
    }
    getProducts();
  }, []);
  // Loading Process
  const Loading = () => {
    return (
      <>
      <div className="col-sm-4 py-2">
        <Skeleton height={350}/>
      </div>
      <div className="col-sm-4 py-2">
        <Skeleton height={350}/>
      </div>
      <div className="col-sm-4 py-2">
        <Skeleton height={350}/>
      </div>
      </>
    );
  }

  const filterProdcut = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  }

  const SelectCategory = () => {
    return(
      <>

      </>
    );
  }
  // Show Product Process
  const ShowProducts = () => {
    return(
      <>
      {
        filter.map((product) => {
          return (
            <>
            <div className="col-sm-4 py-2">
              <div className="card h-100 text-center p-4">
                <div className="card-main">
                  <div className="new">New</div>
                  <div className="">
                    <img src={product.image} alt="" className='card-img-top' height="250px" />
                  </div>
                  <div classNave="cart-line"></div>
                </div>

                <div class="content">
                  <h6 id="productTitle" className='card-title mb-0'>{product.title.substring(0,12)}</h6>
                  <div class="rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p><span class="money">$ {product.price}</span><span class="price-old">$ {product.price.toFixed(1) + 5}</span></p>
                  <NavLink to={`/products/${product.id}`}  className='btn btn-outline-dark'>Buy Now</NavLink>
                  </div>
              </div>
            </div>
            </>
          );
        })
      }
      </>
    );
    }
  return (
    <>
      <section className='bg-color'>
        {/* Filter Row And Search bar Start */}
        <div className="d-flex">
          <div className="p-2 flex-fill">
            <div className="filter" id="Filter">
              <div className="filterIcon">
                <i class="bi bi-filter"></i> <span>Filter</span>
              </div>
              <div className="vl"></div>
              <span>Show 1-16 of 32 results</span>
            </div>
          </div>
          <div className="p-2 flex-fill">
           {/* Search bar Start */}
           <div className="col-md-5 mx-auto pt-4">
           <form className="d-flex flex-row position-relative">
              <input type="search" className="form-control" id="example-search-input"/>
              <button class="btn border-0 position-absolute end-0 " type="submit">
                <i class="bi bi-search" style={{color: "blue"}}></i>
              </button>
            </form>
           </div>
           {/* Search bar End */}
        </div>
      </div>
      {/* Filter Row And Search bar End */}

      {/* Category & Product Card Start */}
      <div className="row">
        {/* Left Sidee */}
        <div className="col-12 col-sm-3">
          <div className="filter">
            {/* Category List Start */}
            <div className="Category">
              <h3>Categories</h3>
              <div className="categorylist">
                <li className="col-2 link" onClick={() => setFilter(data)}>All</li>
                <p className=" cateQty">10</p>
              </div>
              <div className="categorylist">
                <li className="col-2 link" onClick={() => filterProdcut("men's clothing")}>Men's Clothing</li>
                <p className=" cateQty">10</p>
              </div>
              <div className="categorylist">
                <li className="col-2 link" onClick={() => filterProdcut("women's clothing")}>Women's clothing</li>
                <p className=" cateQty">10</p>
              </div>
              <div className="categorylist">
                <li className="col-2 link" onClick={() => filterProdcut("jewelery")}>Jewelery</li>
                <p className=" cateQty">10</p>
              </div>
              <div className="categorylist">
                <li className="col-2 link" onClick={() => filterProdcut("electronics")}>Electronic</li>
                <p className=" cateQty">10</p>
              </div>
            </div>
            {/* Category List End */}

            {/* Price Slider Start */}
            <div class="Price">
              <h3>Price</h3>
              <div data-role="page">
                <div data-role="main" class="ui-content">
                  <form method="post" action="/action_page_post.php">
                    <Slider
                      aria-label="Temperature"
                      defaultValue={30}
                      color="secondary"
                    />
                    <p class="priceRange">Price : $20 - $400</p>
                    </form>
                </div>
              </div>
            </div>
            {/* Price Slider End */}

            {/* Brand Start */}
            <div className="Brand">
              <h3>Brand</h3>
              <div className="brandList">
                <div className="categorylist">
                  <li className="col-2 link">Studio</li>
                </div>
                <div className="categorylist">
                  <li className="col-2 link">Hastech</li>
                </div>
                <div className="categorylist">
                  <li className="col-2 link">Quicklin</li>
                </div>
                <div className="categorylist">
                  <li className="col-2 link">Graphic Corner</li>
                </div>
                <div className="categorylist">
                  <li className="col-2 link">DevItem</li>
                </div>  
              </div>
            </div>
            {/* Brand End */}
          </div>
        </div>

        {/* Right Side */}
        <div className="col-12 col-sm-9">
          {/* Card Start */}
          <div className="row">
           {/* {
            loading ? <Loading/> : <ShowProducts/>
           } */}
          </div>

          {/* Pagination Start */}
         
          {/* Pagination End */}
        </div>
      </div>
    
      {/* Category & Product Card End */}

      <div className="d-flex ServiceDetail" id="service">
        <div className="p-2 flex-fill">
          <h1>Free Delivery</h1>
          <h5>For all orders over $50$, consectetur adipiscing elit </h5>
        </div>
        <div className="p-2 flex-fill">
          <h1>90 Days Return</h1>
          <h5>If goods have problems, consectetur adipiscing elit</h5>
        </div>
        <div className="p-2 flex-fill">
          <h1>Secure Payment</h1>
          <h5>100% Secure payment, consectetur adipiscing elit</h5>
        </div>
      </div>
      </section>
    </>
  )
}

export default Products
