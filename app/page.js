import Image from "next/image";
import styles from "./page.module.css";
import CardComponent from "./components/utils/cardComponent";

export default function Home() {
  return (
    <div>
      <h3 className="text-xl font-semibold py-5 text-center">Blog Post</h3>

      <div className="flex
        justify-center
        gap-4
        items-start
        flex-wrap
        overflow-y-auto"
      >
        <CardComponent cardWidth='w-[400px]' typePage='home' />
      </div>
    </div>
  );
}
