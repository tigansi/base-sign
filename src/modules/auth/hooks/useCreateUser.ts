import { useState } from "react";

export const useCreateUser = () => {
  const [openCloseDialog, setOpenCloseDialog] = useState<boolean>(false);

  const onOpenCloseDialog = () => {
    if (openCloseDialog) {
      setOpenCloseDialog(false);
    } else {
      setOpenCloseDialog(true);
    }
  };

  return {
    onOpenCloseDialog,
    openCloseDialog,
  };
};
