import Image from "next/image";

export const Heroes = () => {
   return (
      <div
         className="flex flex-col items-center justify-center
      max-w-5xl"
      >
         <div className="flex items-center gap-5">
            <div
               className="relative w-[300px] h-[300px] sm:w-[350px]
            sm:h-[350px] md:h-[400px] md:w-[400px]"
            >
               <Image
                  src="/image_white.svg"
                  alt="Book"
                  fill
                  className="object-contain dark:hidden"
               />
               <Image
                  src="/image_dark.svg"
                  alt="Book"
                  fill
                  className="object-contain hidden dark:block"
               />
            </div>
            <div className="relative h-[300px] w-[300px] hidden md:block">
               <Image
                  src="/image2_white.svg"
                  alt="Reaserching"
                  fill
                  className="object-contain dark:hidden"
               />
               <Image
                  src="/image2_dark.svg"
                  alt="Reaserching"
                  fill
                  className="object-contain hidden dark:block"
               />
            </div>
         </div>
      </div>
   );
};
