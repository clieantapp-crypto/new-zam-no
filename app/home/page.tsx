"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Globe,
  Smartphone,
  Wifi,
  Users,
  TrendingUp,
  Zap,
  Satellite,
  Radio,
  Network,
  MapPin,
  Activity,
  Building2,
  Cloud,
  Brain,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function GlobalTelecommunications() {
  const [selectedRegion, setSelectedRegion] = useState("global")
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  const globalStats = [
    {
      title: "المشتركين العالميين",
      value: "8.58B",
      change: "+3.2%",
      icon: <Users className="h-6 w-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "تغطية 5G",
      value: "35%",
      change: "+12%",
      icon: <Radio className="h-6 w-6" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "مستخدمي الإنترنت",
      value: "5.16B",
      change: "+1.9%",
      icon: <Globe className="h-6 w-6" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "انتشار الهاتف المحمول",
      value: "109%",
      change: "+0.8%",
      icon: <Smartphone className="h-6 w-6" />,
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "متوسط السرعة",
      value: "85 Mbps",
      change: "+15%",
      icon: <Zap className="h-6 w-6" />,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "القيمة السوقية",
      value: "$1.8T",
      change: "+4.1%",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-pink-500 to-pink-600",
    },
  ]

  const regions = [
    {
      id: "global",
      name: "نظرة عالمية",
      subscribers: "8.58B",
      coverage: "35%",
      avgSpeed: "85 Mbps",
      companies: 2847,
    },
    {
      id: "asia",
      name: "آسيا والمحيط الهادئ",
      subscribers: "4.2B",
      coverage: "42%",
      avgSpeed: "95 Mbps",
      companies: 1245,
    },
    {
      id: "europe",
      name: "أوروبا",
      subscribers: "1.1B",
      coverage: "78%",
      avgSpeed: "120 Mbps",
      companies: 456,
    },
    {
      id: "americas",
      name: "الأمريكتين",
      subscribers: "1.8B",
      coverage: "65%",
      avgSpeed: "110 Mbps",
      companies: 678,
    },
    {
      id: "africa",
      name: "أفريقيا",
      subscribers: "1.2B",
      coverage: "18%",
      avgSpeed: "45 Mbps",
      companies: 234,
    },
    {
      id: "middle-east",
      name: "الشرق الأوسط",
      subscribers: "280M",
      coverage: "55%",
      avgSpeed: "75 Mbps",
      companies: 134,
    },
  ]

  const majorCompanies = [
    {
      name: "تشاينا موبايل",
      country: "الصين",
      subscribers: "975M",
      revenue: "$109B",
      technology: "رائدة 5G",
      color: "from-red-500 to-red-600",
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      name: "فودافون جروب",
      country: "المملكة المتحدة",
      subscribers: "300M",
      revenue: "$52B",
      technology: "رائدة إنترنت الأشياء",
      color: "from-red-400 to-pink-500",
      icon: <Network className="h-6 w-6" />,
    },
    {
      name: "فيريزون",
      country: "الولايات المتحدة",
      subscribers: "143M",
      revenue: "$136B",
      technology: "5G الترا",
      color: "from-blue-500 to-indigo-600",
      icon: <Satellite className="h-6 w-6" />,
    },
    {
      name: "إيه تي آند تي",
      country: "الولايات المتحدة",
      subscribers: "230M",
      revenue: "$171B",
      technology: "رائدة الألياف",
      color: "from-blue-400 to-cyan-500",
      icon: <Wifi className="h-6 w-6" />,
    },
    {
      name: "دويتشه تيليكوم",
      country: "ألمانيا",
      subscribers: "242M",
      revenue: "$122B",
      technology: "الحوسبة الطرفية",
      color: "from-pink-500 to-purple-600",
      icon: <Cloud className="h-6 w-6" />,
    },
    {
      name: "سوفت بنك",
      country: "اليابان",
      subscribers: "88M",
      revenue: "$47B",
      technology: "تكامل الذكاء الاصطناعي",
      color: "from-yellow-500 to-orange-600",
      icon: <Brain className="h-6 w-6" />,
    },
  ]

  const technologies = [
    {
      id: "5g",
      name: "شبكات 5G",
      adoption: "35%",
      description: "تقنية لاسلكية من الجيل التالي بزمن استجابة منخفض للغاية",
      features: [
        "سرعات تصل إلى 20 جيجابت في الثانية نظرياً",
        "زمن استجابة 1 مللي ثانية للتطبيقات الفورية",
        "اتصال هائل لأجهزة إنترنت الأشياء",
        "قدرات تقسيم الشبكة",
        "النطاق العريض المحمول المحسن",
        "اتصالات حرجة المهام",
      ],
      regions: {
        "آسيا والمحيط الهادئ": "42%",
        أوروبا: "78%",
        الأمريكتين: "65%",
        أفريقيا: "18%",
        "الشرق الأوسط": "55%",
      },
    },
    {
      id: "fiber",
      name: "الألياف البصرية",
      adoption: "68%",
      description: "بنية تحتية للإنترنت عالي السرعة باستخدام إشارات ضوئية",
      features: [
        "سرعات جيجابت للمستهلكين",
        "تحميل/تنزيل متماثل",
        "زمن استجابة منخفض وموثوقية عالية",
        "بنية تحتية مستقبلية",
        "دعم لبث 8K",
        "اتصال على مستوى المؤسسات",
      ],
      regions: {
        "آسيا والمحيط الهادئ": "72%",
        أوروبا: "85%",
        الأمريكتين: "78%",
        أفريقيا: "25%",
        "الشرق الأوسط": "60%",
      },
    },
    {
      id: "satellite",
      name: "إنترنت الأقمار الصناعية",
      adoption: "12%",
      description: "اتصال عالمي من خلال أقمار صناعية في مدار أرضي منخفض",
      features: [
        "تغطية عالمية تشمل المناطق النائية",
        "كوكبات المدار الأرضي المنخفض",
        "اتصالات التعافي من الكوارث",
        "اتصال بحري وطيران",
        "سد الفجوة الرقمية",
        "شبكات الاستجابة للطوارئ",
      ],
      regions: {
        "آسيا والمحيط الهادئ": "8%",
        أوروبا: "15%",
        الأمريكتين: "18%",
        أفريقيا: "22%",
        "الشرق الأوسط": "12%",
      },
    },
  ]

  const innovations = [
    {
      title: "أبحاث 6G",
      description: "تطوير تقنية لاسلكية من الجيل التالي",
      timeline: "2030+",
      impact: "ثوري",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      title: "شبكات الكم",
      description: "أنظمة اتصالات كمية فائقة الأمان",
      timeline: "2028+",
      impact: "تحويلي",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      title: "شبكات مدعومة بالذكاء الاصطناعي",
      description: "بنية تحتية شبكية ذكية ذاتية التحسين",
      timeline: "2025+",
      impact: "كبير",
      color: "bg-gradient-to-r from-green-500 to-teal-500",
    },
    {
      title: "اتصالات هولوغرافية",
      description: "مكالمات ومؤتمرات فيديو ثلاثية الأبعاد",
      timeline: "2027+",
      impact: "ثوري",
      color: "bg-gradient-to-r from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 p-4" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              الاتصالات العالمية
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            نظرة شاملة على مشهد الاتصالات العالمي والتقنيات واتجاهات السوق
          </p>
        </motion.div>

        {/* Global Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {globalStats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3 text-white`}
                >
                  {stat.icon}
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600 mb-1">{stat.title}</div>
                  <Badge variant="outline" className="text-xs text-green-600 border-green-200">
                    {stat.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Regional Overview */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">نظرة إقليمية</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => (
              <Card
                key={region.id}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  selectedRegion === region.id ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedRegion(region.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-lg">{region.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">المشتركين</div>
                      <div className="font-semibold text-lg">{region.subscribers}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">تغطية 5G</div>
                      <div className="font-semibold text-lg">{region.coverage}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">متوسط السرعة</div>
                      <div className="font-semibold text-lg">{region.avgSpeed}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">الشركات</div>
                      <div className="font-semibold text-lg">{region.companies}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Major Companies */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">مشغلي الاتصالات العالميين الرائدين</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorCompanies.map((company, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <CardHeader
                  className={`bg-gradient-to-r ${company.color} text-white p-6 group-hover:scale-105 transition-transform`}
                >
                  <div className="flex items-center gap-3">
                    {company.icon}
                    <div>
                      <CardTitle className="text-lg">{company.name}</CardTitle>
                      <p className="text-white/90 text-sm">{company.country}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">المشتركين</span>
                      <span className="font-semibold">{company.subscribers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">الإيرادات</span>
                      <span className="font-semibold">{company.revenue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">التقنية</span>
                      <Badge variant="outline">{company.technology}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">التقنيات العالمية</h2>
          <div className="space-y-6">
            {technologies.map((tech) => (
              <Card key={tech.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="cursor-pointer" onClick={() => toggleCard(tech.id)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                        <Activity className="h-8 w-8" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{tech.name}</CardTitle>
                        <p className="text-gray-600 mt-1">{tech.description}</p>
                        <Badge className="mt-2">الاعتماد العالمي: {tech.adoption}</Badge>
                      </div>
                    </div>
                    {expandedCard === tech.id ? (
                      <ChevronUp className="h-6 w-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </CardHeader>
                {expandedCard === tech.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-3">الميزات الرئيسية</h4>
                          <div className="space-y-2">
                            {tech.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">الاعتماد الإقليمي</h4>
                          <div className="space-y-3">
                            {Object.entries(tech.regions).map(([region, percentage]) => (
                              <div key={region} className="flex justify-between items-center">
                                <span className="text-sm">{region}</span>
                                <div className="flex items-center gap-2">
                                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                                    <div
                                      className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                                      style={{ width: percentage }}
                                    ></div>
                                  </div>
                                  <span className="text-sm font-medium">{percentage}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </motion.div>
                )}
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Future Innovations */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">الابتكارات المستقبلية</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovations.map((innovation, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`${innovation.color} p-6 text-white`}>
                  <h3 className="text-lg font-bold mb-2">{innovation.title}</h3>
                  <p className="text-white/90 text-sm mb-4">{innovation.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {innovation.timeline}
                    </Badge>
                    <span className="text-xs font-medium">{innovation.impact}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4 text-slate-800">اتصل بالشبكة العالمية</h3>
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
                استكشف الفرص في سوق الاتصالات العالمية وابق في المقدمة مع الابتكارات التكنولوجية التي تشكل عالمنا
                المتصل.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  تحليل السوق
                </Button>
                <Button size="lg" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                  اتجاهات التكنولوجيا
                </Button>
                <Button size="lg" variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                  فرص الاستثمار
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
