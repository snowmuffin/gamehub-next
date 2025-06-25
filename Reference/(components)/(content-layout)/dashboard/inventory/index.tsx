import { useTranslation } from "react-i18next";

import { Dialog, Grid2, Stack, Typography } from "@mui/material";

import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { inventoryActions, selectInventory } from "@/shared/redux/inventory";

import EmptyContents from "@/shared/components/EmptyContents";

import ItemSlot from "./ItemSlot";
import ItemModal from "./ItemModal";
import { DeferredComponent } from "@/shared/components";

const InventoryEntity = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { items, isOpen, isLoading, isSuccess, blankItem } =
    useAppSelector(selectInventory);

  const handleClose = () =>
    dispatch(inventoryActions.INVENTORY_CHANGE_MODAL({ isOpen: false }));

  const handleSubmit = () =>
    dispatch(inventoryActions.INVENTORY_SUBMIT_MODE(true));

  const InventorySkeleton = () => {
    if (blankItem) {
      const result = [];
      for (let i = 0; i < blankItem; i++) {
        result.push(<ItemSlot key={`inventorySkeleton_${i}`} isLoading />);
      }
      return result;
    }
  };

  return (
    <Stack
      id="inventory_wrap"
      direction="column"
      sx={{ justifyContent: "flex-start", alignItems: "center", gap: 1 }}
    >
      <Typography fontWeight="bold" variant="h4">
        {t("my_inventory")}
      </Typography>
      <Grid2
        id="inventory_box"
        container
        spacing={2}
        sx={{
          height: { xs: 700, sm: "100%" },
          width: "100%",
          overflow: "auto",
          p: 0.5,
        }}
      >
        {isSuccess ? (
          items &&
          items.map((item) => {
            return (
              <ItemSlot
                key={item.indexName}
                handleClick={() =>
                  dispatch(
                    inventoryActions.INVENTORY_CHANGE_MODAL({
                      isOpen: true,
                      indexName: item?.indexName,
                    })
                  )
                }
                {...item}
              />
            );
          })
        ) : isLoading ? (
          <DeferredComponent>
            <InventorySkeleton />
          </DeferredComponent>
        ) : (
          <EmptyContents
            empty_msg1="inventory_is_empty_msg_1"
            empty_msg2="inventory_is_empty_msg_2"
          />
        )}
      </Grid2>
      <Dialog open={isOpen ? isOpen : false} onClose={handleClose}>
        <ItemModal handleClose={handleClose} handleSubmit={handleSubmit} />
      </Dialog>
    </Stack>
  );
};

export default InventoryEntity;

/* 나중에 써먹어볼만한 메뉴
      component={"div"}
      onContextMenu={handleContextMenu}
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleClose = () => {
    setContextMenu(null);
  };

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null
    );
  };

      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleClose}>Copy</MenuItem>
        <MenuItem onClick={handleClose}>Print</MenuItem>
        <MenuItem onClick={handleClose}>Highlight</MenuItem>
        <MenuItem onClick={handleClose}>Email</MenuItem>
      </Menu>
*/
