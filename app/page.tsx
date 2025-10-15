"use client"

import { useRouter } from "next/navigation"
import {
  Home,
  Hammer,
  Wrench,
  Lightbulb,
  Snowflake,
  Tv,
  Armchair,
  Sparkles,
  Droplet,
  Truck,
  Settings,
  DollarSign,
  Bell,
  Clock,
  MessageSquare,
  User,
  Search,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const router = useRouter()

  const handleItemClick = (label: string) => {
    switch (label) {
      case "Bảng giá":
        router.push("/bang-gia")
        break
      case "Điện nước":
        router.push("/dien-nuoc")
        break
      default:
        break
    }
  }

  const services = [
    { label: "Xây dựng Sửa nhà", icon: Hammer, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "Cơ khí Nhôm kính", icon: Wrench, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Điện nước", icon: Lightbulb, color: "text-yellow-600", bg: "bg-yellow-50" },
    { label: "Điện lạnh", icon: Snowflake, color: "text-cyan-600", bg: "bg-cyan-50" },
    { label: "Điện máy", icon: Tv, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Đồ gỗ Nội Thất", icon: Armchair, color: "text-amber-700", bg: "bg-amber-50" },
    { label: "Vệ sinh", icon: Sparkles, color: "text-pink-600", bg: "bg-pink-50" },
    { label: "Thông nghẹt Hút hầm", icon: Droplet, color: "text-blue-700", bg: "bg-blue-50" },
    { label: "Chuyển nhà", icon: Truck, color: "text-green-600", bg: "bg-green-50" },
    { label: "Dịch vụ khác", icon: Settings, color: "text-gray-600", bg: "bg-gray-50" },
    { label: "Bảng giá", icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Thông báo", icon: Bell, color: "text-red-600", bg: "bg-red-50" },
  ]

  const promotions = [
    {
      id: 1,
      title: "GIẢM GIÁ 50K",
      subtitle: "ĐẶT THỢ NGAY",
      gradient: "from-blue-500 to-purple-600",
      image: "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482600VlX/anh-mo-ta.png"
    },
    {
      id: 2,
      title: "ƯU ĐÃI CUỐI TUẦN",
      subtitle: "ĐĂNG KÝ NGAY",
      gradient: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "SIÊU ƯU ĐÃI 50%",
      subtitle: "ĐĂNG KÝ NGAY",
      gradient: "from-green-500 to-emerald-600",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-gray-100 pb-24">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200/60">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Handee, xin chào</h1>
              <p className="text-xs text-gray-500">Có mặt trong 5 phút</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-amber-50 rounded-full px-3 py-2 border border-amber-200 flex items-center gap-1">
              <span className="text-xs font-semibold text-amber-900">0 điểm</span>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Hơn 100 dịch vụ bạn cần tìm?"
            className="w-full rounded-xl pl-12 pr-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-900 placeholder:text-gray-500 shadow-sm"
          />
        </div>

        {/* Services Grid */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/60">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900">Đặt dịch vụ ngay</h2>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="grid grid-cols-4 gap-3">
            {services.map(({ label, icon: Icon, color, bg }) => (
              <div
                key={label}
                onClick={() => handleItemClick(label)}
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className={`${bg} rounded-lg p-2 shadow-sm`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <span className="text-xs text-gray-700 text-center font-medium leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Promotions với hình ảnh */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/60">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900">Chương trình Khuyến mãi</h2>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>

          <div className="space-y-3">
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer active:scale-[0.98] h-32"
              >
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute inset-0 p-4 flex flex-col justify-center">
                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1">{promo.title}</h3>
                    <p className="text-sm opacity-90">{promo.subtitle}</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xs">HOT</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/60">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Tiện ích nhanh</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Đặt lịch hẹn</p>
                <p className="text-xs text-gray-600">Chủ động thời gian</p>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Tư vấn 24/7</p>
                <p className="text-xs text-gray-600">Hỗ trợ miễn phí</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 shadow-lg">
        {[
          { label: "Trang chủ", icon: Home, active: true },
          { label: "Lịch sử", icon: Clock, active: false },
          { label: "Góp ý", icon: MessageSquare, active: false },
          { label: "Tài khoản", icon: User, active: false },
        ].map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            className={`flex flex-col items-center gap-1 text-xs transition-colors ${
              active ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <div className={`p-2 rounded-lg ${active ? "bg-blue-50" : ""}`}>
              <Icon className="w-6 h-6" />
            </div>
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </nav>

      {/* SOS Button hình chuông */}
      <button
        onClick={() => router.push("/sos")}
        className="fixed bottom-20 right-4 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full p-4 shadow-2xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-110 flex flex-col items-center gap-1 active:scale-95 group"
      >
        <div className="relative">
          <Bell className="w-6 h-6" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full" />
        </div>
        <span className="text-xs font-bold">SOS</span>
        
        {/* Hiệu ứng ánh sáng */}
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </button>
    </div>
  )
}