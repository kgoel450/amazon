import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://img.freepik.com/premium-vector/end-year-sale-word-concept-vector-illustration-with-lines-3d-style-landing-page-template_680598-115.jpg?w=2000"
          alt=""
        />

        <div className="home__row">
        <Product
            id="89538694"
            title="New Balance-5740 DayDream"
            price={10500}
            rating={5}
            image="https://superkicks.in/wp-content/uploads/2022/12/2-1-4-850x850.jpg"
          />
          <Product
            id="53538694"
            title="WMN’S ADILETTE ESSENTIAL ‘BLACK/WHITE’"
            price={4500}
            rating={3}
            image="https://superkicks.in/wp-content/uploads/2023/01/2-34.jpg"
          />
          <Product
            id="49538094"
            title="AIR DELDON ‘SUMMIT WHITE/INDIGO STORM’"
            price={10000}
            rating={4}
            image="https://superkicks.in/wp-content/uploads/2023/01/2-72-850x850.jpg"
          />
          <Product
            id="89538694"
            title="New Balance-237 NIMBUS CLOUD"
            price={7500}
            rating={5}
            image="https://superkicks.in/wp-content/uploads/2022/12/2-12-1.jpg"
          />
          <Product
            id="89538094"
            title="AIR MAX 90 LTR ‘PEARL PINK/BAROQUE BROWN’"
            price={12000}
            rating={3}
            image="https://superkicks.in/wp-content/uploads/2023/01/FD0789-600-4-1-850x850.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            id="12321341"
            title="Chilln with FRIENDS-official laptop Stcicker"
            price={100}
            rating={3}
            image="https://www.redwolf.in/image/cache/catalog/stickers/chillin-with-friends-sticker-india-700x700.jpg"
          />
          <Product
            id="23445930"
            title="Friends Frame Pendent"
            price={200}
            rating={5}
            image="https://cdn.vibecity.in/providers/61e093d4909dc300a8adadb8/Screenshot20220621041351_1d60d038-c921-41eb-ac9a-8083f621f32d.webp"
          />
           <Product
            id="23695930"
            title="Hi I am Chandler – Frame"
            price={499}
            rating={5}
            image="https://images.bestofbharat.com/2021/07/10-1024x1024.jpg"
          />
          <Product
            id="3254354345"
            title="Friends hugsy soft toy"
            price={1500}
            rating={3}
            image="https://canary.contestimg.wish.com/api/webimage/5e008fdf4f4ccd3dedbf7f25-large.jpg"
          />
        </div>

       
        <div className="home__row">
        <Product
            id="89538100"
            title="Iphone 14"
            price={70500}
            rating={5}
            image="https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg"
          />
          <Product
            id="20933914"
            title="MacBook Pro"
            price={200000}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Y30DpqRVL._SX522_.jpg"
          />
          <Product
            id="100698094"
            title="Iphone 14 pro max"
            price={150000}
            rating={5}
            image="https://www.reliancedigital.in/medias/Apple-iPhone-14-Pro-Max-Mobile-Phone-493177802-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzk2N3xpbWFnZS9qcGVnfGltYWdlcy9oM2EvaGM1Lzk4OTA3MzQxNDU1NjYuanBnfDE2ZDAxYjgwYmYxZjFmZGFiZDQwMWZkNzUyMzYyYTc4Yjc2MDVkZWUyYWJjODkxMjFhY2MyMzk3M2MyYWIyMTY"
          />
          <Product
            id="40038694"
            title="Ipad Mini"
            price={50000}
            rating={5}
            image="https://m.media-amazon.com/images/I/71xAVVHscdL._SX679_.jpg"
          />
          <Product
            id="58938094"
            title="Apple watch ultra"
            price={30000}
            rating={3}
            image="https://m.media-amazon.com/images/I/91z5KuonXrL._SX679_.jpg"
          />
        </div>


        <div className="home__row">
        <Product
            id="44421341"
            title="Boat: Rockerz 550"
            price={2000}
            rating={5}
            image="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0d8d4561-6985-44ba-9e70-4998c40f4df3_600x.png?v=1625046144"
          />
          <Product
            id="23445930"
            title="Boat: Rockerz 150"
            price={1200}
            rating={3}
            image="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/709d5346-3135-495f-ba7b-80fae784af83_600x.png?v=1625045493"
          />
           <Product
            id="48795930"
            title="Boat: Rockerz 450R"
            price={1600}
            rating={5}
            image="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_17432771-6821-4dbf-86ac-9cb7c8dfe460_600x.png?v=1658829303"
          />
          <Product
            id="690054345"
            title="Boat : Airdopes 161"
            price={2500}
            rating={4}
            image="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_fa1c6ec3-93b7-443e-ae82-d5eeb34258f8_600x.png?v=1641206192"
          />
        </div>

        <div className="home__row">
        <Product
            id="44429941"
            title="Ikigai: The Japanese secret to a long and happy life [Hardcover] García, Héctor and Miralles, Francesc Hardcover – 27 September 2017"
            price={450}
            rating={5}
            image="https://m.media-amazon.com/images/I/814L+vq01mL.jpg"
          />
          <Product
            id="99445930"
            title="Pride & Prejudice (Deluxe Hardbound Edition) Hardcover – 1 June 2018"
            price={499}
            rating={4}
            image="https://m.media-amazon.com/images/I/81WF2uHd-iS.jpg"
          />
           <Product
            id="00095930"
            title="Little Women (Vintage Classics) Paperback – 2 August 2012"
            price={151}
            rating={4}
            image="https://m.media-amazon.com/images/I/91ORJa-xI9L.jpg"
          />
        </div>
        
      </div>
    </div>
  );
}

export default Home;