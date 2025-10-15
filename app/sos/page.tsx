"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, MapPin, Phone, AlertTriangle, Clock, Shield, CheckCircle, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function SosPage() {
  const router = useRouter();
  const [problem, setProblem] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const emergencyServices = [
    { name: "Mất điện đột ngột", icon: "⚡", color: "from-yellow-500 to-amber-500" },
    { name: "Chập cháy điện", icon: "🔥", color: "from-red-500 to-orange-500" },
    { name: "Rò rỉ điện", icon: "⚠️", color: "from-red-500 to-pink-500" },
    { name: "Vỡ ống nước", icon: "💧", color: "from-blue-500 to-cyan-500" },
    { name: "Tắc nghẽn bồn cầu", icon: "🚽", color: "from-brown-500 to-amber-700" },
    { name: "Hỏng bình nóng lạnh", icon: "🔥", color: "from-orange-500 to-red-500" },
  ];

  const features = [
    { icon: Clock, text: "Có mặt sau 10 phút", color: "text-red-500" },
    { icon: Shield, text: "Thợ chuyên nghiệp", color: "text-blue-500" },
    { icon: CheckCircle, text: "Cam kết chất lượng", color: "text-green-500" },
    { icon: MessageCircle, text: "Hỗ trợ 24/7", color: "text-purple-500" },
  ];

  const handleEmergencySubmit = () => {
    if (!problem || !address || !phone) {
      alert("Vui lòng điền đầy đủ thông tin khẩn cấp!");
      return;
    }
    router.push("/sos/thong-tin-tho");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200/60 sticky top-0 z-10">
        <div className="flex items-center p-4">
          <button 
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Cứu hộ khẩn cấp</h1>
              <p className="text-xs text-gray-500">Có mặt sau 10 phút</p>
            </div>
          </div>
          <button 
            onClick={() => router.push("/")}
            className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
          >
            <Home className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Emergency Alert */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-4 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-lg">🚨 Cần thợ gấp</h2>
              <p className="text-sm opacity-90">Liên hệ ngay để được hỗ trợ khẩn cấp</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>⏰ Có mặt sau 10 phút</span>
            <span>📞 Hỗ trợ 24/7</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3">
          {features.map(({ icon: Icon, text, color }, index) => (
            <div key={index} className="bg-white rounded-xl p-3 shadow-sm border border-gray-200/60 flex items-center gap-3">
              <div className={`w-8 h-8 bg-${color.split('-')[0]}-100 rounded-lg flex items-center justify-center`}>
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <span className="text-xs font-medium text-gray-700">{text}</span>
            </div>
          ))}
        </div>

        {/* Emergency Services */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/60">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Vấn đề thường gặp</h3>
          <div className="grid grid-cols-2 gap-2">
            {emergencyServices.map((service, index) => (
              <button
                key={index}
                onClick={() => setProblem(service.name)}
                className={`p-3 rounded-xl border-2 transition-all ${
                  problem === service.name 
                    ? "border-red-500 bg-red-50" 
                    : "border-gray-200 hover:border-red-300"
                }`}
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white text-lg mb-2 mx-auto`}>
                  {service.icon}
                </div>
                <span className="text-xs font-medium text-gray-900 text-center block">
                  {service.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Emergency Form */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/60">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Thông tin khẩn cấp</h3>
          
          {/* Problem Description */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              Mô tả vấn đề
            </label>
            <input
              type="text"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="Ví dụ: Sửa mất điện, vỡ ống nước..."
              className="w-full rounded-xl px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-gray-900 placeholder:text-gray-500"
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" />
              Địa chỉ khẩn cấp
            </label>
            <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-xl bg-white focus-within:ring-2 focus-within:ring-red-500/20 focus-within:border-red-500">
              <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Nhập địa chỉ chi tiết..."
                className="flex-1 outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-red-500" />
              Số điện thoại liên hệ
            </label>
            <div className="flex items-center p-3 border border-gray-300 rounded-xl bg-white focus-within:ring-2 focus-within:ring-red-500/20 focus-within:border-red-500">
              <span className="bg-gray-100 px-3 py-2 rounded-lg text-gray-600 font-medium border-r border-gray-300 mr-3">+84</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Số điện thoại của bạn"
                className="flex-1 outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Emergency Button */}
          <button
            onClick={handleEmergencySubmit}
            className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all active:scale-95 shadow-lg hover:shadow-red-500/30 flex items-center justify-center gap-2"
          >
            <AlertTriangle className="w-6 h-6" />
            GỌI THỢ KHẨN CẤP NGAY
          </button>

          {/* Emergency Contact */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              📞 Gọi ngay: <span className="font-semibold text-red-600">1900 1234</span>
            </p>
            <p className="text-xs text-gray-500">Hỗ trợ 24/7 miễn phí</p>
          </div>
        </div>

        {/* Safety Tips */}
        <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-200">
          <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
            ⚠️ Lưu ý an toàn
          </h4>
          <ul className="text-xs text-yellow-700 space-y-1">
            <li>• Ngắt nguồn điện khi phát hiện chập cháy</li>
            <li>• Không tự ý sửa chữa khi không có chuyên môn</li>
            <li>• Di chuyển đến khu vực an toàn</li>
            <li>• Giữ khoảng cách với thiết bị hư hỏng</li>
          </ul>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 shadow-lg">
        <button 
          onClick={() => router.push("/")}
          className="flex flex-col items-center gap-1 text-xs text-gray-500"
        >
          <div className="p-2 rounded-lg">
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
        
        <button className="flex flex-col items-center gap-1 text-xs text-red-600">
          <div className="p-2 rounded-lg bg-red-50">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <span className="font-medium">SOS</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 text-xs text-gray-500">
          <div className="p-2 rounded-lg">
            <Shield className="w-6 h-6" />
          </div>
          <span className="font-medium">Hồ sơ</span>
        </button>
      </nav>
    </div>
  );
}