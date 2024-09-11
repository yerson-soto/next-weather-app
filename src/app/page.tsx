import { CurrentWeather } from "@/components/current-weather";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen font-[family-name:var(--font-geist-sans)]">
      <main>
        <CurrentWeather />
      </main>
    </div>
  );
}
