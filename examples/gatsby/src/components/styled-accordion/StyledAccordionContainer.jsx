import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";

const StyledAccordion = styled(Accordion)(({
    "&.MuiPaper-root.MuiAccordion-root": {
        marginTop: 10,
    },
    "&:before": {
        display: "none",
    }
}))

export default StyledAccordion;