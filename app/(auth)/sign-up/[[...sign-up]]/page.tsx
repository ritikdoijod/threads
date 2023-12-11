import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const Page = () => {
  return (
    <SignUp
      appearance={{
        baseTheme: dark,
      }}
    />
  );
};

export default Page;
