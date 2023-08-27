import React from "react";
import ETreeView from "./etreeview";
import Button from "./button";
import { useLocation } from "react-router-dom";

interface IETreeViewItem {
  id: string;
  label: string;
  children: Array<IETreeViewItem>;
}

const treeData: Array<IETreeViewItem> = [
  {
    id: "1",
    label: "General",
    children: [],
  },
  {
    id: "2",
    label: "Premium",
    children: [
      {
        id: "3",
        label: "Front Row",
        children: [],
      },
      {
        id: "4",
        label: "Sky Box",
        children: [],
      },
      {
        id: "5",
        label: "+",
        children: [],
      },
    ],
  },
  {
    id: "6",
    label: "VIP",
    children: [],
  },
  {
    id: "7",
    label: "Staff",
    children: [
      {
        id: "8",
        label: "Manager",
        children: [],
      },
      {
        id: "9",
        label: "Employee",
        children: [],
      },
      {
        id: "10",
        label: "Special",
        children: [],
      },
      {
        id: "11",
        label: "Staff",
        children: [],
      },
    ],
  },
];

const SideBar = () => {
  const location = useLocation();
  return (
    <div
      className={[
        "side-bar",
        location.pathname.endsWith("not-found") ? "invisible" : "",
      ].join(" ")}
    >
      <div className="side-bar__content">
        <ETreeView treeData={treeData} />
      </div>
      <div className="side-bar__add-category">
        <span style={{
          color: "white",
          fontSize: "3vmin",
          textAlign: "center",
        }}>Add Category +</span>
      {/* <Button
        color="white"
        fontSize={"3vmin"}
        fontWeight="bold"
        paddingVertical={20}
        fixedHeight
        height={"8vmin"}
      >
        Add Category +
      </Button> */}
      </div>
    </div>
  );
};

export default SideBar;
