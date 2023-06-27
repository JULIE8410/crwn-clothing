import Directory from "../../components/directory/directory.component";

const Home = () => {

const categories = [
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  }
];

  return (
    <div>
     {/*
     <Route>
      <Route path="/home" element={<Home />} >
        <Route path="shop" element={<Shop />} />
      </Route>
    </Route/s>
     
    <Outlet /> 
     Outlet 사용하면 Route에서 겹쳐있는 것 출력되게 할 수 있다
      ex) /home/shop 의 경우 /home 와 같은 페이지 출력되는데
          이때 Outlet 사용하면 /home/shop의 페이지가 Outlet 범위에 표시됨
    */}
     
      
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
