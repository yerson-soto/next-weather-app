import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PiTornadoLight, PiDropLight, PiWindLight, PiSunLight } from "react-icons/pi";
import { cn } from "@/lib/utils";

type Info = {
  icon: React.ReactNode;
  info: string;
};

const info: Info[] = [
  { icon: <PiTornadoLight className="text-3xl" />, info: "173" },
  { icon: <PiDropLight className="text-3xl" />, info: "92%" },
  { icon: <PiWindLight className="text-3xl" />, info: "6km/h" },
  { icon: <PiSunLight className="text-3xl" />, info: "3" },
];

export function CurrentWeather() {
  return (
    <Card className={cn("w-[380px]")}>
      <CardHeader className="pb-0">
        <CardTitle>Current Weather</CardTitle>
        <CardDescription>6:25 PM</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center pb-0">
        <Image
          src="/clear-day.svg"
          alt="Current Weather Icon"
          draggable={false}
          width={180}
          height={180}
        />

        <div>
          <span className="text-7xl font-bold">
            24<sup className="text-xl align-top">&#176;C</sup>
          </span>
          <p>Heavy Rain</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {info.map((note, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-y-2"
          >
            {note.icon}
            <p>{note.info}</p>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
}
