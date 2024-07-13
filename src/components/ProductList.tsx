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
      <div className="flex flex-col items-center">
        <DialogTrigger>
          <div className="w-full aspect-[7/8] grid place-items-center bg-secondary p-2">
            <Image
              src={`/nameplate.webp`}
              alt=""
              width={120}
              height={120}
              className=""
            />
          </div>
        </DialogTrigger>
        <span className="text-center">
          {data.name}
          <br />
          <span className="text-sm text-gray-500">₹{data.price}</span>
        </span>
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="capitalize">{data.name}</DialogTitle>
          <DialogDescription>
            <p className="mb-4 text-sm">₹{data.price}</p>
            <div className="flex gap-6">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                at doloribus voluptate et repellat natus rerum exercitationem
                earum non reiciendis! Illum molestiae voluptatibus earum
                suscipit perferendis rem temporibus labore vero.
              </p>
              <Image
                src={`/nameplate.webp`}
                alt=""
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
