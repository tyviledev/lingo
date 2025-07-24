// components
import { Button } from "@/components/ui/button";
// next
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button
          size="lg"
          variant="ghost"
          className="flex items-center justify-center w-fit"
        >
          <Image src="/flag_thai.svg" height={30} width={30} alt="Thai Flag" />
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="flex items-center justify-center w-fit"
        >
          <Image
            src="/flag_indonesia.svg"
            height={30}
            width={30}
            alt="Indonesian Flag"
          />
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="flex items-center justify-center w-fit"
        >
          <Image src="/flag_laos.svg" height={30} width={30} alt="Laos Flag" />
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="flex items-center justify-center w-fit"
        >
          <Image
            src="/flag_malaysia.svg"
            height={30}
            width={30}
            alt="Malaysian Flag"
          />
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="flex items-center justify-center w-fit"
        >
          <Image
            src="/flag_phillipines.svg"
            height={30}
            width={30}
            alt="Phillipine Flag"
          />
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="flex items-center justify-center w-fit"
        >
          <Image
            src="/flag_vietnam.svg"
            height={30}
            width={30}
            alt="Vietnam Flag"
          />
        </Button>
      </div>
    </footer>
  );
};
