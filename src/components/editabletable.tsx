import React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PencilSvg from "../assets/svgs/pencil.svg";
import TrashSvg from "../assets/svgs/trash.svg";
import WarningSvg from "../assets/svgs/warning.svg";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IEditableTableProps {
  colorTheme?: string;
}

const Editabletable: React.FC<IEditableTableProps> = ({
  colorTheme = "dark",
}) => {
  const [removalItemIndex, setRemovalItemIndex] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = (itemIndex: string) => {
    setOpen(true);
    setRemovalItemIndex(itemIndex);
  };
  const handleClose = () => setOpen(false);
  return (
    <div className="component-editabletable">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
        return (
          <div
            className="component-editabletable__item"
            key={index}
            id={`editable-item-${index}`}
            style={{
              backgroundColor: colorTheme === "dark" ? "#000000cc" : "#102F82",
            }}
          >
            <div className="component-editabletable__item__title">
              #{index}
              {index + 1}
              {index + 2}
            </div>
            <div className="component-editabletable__item__edit">
              <img src={PencilSvg} style={{ width: 30 }} />
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Confirmation Dialog
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Willing to remove this item?
                </Typography>
                <Button
                  style={{
                    backgroundColor: "grey",
                    color: "white",
                    marginLeft: 300,
                    marginTop: 30,
                  }}
                  onClick={() => {
                    if (removalItemIndex.length === 0) return;
                    const elementToRemove =
                      document.getElementById(removalItemIndex);
                    if (elementToRemove) {
                      elementToRemove.remove();
                    }
                    handleClose();
                  }}
                >
                  Yes
                </Button>
              </Box>
            </Modal>
            <div
              className="component-editabletable__item__remove"
              onClick={() => {
                handleOpen(`editable-item-${index}`);
              }}
            >
              <img src={TrashSvg} style={{ width: 30 }} />
            </div>
            <div className="component-editabletable__item__warning">
              <img src={WarningSvg} style={{ width: 30 }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Editabletable;
