import React from "react";
import { DATA } from "../../utils";

export const AdminData = () => {
  return (
    <div>
      {DATA.length &&
        DATA.map((d) => (
          <p key={d.id}>
            {d.name} --{">"} {d.age}
          </p>
        ))}
    </div>
  );
};
