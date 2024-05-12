import { cookies } from "next/headers";
import Image from "next/image";

import { Mail } from "@/app/(pages)/dashboard/components/mail";
import { accounts, mails } from "@/app/(pages)/dashboard/data";
import MaxWidthWrapper from "./components/MaxWidthWrapper";

export default function MailPage() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  console.log(collapsed);
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  // const defaultCollapsed = collapsed ? undefined : JSON.parse(collapsed!.value);

  return (
    <>
      {/* <div className="md:hidden">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </div> */}
      <div className="flex-col md:flex">
        {/* <MaxWidthWrapper> */}
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          // defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
        {/* </MaxWidthWrapper> */}
      </div>
    </>
  );
}
