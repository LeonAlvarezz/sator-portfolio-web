"use client";
import React, { useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";

import { Button } from "../button";
import { IoLanguage } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
type Props = {
  currentLocale: string;
};
export default function LanguageDropdown({ currentLocale }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  function onSelectChange(locale: string) {
    startTransition(() => {
      // Simply update the locale parameter in the URL
      const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
      router.push(newPath);
    });
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="group flex h-5 w-full justify-between p-0"
          variant="icon"
          // size="icon"
        >
          <IoLanguage />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        <DropdownMenuRadioGroup
          value={currentLocale}
          onValueChange={onSelectChange}
        >
          <DropdownMenuRadioItem value="kh">
            <p>Khmer</p>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en">
            <p>English</p>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
