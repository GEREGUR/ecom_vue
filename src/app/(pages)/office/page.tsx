"use client";

import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { MountainIcon } from "lucide-react";
import Link from "next/link";

const PersonalOfficePage = () => {
  return (
    <div className="inset-0 flex items-center justify-center bg-white h-screen">
      <ResizablePanelGroup
        className="h-[90vh] w-[90vw] rounded-lg"
        direction="horizontal"
      >
        <ResizablePanel defaultSize={30} minSize={5} maxSize={30}>
          <div className="flex h-full items-center justify-center">
            <div className="flex flex-col justify-start">
              <Link
                className="flex items-center justify-center gap-2 font-semibold text-gray-900 dark:text-gray-50 h-9 w-9 md:w-auto md:h-auto"
                href="#"
              >
                <MountainIcon className="h-6 w-6" />
                <span className="hidden md:flex">
                  <p>Ecommerce Vue</p>
                </span>
              </Link>
              <Link
                className="flex items-center justify-center gap-2 font-semibold text-gray-900 dark:text-gray-50 h-9 w-9 md:w-auto md:h-auto"
                href="#"
              >
                <MountainIcon className="h-6 w-6" />
                <span className="hidden md:flex">
                  <p>Ecommerce Vue</p>
                </span>
              </Link>
              <Link
                className="flex items-center justify-center gap-2 font-semibold text-gray-900 dark:text-gray-50 h-9 w-9 md:w-auto md:h-auto"
                href="#"
              >
                <MountainIcon className="h-6 w-6" />
                <span className="hidden md:flex">
                  <p>Ecommerce Vue</p>
                </span>
              </Link>
              <Link
                className="flex items-center justify-center gap-2 font-semibold text-gray-900 dark:text-gray-50 h-9 w-9 md:w-auto md:h-auto"
                href="#"
              >
                <MountainIcon className="h-6 w-6" />
                <span className="hidden md:flex">
                  <p>Ecommerce Vue</p>
                </span>
              </Link>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default PersonalOfficePage;
