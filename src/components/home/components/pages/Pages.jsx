import React from "react"
import FlashDeals from "../components/flashDeals/FlashDeals"
import Shop from "../components/shops/Shop"
import AnnocumentHome from "../components/annocument/AnnocumentHome"
import Wrapper from "../components/wrapper/Wrapper"
import LastReviews from "../components/reviews/lastReviews"
import PagesReviews from "../components/reviews/pageReviews"
import SliderHome from "../components/MainPage/Slider"
import TopHome from "../components/Top/Top"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <SliderHome/>
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopHome />
      <AnnocumentHome />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Wrapper />
      <PagesReviews />
      <Wrapper />
      <LastReviews />
    </>
  )
}

export default Pages
