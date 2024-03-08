import {
  createWaitingOrder,
  deleteWaitingOrder,
  updateWaitingOrder,
} from "@/apis/waiting-order";
import toastState from "@/stores/toast";
import { useMutation, useQueryClient } from "react-query";
import { useSetRecoilState } from "recoil";

function useActionWaitingOrder() {
  const queryClient = useQueryClient();
  const setToastState = useSetRecoilState(toastState);

  const addOrder = useMutation(createWaitingOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries("waiting-order");
      setToastState({
        message: "Create waiting order successfully",
        type: "info",
      });
    },
  });
  const updateOrder = useMutation(updateWaitingOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries("waiting-order");
      setToastState({
        message: "Update waiting order successfully",
        type: "info",
      });
    },
  });
  const deleteOrder = useMutation(deleteWaitingOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries("waiting-order");
      setToastState({
        message: "Delete waiting order successfully",
        type: "info",
      });
    },
  });

  return { addOrder, updateOrder, deleteOrder };
}

export default useActionWaitingOrder;
