import LoginForm from "@/components/login/Login.Components";
import Image from "next/image";

export default function Page() {
  return (
    <div className="container py-10 px-4 mx-auto">
      <div className="flex flex-col py-8 gap-8 sm:mx-auto sm:max-w-[332px] sm:border sm:rounded-lg sm:px-4">
        <div className="flex flex-col gap-8 items-center">
          <Image
            className="w-32 h-14 object-contain"
            alt="IURIS International Indonesia"
            src="/img/logo.webp"
            width={252}
            height={110}
          />
          <span className="font-p2">Log in to your account.</span>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
