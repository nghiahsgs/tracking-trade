import {
  createWaitingOrder,
  deleteWaitingOrder,
  updateWaitingOrder,
} from "@/apis/waiting-order";
import { useMutation } from "react-query";

function useActionWaitingOrder() {
  const addOrder = useMutation(createWaitingOrder);
  const updateOrder = useMutation(updateWaitingOrder);
  const deleteOrder = useMutation(deleteWaitingOrder);

  return { addOrder, updateOrder, deleteOrder };
}

export default useActionWaitingOrder;
