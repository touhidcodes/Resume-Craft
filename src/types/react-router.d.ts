// src/types/react-router.d.ts

import "react-router-dom";

declare module "react-router-dom" {
  // Extend the Location type to include `state`
  export interface Location {
    state?: {
      from?: {
        pathname: string;
      };
    };
  }
}
