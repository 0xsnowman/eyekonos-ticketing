import React, { useEffect, useState } from "react";
import ETreeView from "./etreeview";
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
  const [addStyle, setAddStyle] = useState('')

  useEffect(()=>{
    if(location.pathname == "/"
     || location.pathname.endsWith("/event-creator/new-event")
     || location.pathname.endsWith("/event-creator/create-event")
    ) setAddStyle("none")
    else setAddStyle("block")
  }, [location])

  return (
    <div
      className={[
        "side-bar",
        location.pathname.endsWith("not-found") ? "invisible" : "",
      ].join(" ")}
      style={{display:addStyle, minWidth:"20vmin"}}
    >
      <div className="side-bar__content">
        <ETreeView treeData={treeData} />
      </div>
      <div className="side-bar__add-category">
      Add Category +
      </div>
    </div>
  );
};

export default SideBar;
