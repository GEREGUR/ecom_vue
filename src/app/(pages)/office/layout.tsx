import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import OfficeHeader from "./components/OfficeHeader";

const PersonalOfficeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <OfficeHeader />
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </div>
  );
};

export default PersonalOfficeLayout;
