import React from "react";

import ThriveHeader from "../components/ThriveHeader";
import ThriveText from "../components/ThriveText";
import ThriveIconCardGrid from "../components/ThriveIconCardGrid";

const Thrive = () => {
  return (
    <>
      <ThriveHeader />
      <ThriveText style={{ textAlign: 'center', fontWeight: 300 }} />
      <ThriveIconCardGrid />
    </>
  );
};

export default Thrive;
