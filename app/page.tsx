// export default function Home() {
//   return (
//     <div>
//       <h4 className="text-2xl text-red-400">HELLO WORLD</h4>
//     </div>
//   );
// }
// import { UserButton } from "@clerk/nextjs";

// export default function Home() {
//   return <UserButton />;
// }

import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  return (
    <div>
      <Button>HELLO NOW!</Button>
    </div>
  );
}
