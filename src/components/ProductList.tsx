import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";

export default function ProductList({
  data,
  index,
}: {
  data: any;
  index: number;
}) {
  return (
    <Dialog>
      <div className="flex flex-col items-center backdrop-blur-3xl p-2 rounded-lg text-white border border-gray-400 bg-white/20">
        <DialogTrigger>
          <div className="w-full aspect-[7/8] grid place-items-center">
            <Image
              src={`/nameplate.webp`}
              alt=""
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
        </DialogTrigger>
        <span className="text-center">
          {data.name}
          <br />
          <span className="text-sm text-gray-100">₹{data.price}</span>
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
        <Link
          href={"tel:7667976507"}
          className="justify-normal flex items-center gap-2"
        >
          Contact <LuPhone />
        </Link>
      </DialogContent>
    </Dialog>
  );
}
