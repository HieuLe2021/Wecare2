"use client";

import { useState } from "react";
import { X } from "lucide-react";

import type { Tables } from "~/lib/supabase/types";
import Icon from "~/components/icon/Icon";
import { Button } from "~/components/shadcn/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "~/components/ui/sheet";
import { MobileNav } from "./MobileNav";

type Props = {
  allProductGroups: Tables<"product_groups">[];
  menuNodes: Tables<"menu_nodes_matview">[];
  customer: Tables<"customers_matview"> | undefined;
};
export const MobileSidebar = ({
  allProductGroups,
  menuNodes,
  customer,
}: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            shape="icon"
            size="lg"
            className="lg:hidden"
          >
            <Icon>categories</Icon>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full">
          {/* <div className="absolute left-0 top-0 border-b-2 border-red-700 bg-[#E3E9EF] px-[25px] py-[19px]"> */}
          <SheetClose
            className="absolute left-4 top-5 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-secondary"
            asChild
          >
            <Button variant="outline" shape="icon" size="lg">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </SheetClose>
          {/* </div> */}
          <div className="mt-10">
            <MobileNav
              allProductGroups={allProductGroups}
              menuNodes={menuNodes}
              customer={customer}
              close={() => setOpen(false)}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
