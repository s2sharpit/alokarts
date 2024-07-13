import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProductList({
  data,
  index,
}: {
  data: any;
  index: number;
}) {
  return (
    <Dialog>
      <DialogTrigger key={index}>
        <div className="flex flex-col items-center">
          <div className="w-full aspect-[7/8] grid place-items-center bg-secondary p-2">
            <Image
              src={`/nameplate.webp`}
              alt=""
              width={120}
              height={120}
              className=""
            />
          </div>
          <span className="text-center">
            {data.name}
            <br />
            <span className="text-sm text-gray-500">₹{data.price}</span>
          </span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
