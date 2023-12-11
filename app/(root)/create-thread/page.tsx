import PostThread from "@/components/forms/PostThread";
import { currentUser } from "@clerk/nextjs";
import { FormField } from "@/components/ui/form";
import { Form } from "react-hook-form";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <>
      <h1 className="head-text">Create Thread</h1>
      <PostThread userId={userInfo._id} />
    </>
  );
};

export default Page;
