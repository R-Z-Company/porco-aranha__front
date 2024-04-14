import { useRouter } from "next/navigation";


export default function useNavigateToALink() {

  const { push } = useRouter();

  const navigateToALink = (url: string) => push(url);

  return {
    navigateToALink,
  };
}