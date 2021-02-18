import React from "react";
import NestedMenu from "./NestedMenu";
import Breadcrumbs from "./Breadcrumbs";

const Page = ({ route }) => {
  return (
    <>
      <Breadcrumbs route={route} />
      <NestedMenu route={route} />
      <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
        THIS IS FILE: {route.label}
      </div>
    </>
  );
};

export default Page;
