import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ZainFooter() {
  return (
    <footer className="footer border-t-2 border-primary px-5 bg-black text-white py-8">
      <div className="max-w-sm mx-auto md:max-w-full mx-0">
        <div className="max-w-6xl mx-auto md:grid md:grid-cols-4 text-white text-center md:text-start">
          <div>
            <div>
              <div className="md:hidden inline text-2xl">+</div>
              <Link href="https://www.kw.zain.com/ar/shop/postpaid" className="bold mb-5 block text-2xl inline">
                الدفع الآجل
              </Link>
              <Link href="https://www.kw.zain.com/ar/shop/5g-internet" className="block leading-9 hidden md:block">
                باقات ويّانا للإنترنت
              </Link>
              <Link href="https://www.kw.zain.com/ar/roaming" className="block leading-9 hidden md:block">
                التجوال
              </Link>
              <Link href="https://www.kw.zain.com/ar/shop/wiyana" className="block leading-9 hidden md:block">
                باقات ويّانا للأجهزة الذكية
              </Link>
              <Link href="#" className="block leading-9 hidden md:block">
                Zain Plus
              </Link>
            </div>
            <hr className="md:hidden border-t border-opacity-10 border-white my-4 max-w-6xl mx-auto" />
            <div className="md:mt-5">
              <div className="md:hidden inline text-2xl">+</div>
              <Link href="/" className="bold mb-5 block text-2xl inline">
                الأجهزة
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                الإكسسوارات
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                الألعاب
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                أجهزة الإنترنت
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                أجهزة لوحية ولابتوب
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                المنزل الذكي
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                التلفزيونات الذكية
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                الأجهزة الذكية
              </Link>
              <Link href="https://www.kw.zain.com/ar/shop/wearables" className="block leading-9 hidden md:block">
                الساعات الذكية و السماعات
              </Link>
            </div>
            <hr className="md:hidden border-t border-opacity-10 border-white my-4 max-w-6xl mx-auto" />
          </div>
          <div>
            <div>
              <div className="md:hidden inline text-2xl">+</div>
              <Link href="/" className="bold mb-5 block text-2xl inline">
                الدفع المسبق
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                اشتر شريحة eeZee
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                eeZee Flexi
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                باقات eeZee
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                التجوال
              </Link>
            </div>
            <hr className="md:hidden border-t border-opacity-10 border-white my-4 max-w-6xl mx-auto" />
            <div className="md:mt-5">
              <div className="md:hidden inline text-2xl">+</div>
              <Link href="/" className="bold mb-5 block text-2xl inline">
                خدمات أخرى
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                استبدل جهازك
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                خدمة التأمين للأجهزة
              </Link>
            </div>
            <hr className="md:hidden border-t border-opacity-10 border-white my-4 max-w-6xl mx-auto" />
          </div>
          <div>
            <div>
              <div className="md:hidden inline text-2xl">+</div>
              <Link href="/" className="bold mb-5 block text-2xl inline">
                الدعم
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                تحدث مع zBot
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                الطلبات السابقة
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                أين تجدنا
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                الأسئلة الشائعة
              </Link>
              <Link href="/" className="block leading-9 hidden md:block">
                اكتشف زين
              </Link>
            </div>
            <hr className="md:hidden border-t border-opacity-10 border-white my-4 max-w-6xl mx-auto" />
          </div>
          <div>
            <p className="hidden bold mb-5 md:block text-2xl">تحدث معنا</p>
            <div className="flex flex-wrap justify-between md:justify-start md:gap-4">
              <Link href="https://www.instagram.com/zainkuwait" className="text-3xl hover:text-primary">
                <Instagram className="w-8 h-8" />
              </Link>
              <Link href="https://twitter.com/zainkuwait" className="text-3xl hover:text-primary">
                <Twitter className="w-8 h-8" />
              </Link>
              <Link href="https://www.facebook.com/zainkuwait" className="text-3xl hover:text-primary">
                <Facebook className="w-8 h-8" />
              </Link>
              <Link href="https://www.youtube.com/user/ZainTelecom" className="text-3xl hover:text-primary">
                <Youtube className="w-8 h-8" />
              </Link>
            </div>
            <div>
              <hr className="border-t border-opacity-10 border-white my-4 max-w-6xl mx-auto" />
              <p className="bold mb-5 block text-2xl">تحديث البطاقة المدنية</p>
            </div>
            <hr className="border-t border-opacity-10 border-white my-4 max-w-6xl mx-auto" />
            <p className="bold mb-5 block text-2xl">تتبع الطلب</p>
            <div className="w-full text-white">
              <div className="relative">
                <div className="flex items-center">
                  <Input
                    placeholder="رقم التتبع"
                    type="number"
                    className="bg-white text-primary border-0 mt-1 w-full py-2.5 dark:placeholder-gray-700 dark:text-black focus:border-transparent focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 pe-7 text-start text-white bg-gray-300 bg-opacity-40 rounded-md placeholder-white"
                  />
                  <div className="absolute end-2 items-end">
                    <ChevronRight className="transform rotate-180" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t border-opacity-10 border-white my-4 max-w-6xl mx-auto" />
        <div className="mb-24 md:mb-0 gap-4 flex flex-col md:flex-row md:justify-center items-center">
          <Image
            src="/logo.png"
            alt="Zain Logo"
            width={120}
            height={32}
            className="block h-10 w-auto"
          />
          <Link href="" className="text-white">
            سياسة الخصوصية
          </Link>
          <div className="text-white text-sm">جميع حقوق الطبع و النشر محفوظة © 2025 زين.</div>
        </div>
      </div>
    </footer>
  )
}
