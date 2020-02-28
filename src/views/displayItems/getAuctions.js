import { getAuctions } from "../../common/repository";
const getAuctionAPI = async user => {
  const response = await getAuctions(user);
  const body = await response.json();

  return body;
};
export default getAuctionAPI;
