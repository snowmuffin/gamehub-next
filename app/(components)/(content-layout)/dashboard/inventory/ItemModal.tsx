import {
  Avatar,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import type { ChangeEvent } from "react";

import { CopyLabel } from "@/shared/components/CopyLabel";
import CustomIconButton from "@/shared/components/CustomIconButton";
import CustomStack from "@/shared/components/CustomStack";
import { useTranslation, useAppDispatch, useAppSelector } from "@/shared/hooks";

// Replace Material-UI icons with simple text icons
const CloseIcon = () => <span>✕</span>;
const ArrowForwardOutlinedIcon = () => <span>→</span>;
const AddOutlinedIcon = () => <span>+</span>;
const RemoveOutlinedIcon = () => <span>-</span>;

import { inventoryActions, selectInventory } from "@/shared/redux/inventory";
import { snackbarActions } from "@/shared/redux/snackbar";

interface ItemModalProps {
  handleClose?: () => void;
  handleSubmit?: () => void;
}

const ItemModal = ({ handleClose, handleSubmit }: ItemModalProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { modalData, isSubmit, submitQuantity, submitPrice } = useAppSelector(selectInventory);

  const hanldeChangeQuantity = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    const newValue = Number(value.replace(/\D/g, ""));

    if (name === "price") {
      dispatch(inventoryActions.INVENTORY_CHANGE_MODAL_ITEMS_PRICE(newValue));
    } else {
      dispatch(inventoryActions.INVENTORY_CHANGE_MODAL_ITEMS_QTY(newValue));
    }
  };

  const onSubmit = () => {
    if (modalData && submitQuantity && submitPrice) {
      const submitData = {
        itemName: modalData?.indexName ? modalData?.indexName : "",
        quantity: submitQuantity,
        price: submitPrice
      };
      dispatch(inventoryActions.INVENTORY_REQUEST_SUBMIT(submitData));
    } else {
      dispatch(
        snackbarActions.SNACKBAR_PUSH({
          message: t("submit_item_fail"),
          type: "error"
        })
      );
    }
  };

  return (
    <Stack
      direction="column"
      component={Paper}
      //draggable
      sx={{ minHeight: 450, minWidth: 600 }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="item_modal_title">
        <Typography fontWeight="bold" sx={{ fontSize: 22 }}>
          {t("item_modal_title")}
        </Typography>
      </DialogTitle>
      <IconButton
        onClick={handleClose}
        color="error"
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          borderRadius: 1
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        dividers
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start"
        }}
      >
        {modalData ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              //height: 250,
              width: "100%",
              gap: 1
              //p: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                height: 150,
                width: "100%",
                gap: 1
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 0 6px rgba(0, 0, 0, 0.60)"
                }}
              >
                <Avatar
                  alt="Unknown"
                  src={`/Icons/${modalData.indexName}.svg`}
                  sx={{ height: 150, width: 150, borderRadius: 1 }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  height: 150,
                  width: "100%",
                  p: 1
                }}
              >
                <CopyLabel
                  mainLabel={modalData.displayName ? modalData.displayName : "Unknown"}
                  subLabel={modalData.category ? t(modalData.category) : "Unknown"}
                  copyValue={
                    modalData.indexName ? `!cmd downloaditem ${modalData.indexName} 1` : "Unknown"
                  }
                />
                <Typography minHeight={80} width="100%" textAlign="left" variant="body2">
                  {modalData.description ? t(modalData.description) : "Unknown"}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "100%",
                    gap: 1
                  }}
                >
                  <CustomStack fullHeight fullWidth>
                    {isSubmit ? (
                      <CustomStack row fullWidth gap={1}>
                        <CustomStack fullWidth justifyContent="space-between" gap={1}>
                          <Typography
                            width="100%"
                            maxWidth={120}
                            textAlign="left"
                            fontWeight="bold"
                            variant="inherit"
                          >
                            {t("submit_quantity")}
                          </Typography>
                          <CustomStack>
                            <CustomIconButton
                              size="small"
                              color="warning"
                              tooltip={t("min_quantity")}
                              icon={<RemoveOutlinedIcon />}
                              onClick={() =>
                                dispatch(inventoryActions.INVENTORY_CHANGE_MODAL_ITEMS_QTY(1))
                              }
                              sx={{ borderRadius: 1 }}
                            />
                            <TextField
                              name="quantity"
                              variant="standard"
                              value={
                                submitQuantity
                                  ? submitQuantity.toLocaleString("ko-KR")
                                  : submitQuantity
                              }
                              onChange={hanldeChangeQuantity}
                              slotProps={{
                                htmlInput: {
                                  sx: { textAlign: "right" }
                                }
                              }}
                              sx={{ width: "160px" }}
                            />
                            <CustomIconButton
                              size="small"
                              color="info"
                              tooltip={t("max_quantity")}
                              icon={<AddOutlinedIcon />}
                              onClick={() =>
                                dispatch(
                                  inventoryActions.INVENTORY_CHANGE_MODAL_ITEMS_QTY(
                                    modalData.quantity ? modalData.quantity : 999999999
                                  )
                                )
                              }
                              sx={{ borderRadius: 1 }}
                            />
                          </CustomStack>
                        </CustomStack>
                        <CustomStack fullWidth gap={1} justifyContent="space-between">
                          <Typography
                            width="100%"
                            maxWidth={120}
                            textAlign="left"
                            fontWeight="bold"
                            variant="inherit"
                          >
                            {t("submit_price")}
                          </Typography>
                          <CustomStack width={228}>
                            <TextField
                              name="price"
                              variant="standard"
                              value={
                                submitPrice ? submitPrice.toLocaleString("ko-KR") : submitPrice
                              }
                              onChange={hanldeChangeQuantity}
                              slotProps={{
                                htmlInput: {
                                  sx: { textAlign: "right" }
                                }
                              }}
                              sx={{ width: "160px" }}
                            />
                          </CustomStack>
                        </CustomStack>
                      </CustomStack>
                    ) : (
                      <CustomStack fullWidth>
                        <Typography
                          width="100%"
                          textAlign="left"
                          fontWeight="bold"
                          variant="inherit"
                        >
                          {modalData.quantity
                            ? isSubmit
                              ? t("submit_quantity")
                              : t("quantity")
                            : "Unknown"}
                        </Typography>
                        <Typography width="100%" textAlign="right" variant="inherit">
                          {modalData.quantity
                            ? `${Number(modalData.quantity).toLocaleString("ko-KR")}`
                            : "Unknown"}
                        </Typography>
                      </CustomStack>
                    )}
                  </CustomStack>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          disabled={submitPrice && submitPrice > 0 ? false : isSubmit ? true : false}
          color={isSubmit ? "success" : "info"}
          endIcon={<ArrowForwardOutlinedIcon />}
          onClick={isSubmit ? onSubmit : handleSubmit}
        >
          {t("submit")}
        </Button>
      </DialogActions>
    </Stack>
  );
};
export default ItemModal;
