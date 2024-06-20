// "use client";
// import { ConvexProviderWithClerk } from "convex/react-clerk";
// import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
//   useAuth,
// } from "@clerk/nextjs";
// import Loader from "@/components/shared/loader";

// type Props = {
//   children: React.ReactNode;
// };

// const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";

// const convex = new ConvexReactClient(CONVEX_URL);

// const ConvexClientProvider = ({ children }: Props) => {
//   return (
//     <ClerkProvider>
//       <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
//         <Authenticated>
//           <SignedOut>
//             <SignInButton />
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//           {children}
//         </Authenticated>
//         <AuthLoading>
//           <Loader />
//         </AuthLoading>
//       </ConvexProviderWithClerk>
//     </ClerkProvider>
//   );
// };

// export default ConvexClientProvider;

"use client";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import Loader from "@/components/shared/loader";

type Props = {
  children: React.ReactNode;
};

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";

const convex = new ConvexReactClient(CONVEX_URL);

const ConvexClientProvider = ({ children }: Props) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <SignedIn>{children}</SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
        <AuthLoading>
          <Loader />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
