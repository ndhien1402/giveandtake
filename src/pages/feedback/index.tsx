import UserLayout from "layouts/UserLayout";
import { ReactNode } from "react";

const Feedback = () => {
  return <h1 className="text-2xl text-center mt-10">coming soon</h1>;
};

export default Feedback;
Feedback.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;
