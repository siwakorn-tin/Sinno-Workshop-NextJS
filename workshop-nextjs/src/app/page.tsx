import GridComponent from "@/components/GridComponent";
import Heading from "@/components/Heading";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Heading text={"Hi, Tintin."}></Heading>
      <GridComponent></GridComponent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus
      in mauris ultricies convallis. Morbi dictum eu mauris nec consequat. Fusce
      id nisl tellus. Pellentesque posuere a augue sed maximus. Curabitur sit
      amet ex id erat pharetra vehicula a ac urna. Etiam commodo orci ac sem
      aliquet, nec ullamcorper magna posuere. Donec sed molestie nisl.
      Suspendisse vitae nunc a lectus sollicitudin pellentesque.
    </div>
  );
}
