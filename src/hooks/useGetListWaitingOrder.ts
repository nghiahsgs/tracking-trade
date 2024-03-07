import { getWaitingOrder } from "@/apis/waiting-order";
import { useQuery } from "react-query";

function useGetWaitingOrder() {
  const waitingOrders = useQuery("waiting-order", getWaitingOrder);
  return waitingOrders;
}

export default useGetWaitingOrder;
