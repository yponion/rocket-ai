import Head from "next/head";
import Image from "next/image";
import Saju from "@/components/Saju";

export default function Home() {
  return (
    <>
      <Head>
        <title>운세 박사 - 양정운</title>
      </Head>

      <main className="flex justify-center bg-[#F3F2EF]">
        <section className="max-w-md w-full relative">
          <Image src="/images/destiny.png" alt="destiny" width={750} height={4162} className="w-full" />
          <p className="absolute top-[33.35%] left-[35.07%] -translate-y-[50%] -translate-x-[50%] text-center whitespace-pre-line text-[4.27vw] xs:text-[19px] text-[#424242] leading-[150%]">
            {"이제 본격적으로\nOO님의 사주팔자를\n분석해볼 차례네요."}
          </p>
          <p className="absolute top-[50.5%] left-[38.27%] -translate-y-[50%] -translate-x-[50%] text-center whitespace-pre-line text-[4.27vw] xs:text-[19px] text-[#424242] leading-[150%]">
            {"제가 oo님의 사주를\n보기 쉽게 표로 정리했어요"}
          </p>
          <Saju />
        </section>
      </main>
    </>
  );
}
