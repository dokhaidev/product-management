"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft, Star, Clock, Shield, CheckCircle } from "lucide-react";

// Định nghĩa kiểu dữ liệu và kiểu key
type PricingTabKey = "bonCau" | "bonNuoc" | "pinNangLuong";

type PricingItem = {
  title: string;
  unit: string;
  price: string;
  note: string;
  popular?: boolean;
};

// Dữ liệu demo cho bảng giá
const pricingData: Record<PricingTabKey, PricingItem[]> = {
  bonCau: [
    {
      title: "Nhân công thông nghẹt bồn cầu",
      unit: "cái",
      price: "450.000 - 550.000",
      note: "Trường hợp bồn cầu bị ghẹt vật rắn: Khăn vải, tóc, ...",
      popular: true
    },
    {
      title: "Nhân công sửa chữa bồn cầu bị chảy nước, không xả nước, rò rỉ nước,...",
      unit: "cái",
      price: "150.000",
      note: "Trường hợp đục bồn cầu kĩ thuật sẽ báo giá cho khách hàng",
    },
    {
      title: "Nhân công thay phao bồn cầu",
      unit: "cái",
      price: "150.000 - 250.000",
      note: "Tùy loại phao bồn cầu nút nhấn, tay gạt.",
      popular: true
    },
    {
      title: "Tháo bồn cầu cũ, thay bồn cầu mới",
      unit: "cái",
      price: "450.000 - 650.000",
      note: "Tùy loại kiểu bồn cầu",
    },
    {
      title: "Lắp đặt bộ tiểu nam",
      unit: "cái",
      price: "Liên hệ",
      note: "Giá thay đổi tùy theo loại thiết bị và độ phức tạp",
    },
  ],
  bonNuoc: [
    {
      title: "Sửa chữa bồn nước inox",
      unit: "cái",
      price: "300.000 - 500.000",
      note: "Báo giá cụ thể sau khi khảo sát tình trạng hư hỏng",
    },
    {
      title: "Thay bồn nước mới",
      unit: "cái",
      price: "800.000 - 1.200.000",
      note: "Bao gồm nhân công và vận chuyển",
      popular: true
    },
    {
      title: "Vệ sinh bồn nước",
      unit: "cái",
      price: "250.000 - 400.000",
      note: "Tùy theo kích thước và tình trạng bồn",
    },
  ],
  pinNangLuong: [
    {
      title: "Lắp đặt hệ thống pin năng lượng 3kW",
      unit: "hệ thống",
      price: "25.000.000 - 35.000.000",
      note: "Bao gồm thiết bị và nhân công lắp đặt",
      popular: true
    },
    {
      title: "Lắp đặt hệ thống pin năng lượng 5kW",
      unit: "hệ thống",
      price: "40.000.000 - 55.000.000",
      note: "Phù hợp cho hộ gia đình sử dụng nhiều điện",
    },
    {
      title: "Bảo trì hệ thống định kỳ",
      unit: "lần",
      price: "500.000 - 800.000",
      note: "Kiểm tra và vệ sinh toàn bộ hệ thống",
    },
  ],
};

export default function PricingPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<PricingTabKey>("bonCau");

  const tabs: { id: PricingTabKey; label: string; icon: string }[] = [
    { id: "bonCau", label: "Bồn cầu", icon: "🚽" },
    { id: "bonNuoc", label: "Bồn nước", icon: "💧" },
    { id: "pinNangLuong", label: "Năng lượng", icon: "☀️" },
  ];

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
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Bảng giá dịch vụ</h1>
              <p className="text-xs text-gray-500">Điện nước - Sửa chữa</p>
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

        {/* Tabs */}
        <div className="bg-white rounded-2xl p-1 shadow-sm border border-gray-200/60 mb-6">
          <div className="flex">
            {tabs.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex-1 py-3 px-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === id
                    ? "bg-blue-500 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-lg">{icon}</span>
                  <span>{label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Content */}
        <div className="space-y-3">
          {pricingData[activeTab].length === 0 ? (
            <div className="text-center py-10 bg-white rounded-2xl shadow-sm border border-gray-200/60">
              <div className="text-gray-400 text-lg mb-2">📝</div>
              <p className="text-gray-500 font-medium">Đang cập nhật dữ liệu</p>
              <p className="text-sm text-gray-400 mt-1">Vui lòng quay lại sau</p>
            </div>
          ) : (
            pricingData[activeTab].map(({ title, unit, price, note, popular }, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-4 hover:shadow-md transition-shadow"
              >
                {popular && (
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-medium text-yellow-700 bg-yellow-50 px-2 py-1 rounded-full">
                      Dịch vụ phổ biến
                    </span>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight flex-1 pr-2">
                    {title}
                  </h3>
                  {price !== "Liên hệ" ? (
                    <div className="text-right">
                      <div className="text-green-600 font-bold text-lg">
                        {price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ
                      </div>
                      <div className="text-xs text-gray-500">/{unit}</div>
                    </div>
                  ) : (
                    <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Liên hệ
                    </div>
                  )}
                </div>

                <div className="text-xs text-gray-500 mb-2">Đơn vị: {unit}</div>
                
                {note && (
                  <div className="text-xs text-gray-600 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
                    💡 {note}
                  </div>
                )}

                <button className="w-full mt-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-xl font-semibold text-sm hover:shadow-lg transition-all active:scale-95">
                  Đặt dịch vụ ngay
                </button>
              </div>
            ))
          )}
        </div>

        {/* Contact Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 text-white mt-6 shadow-lg">
          <h3 className="font-bold text-lg mb-2">📞 Cần tư vấn thêm?</h3>
          <p className="text-sm opacity-90 mb-3">Liên hệ ngay để được hỗ trợ miễn phí</p>
          <div className="flex gap-2">
            <button className="flex-1 bg-white text-blue-600 py-2 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors">
              Gọi ngay
            </button>
            <button className="flex-1 bg-transparent border border-white py-2 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors">
              Nhắn tin
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 shadow-lg">
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
            <Clock className="w-6 h-6" />
          </div>
          <span className="font-medium">Lịch sử</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 text-xs text-gray-500">
          <div className="p-2 rounded-lg">
            <Star className="w-6 h-6" />
          </div>
          <span className="font-medium">Yêu thích</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 text-xs text-gray-500">
          <div className="p-2 rounded-lg">
            <Shield className="w-6 h-6" />
          </div>
          <span className="font-medium">Tài khoản</span>
        </button>
      </nav>
    </div>
  );
}