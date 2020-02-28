import React from "react";
import { arrayOf, number, string, shape } from "prop-types";
import Box from "../box";
const propTypes = {
  data: arrayOf(
    shape({
      auction_id: number.isRequired,
      title: string.isRequired,
      image_url: string,
      initial_bid: number.isRequired,
      exp_date: string.isRequired
    })
  )
};
function RenderProducts(props) {
  if (!props.data) return null;
  const data = props.data;

  const allProducts =
    data.length !== 0
      ? data.map(data => <Box key={data.auction_id} data={data} />)
      : null;
  return allProducts;
}

RenderProducts.propTypes = propTypes;
export default RenderProducts;
