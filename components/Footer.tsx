import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-between p-8 bg-mainblue py-6 text-center text-sm text-white/100 items-center">
      <div className="flex items-center">
      <Link href="https://www.linkedin.com/in/alfie-lancaster-6b5059247/" target="_blank" className="mx-2">
      <Image src="/linked.svg" alt="Alfie LinkedIn Link" width={32} height={32}/>
      </Link>
      <Link href="mailto:Alfie.Lancaster@outlook.com" target="_blank" className="mx-2">
      <Image src="/mail.svg" alt="Alfie Mail Link" width={32} height={32}/>
      </Link>
      </div>
       Alfie Lancaster © {new Date().getFullYear()}
    </footer>
  );
}
