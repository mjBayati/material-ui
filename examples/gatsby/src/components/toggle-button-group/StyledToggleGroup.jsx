import {styled} from "@mui/material/styles";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const StyledToggleGroup = styled(ToggleButtonGroup)(({theme}) => ({
    border: 0,
    "& .Mui-selected": {
        backgroundColor: theme.palette.primary.main + " !important",
        color: theme.palette.background.default + " !important",
        boxShadow: theme.shadows["1"],
    },
}));

export default StyledToggleGroup;