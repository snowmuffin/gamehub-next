import { useTranslation } from "react-i18next";

import { Paper, Skeleton, Stack, Typography } from "@mui/material";

import { CopyLabel } from "@/shared/components/CopyLabel";
import { ITEM_PROPS } from "@/shared/redux/inventory";
import { DeferredComponent } from "@/shared/components";

interface AdditionalProps {
  handleClick?: () => void;
  height?: string | number;
  width?: string | number;
  isLoading?: boolean;
}

interface ItemSlotProps extends ITEM_PROPS, AdditionalProps {}

const ItemSkeleton = () => {
  return (
    <Stack
      component={Paper}
      draggable
      direction="column"
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        height: 180,
        width: 180,
        boxShadow: "0 0 6px rgba(0, 0, 0, 0.60)",
        //bgcolor: "#dddddd0",
        p: 1,
        gap: 1,
      }}
    >
      <Skeleton variant="rounded" sx={{ height: 24, width: 164 }} />
      <Skeleton variant="rounded" sx={{ height: 20, width: 70, mr: 12 }} />
      <Skeleton variant="rounded" sx={{ height: 80, width: 80 }} />
      <Skeleton variant="rounded" sx={{ height: 24, width: 70, ml: 12 }} />
    </Stack>
  );
};

const ItemSlot = ({ ...props }: ItemSlotProps) => {
  const { t } = useTranslation();

  return !props.isLoading ? (
    <Stack
      component={Paper}
      onClick={props.handleClick}
      draggable
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        height: props.height ? props.height : 180,
        width: props.width ? props.width : 180,
        //boxShadow: "0 0 6px rgba(250, 6, 6, 0.55)",
        //boxShadow: "0 0 6px rgba(33, 37, 75, 0.788)",
        boxShadow: "0 0 6px rgba(0, 0, 0, 0.60)",
        //bgcolor: "#dddddd0",
        backgroundImage: `url("/Icons/${props.indexName}.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "60%",
        cursor: "pointer",
        p: 1,
      }}
    >
      <CopyLabel
        mainLabel={props.displayName ? props.displayName : "Unknown"}
        subLabel={props.category ? t(props.category) : "Unknown"}
        copyValue={
          props.indexName ? `!cmd downloaditem ${props.indexName} 1` : "Unknown"
        }
      />
      <Typography
        width="100%"
        textAlign="right"
        fontWeight="bold"
        variant="inherit"
      >
        {props.quantity
          ? Number(props.quantity).toLocaleString("ko-KR")
          : "Unknown"}
      </Typography>
    </Stack>
  ) : (
    <DeferredComponent>
      <ItemSkeleton />
    </DeferredComponent>
  );
};

export default ItemSlot;
