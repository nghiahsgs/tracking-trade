import {
  createWaitingOrder,
  deleteWaitingOrder,
  updateWaitingOrder,
} from "@/apis/waiting-order";
import { useMutation, useQueryClient } from "react-query";

function useActionWaitingOrder() {
  const queryClient = useQueryClient();
  const addOrder = useMutation(createWaitingOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries("waiting-order");
    },
  });
  const updateOrder = useMutation(updateWaitingOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries("waiting-order");
    },
  });
  const deleteOrder = useMutation(deleteWaitingOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries("waiting-order");
    },
  });

  return { addOrder, updateOrder, deleteOrder };
}

export default useActionWaitingOrder;
