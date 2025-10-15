"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, MapPin, Wrench, ArrowLeft, Home, Search, Clock, Shield, Star, CheckCircle } from "lucide-react";

export default function DienNuocPage() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const services = [
    { name: "Sửa mất điện", icon: "⚡", popular: true },
    { name: "Sửa chập điện", icon: "🔌", popular: true },
    { name: "Sửa rò rỉ điện", icon: "⚠️" },
    { name: "Tắc nghẽn bồn cầu", icon: "🚽", popular: true },
    { name: "Sửa chữa ống nước", icon: "🔧" },
    { name: "Sửa bình nóng lạnh", icon: "🔥", popular: true },
    { name: "Thay thế và lắp đặt lavabo", icon: "💧" },
    { name: "Vệ sinh bồn nước", icon: "🧼" },
    { name: "Lắp đặt ổ cắm điện", icon: "🔘" },
    { name: "Sửa công tắc hỏng", icon: "🎛️" },
    { name: "Thay thế đèn chiếu sáng", icon: "💡" },
    { name: "Sửa máy bơm nước", icon: "⛲" },
  ];

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const features = [
    { icon: Clock, text: "Có mặt sau 15 phút" },
    { icon: Shield, text: "Bảo hành 12 tháng" },
    { icon: CheckCircle, text: "Cam kết chất lượng" },
    { icon: Star, text: "Thợ có chuyên môn" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200/60 sticky top-0 z-10">
        <div className="flex items-center p-4">
          <button 
            onClick={() => selectedService ? setSelectedService(null) : router.push("/")}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Dịch vụ Điện nước</h1>
              <p className="text-xs text-gray-500">Sửa chữa nhanh chóng</p>
            </div>
          </div>
          <button 
            onClick={() => router.push("/")}
            className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
          >
            <Home className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="p-4">
        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {features.map(({ icon: Icon, text }, index) => (
            <div key={index} className="bg-white rounded-xl p-3 shadow-sm border border-gray-200/60 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Icon className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-xs font-medium text-gray-700">{text}</span>
            </div>
          ))}
        </div>

        {/* Nếu chưa chọn dịch vụ */}
        {!selectedService && (
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm dịch vụ điện nước..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl pl-12 pr-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-900 placeholder:text-gray-500 shadow-sm"
              />
            </div>

            {/* Services Grid */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/60">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Chọn dịch vụ bạn cần</h2>
              <div className="grid grid-cols-2 gap-3">
                {filteredServices.map((service) => (
                  <button
                    key={service.name}
                    onClick={() => setSelectedService(service.name)}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white hover:bg-blue-50 hover:border-blue-200 transition-all active:scale-95 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg shadow-lg group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-900 text-center leading-tight">
                      {service.name}
                    </span>
                    {service.popular && (
                      <div className="absolute -top-1 -right-1">
                        <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          HOT
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Nếu đã chọn dịch vụ */}
        {selectedService && (
          <div className="space-y-4">
            {/* Service Header */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/60">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg shadow-lg">
                  {services.find(s => s.name === selectedService)?.icon}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{selectedService}</h2>
                  <p className="text-sm text-gray-500">Dịch vụ chuyên nghiệp</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Service Type Selection */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    Loại hình dịch vụ
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-start gap-3 p-3 border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer">
                      <input type="radio" name="serviceType" className="mt-1 accent-blue-500" defaultChecked />
                      <div>
                        <span className="font-medium text-gray-900">Tư vấn và báo giá</span>
                        <p className="text-xs text-gray-500 mt-1">Nhận tư vấn miễn phí và báo giá chi tiết trước khi sửa chữa</p>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 p-3 border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer">
                      <input type="radio" name="serviceType" className="mt-1 accent-blue-500" />
                      <div>
                        <span className="font-medium text-gray-900">Sửa chữa khẩn cấp</span>
                        <p className="text-xs text-gray-500 mt-1">Tìm thợ có mặt ngay trong 15 phút</p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Địa chỉ thực hiện
                  </label>
                  <div className="flex items-start gap-3 p-3 border border-gray-200 rounded-xl bg-white">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <textarea
                      placeholder="Nhập địa chỉ chi tiết..."
                      className="flex-1 outline-none text-gray-700 placeholder-gray-400 resize-none"
                      rows={2}
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Số điện thoại liên hệ
                  </label>
                  <div className="flex items-center p-3 border border-gray-200 rounded-xl bg-white">
                    <span className="bg-gray-100 px-3 py-2 rounded-lg text-gray-600 font-medium border-r border-gray-300 mr-3">+84</span>
                    <input
                      type="tel"
                      placeholder="Số điện thoại của bạn"
                      className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Schedule */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    Thời gian thực hiện
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl bg-white">
                      <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <input
                        type="date"
                        className="flex-1 outline-none text-gray-700"
                      />
                    </div>
                    <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl bg-white">
                      <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <input
                        type="time"
                        className="flex-1 outline-none text-gray-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/60">
              <div className="flex justify-around">
                <button className="flex flex-col items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-lg">
                    💰
                  </div>
                  <span className="text-xs font-medium">Ưu đãi</span>
                </button>
                <button className="flex flex-col items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-lg">
                    ℹ️
                  </div>
                  <span className="text-xs font-medium">Thông tin</span>
                </button>
                <button className="flex flex-col items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-lg">
                    ⭐
                  </div>
                  <span className="text-xs font-medium">Đánh giá</span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="flex-1 py-3 px-6 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Quay lại
              </button>
              <button
                onClick={() => {
                  alert("Đặt dịch vụ thành công! Chúng tôi sẽ liên hệ lại trong ít phút.");
                  router.push("/");
                }}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all active:scale-95"
              >
                Đặt dịch vụ ngay
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 shadow-lg">
        <button className="flex flex-col items-center gap-1 text-xs text-gray-500">
          <div className="p-2 rounded-lg">
            <Wrench className="w-6 h-6" />
          </div>
          <span className="font-medium">Dịch vụ</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 text-xs text-gray-500">
          <div className="p-2 rounded-lg">
            <Clock className="w-6 h-6" />
          </div>
          <span className="font-medium">Lịch sử</span>
        </button>
        
        <button 
          onClick={() => router.push("/")}
          className="flex flex-col items-center gap-1 text-xs text-blue-600"
        >
          <div className="p-2 rounded-lg bg-blue-50">
            <Home className="w-6 h-6" />
          </div>
          <span className="font-medium">Trang chủ</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 text-xs text-gray-500">
          <div className="p-2 rounded-lg">
            <Star className="w-6 h-6" />
          </div>
          <span className="font-medium">Yêu thích</span>
        </button>
      </nav>
    </div>
  );
}