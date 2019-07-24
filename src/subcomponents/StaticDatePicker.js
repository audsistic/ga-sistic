import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";

const StaticDatePicker = () => {
  const [date, changeDate] = useState(new Date());

  // prettier-ignore
  return (
    <>
      <DatePicker
        autoOk
        disableToolbar
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={changeDate}
      />
    </>
  );
};

export default StaticDatePicker;