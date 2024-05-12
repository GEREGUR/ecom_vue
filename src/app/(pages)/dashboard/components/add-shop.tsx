import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetHeader,
  SheetClose,
  SheetFooter,
  SheetContent,
  Sheet,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function AddShop() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="">
          Create shop
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create shop</SheetTitle>
          <SheetDescription>Initialize new shop</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="file">
              Name
            </Label>
            <Input
              className="col-span-3"
              id="name"
              value="Pedro Duarte"
              onChange={(e) => {
                Value = e.target.value;
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="username">
              Logo
            </Label>
            <Input className="col-span-3" id="Logo" type="file" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
