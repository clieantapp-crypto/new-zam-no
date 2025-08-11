"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Search, ShoppingCart, Heart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ZainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [countryMenuOpen, setCountryMenuOpen] = useState(false)

  return (
    <header>
      {/* Top Nav */}
      <nav aria-label="Top Nav" className="z-50 hidden w-full bg-white lg:block">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 2xl:max-w-8xl">
          <div className="relative flex items-center justify-between">
            <div className="h-full 2xl:text-lg">
              <a className="inline-block h-full bg-primary px-6 leading-8 text-white">شخصي</a>
              <a className="inline-block h-full bg-white px-6 leading-8 text-primary dark:bg-gray-700">الأعمال</a>
            </div>
            <div className="flex items-center space-s-5 dark:text-white">
              <Link href="/update-civil-id" className="text-sm font-semibold uppercase">
                تحديث البطاقة المدنية
              </Link>
            
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    id="menu-button"
                    aria-expanded={countryMenuOpen}
                    aria-haspopup="true"
                    className="focus:outline-none"
                    onClick={() => setCountryMenuOpen(!countryMenuOpen)}
                  >
                    <span>
                      الكويت
                      <ChevronDown className="inline-block rotate-90 transform px-2 w-6 h-6" />
                    </span>
                  </button>
                </div>
                {countryMenuOpen && (
                  <div
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                  >
                    <div role="none" className="cursor-pointer">
                      <a
                        href="#"
                        role="menuitem"
                        className="block px-4 py-2 text-xs text-gray-700 hover:bg-primary hover:text-white bg-gray-200 rounded-t"
                      >
                        الكويت
                      </a>
                      <a
                        href="#"
                        role="menuitem"
                        className="block px-4 py-2 text-xs text-gray-700 hover:bg-primary hover:text-white"
                      >
                        البحرين
                      </a>
                      <a
                        href="#"
                        role="menuitem"
                        className="block px-4 py-2 text-xs text-gray-700 hover:bg-primary hover:text-white"
                      >
                        العراق
                      </a>
                      <a
                        href="#"
                        role="menuitem"
                        className="block px-4 py-2 text-xs text-gray-700 hover:bg-primary hover:text-white"
                      >
                        الأردن
                      </a>
                      <a
                        href="#"
                        role="menuitem"
                        className="block px-4 py-2 text-xs text-gray-700 hover:bg-primary hover:text-white"
                      >
                        لبنان
                      </a>
                      <a
                        href="#"
                        role="menuitem"
                        className="block px-4 py-2 text-xs text-gray-700 hover:bg-primary hover:text-white"
                      >
                        المغرب
                      </a>
                      <a
                        href="#"
                        role="menuitem"
                        className="block px-4 py-2 text-xs text-gray-700 hover:bg-primary hover:text-white"
                      >
                        السعودية
                      </a>
                      <a
                        href="#"
                        role="menuitem"
                        className="block px-4 py-2 text-xs text-gray-700 hover:bg-primary hover:text-white rounded-b"
                      >
                        السودان
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <a>EN</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Nav */}
      <nav aria-label="Main Nav" className="w-full bg-black">
        <div className="mx-auto ps-2 sm:px-6 lg:px-8">
          <div className="relative flex h-14 w-full items-center lg:h-18 lg:px-6">
            <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
              <a href="https:/#" className="flex flex-shrink-0 items-center">
                <Image
                
                  src="/placeholder.svg?height=40&width=120"
                  alt="Zain Logo"
                  width={120}
                  height={40}
                  className="block h-8 w-auto cursor-pointer lg:h-10"
                />
              </a>
            </div>
            <div className="hidden h-full sm:ms-6 lg:block">
              <div className="flex h-full text-lg text-white 2xl:text-2xl">
                <a
                  href="https://www.kw.zain.com/ar"
                  aria-current="page"
                  className="flex items-center border-b-2 border-transparent px-7 py-2 space-s-3 hover:border-primary"
                >
                  <span className="mr-2">تسوق</span>
                </a>
                <a href="#" className="flex items-center border-b-2 border-primary px-6 py-2 space-s-3">
                  <span className="whitespace-nowrap mr-2">My Zain</span>
                </a>
                <a
                  href="https://www.kw.zain.com/ar/support"
                  className="flex items-center border-b-2 border-transparent px-7 py-2 space-s-3 hover:border-primary"
                >
                  <span className="mr-2">الدعم</span>
                </a>
              </div>
            </div>
            <div className="flex-1 justify-self-end flex items-center justify-end pe-2 sm:static sm:inset-auto sm:pe-0 sm:ms-6">
              <div className="hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full text-white hover:bg-white hover:text-primary lg:flex">
                <Search className="w-5 h-5" />
              </div>
              <div className="mx-2 hidden h-5 border-r-2 border-white border-opacity-40 lg:block"></div>
              <a
                href="https://www.kw.zain.com/ar/shop"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white lg:h-10 lg:w-10"
              >
                <ShoppingCart className="w-5 h-5 text-primary" />
              </a>
              <div className="mx-2 h-5 border-r-2 border-white border-opacity-40"></div>
              <a
                href="https://www.kw.zain.com/ar/shop/wish-list"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-white hover:bg-white hover:text-primary"
              >
                <Heart className="w-5 h-5" />
              </a>
              <Button
                type="button"
                aria-controls="mobile-menu"
                aria-expanded="false"
                variant="ghost"
                className="h-12 px-2 text-gray-400 hover:bg-gray-700 hover:text-white lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="text-gray-100 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu fixed right-0 z-50 w-full transform shadow-xl transition-all origin-top-end lg:hidden">
          <div className="bg-primary">
            <select className="h-9 mx-auto white-select-arrow text-center text-sm font-bold text-white flex justify-center bg-transparent border-none text-center text-white mt-0 py-1.5">
              <option>شخصي</option>
              <option>الأعمال</option>
            </select>
          </div>
          <div className="flex justify-between px-4 py-5">
            <a
              href="https://www.kw.zain.com/ar/shop"
              aria-current="page"
              className="block px-3 py-2 text-xl font-semibold font-medium text-primary"
            >
              <span className="mr-2">تسوق</span>
            </a>
            <ChevronDown className="inline-block w-6 px-2 rotate-180 transform" />
          </div>
          <hr className="mx-2 border-t border-gray-400 opacity-50" />
          <div className="flex justify-between px-4 py-5">
            <a
              href="https://www.kw.zain.com/ar/support"
              aria-current="page"
              className="block px-3 py-2 text-xl font-semibold font-medium text-white"
            >
              <span className="mr-2">الدعم</span>
            </a>
            <ChevronDown className="inline-block w-6 px-2 rotate-180 transform" />
          </div>
          <hr className="mx-2 border-t border-gray-400 opacity-50" />
          <div className="flex justify-between px-4 py-5">
            <a
              href="https://www.kw.zain.com/ar/shop/internet-devices"
              aria-current="page"
              className="block flex px-3 py-2 text-xl font-semibold font-medium text-white"
            >
              <span>5G</span>
            </a>
            <ChevronDown className="inline-block w-6 px-2 rotate-180 transform" />
          </div>
          <hr className="mx-2 border-t border-gray-400 opacity-50" />
          <div className="block py-6">
            <a className="px-3 font-semibold uppercase text-white">تحديث البطاقة المدنية</a>
            <ChevronDown className="inline-block w-2 rotate-180 transform" />
          </div>
          <hr className="mx-2 border-t border-gray-400 opacity-50" />
          <div className="block pt-6">
          </div>
          <div className="flex bg-white p-2 mx-3 mt-5 rounded-md">
            <div className="mb-1 text-black w-full font-bold">
              <div className="relative">
                <div className="flex items-center">
                  <input
                    placeholder="بحث"
                    type="text"
                    className="bg-white text-primary border-0 mt-1 w-full py-2.5 dark:placeholder-gray-700 dark:text-black focus:border-transparent focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 font-bold"
                  />
                </div>
              </div>
            </div>
            <a
              id="search_b"
              href="https://www.kw.zain.com/en/shop/search?q="
              className="rounded-md bg-primary p-3 text-white"
            >
              <Search className="px-6 text-xl" />
            </a>
          </div>
          <div className="block pt-6 text-center text-white">
            <a className="px-3">EN</a>
            <a className="px-3">العربية</a>
          </div>
          <div className="block py-6 text-white">
            <select className="mt-1 w-full me-6 px-3 py-2.5 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 bg-transparent border-primary">
              <option className="text-black" value="kuwait">
                الكويت
              </option>
              <option className="text-black" value="bahrain">
                البحرين
              </option>
              <option className="text-black" value="iraq">
                العراق
              </option>
              <option className="text-black" value="jordan">
                الأردن
              </option>
              <option className="text-black" value="lebanon">
                لبنان
              </option>
              <option className="text-black" value="morocco">
                المغرب
              </option>
              <option className="text-black" value="saudiArabia">
                السعودية
              </option>
              <option className="text-black" value="sudan">
                السودان
              </option>
            </select>
          </div>
        </div>
      )}
    </header>
  )
}
