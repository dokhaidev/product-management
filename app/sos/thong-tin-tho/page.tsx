"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, MapPin, Phone, Mail, Clock, Star, Shield, Award, CheckCircle } from "lucide-react";

export default function ThongTinTho() {
  const router = useRouter();

  const services = [
    "Sửa chữa điện nước cơ bản",
    "Thay công tắc, ổ cắm",
    "Lắp đặt máy bơm, vòi nước",
    "Hỗ trợ khách hàng tận nơi",
    "Sửa chữa bình nóng lạnh",
    "Thông tắc đường ống nước",
    "Lắp đặt thiết bị vệ sinh"
  ];

  const reviews = [
    { name: "Chị Lan", rating: 5, comment: "Thợ rất nhiệt tình, làm việc chuyên nghiệp", time: "2 ngày trước" },
    { name: "Anh Tuấn", rating: 5, comment: "Giá cả hợp lý, hoàn thành nhanh chóng", time: "1 tuần trước" },
    { name: "Chị Hương", rating: 5, comment: "Rất hài lòng với dịch vụ", time: "2 tuần trước" }
  ];

  const stats = [
    { label: "Dự án hoàn thành", value: "150+" },
    { label: "Khách hàng hài lòng", value: "98%" },
    { label: "Kinh nghiệm", value: "5 năm" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200/60 sticky top-0 z-10">
        <div className="flex items-center p-4">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Thông tin thợ</h1>
              <p className="text-xs text-gray-500">Handee Service</p>
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

      <div className="p-4 space-y-4">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/60">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="relative mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                NA
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Nguyễn Văn A</h2>
            <div className="flex items-center gap-1 text-amber-500 mb-2">
              <Star className="w-4 h-4 fill-amber-500" />
              <span className="font-semibold">4.9</span>
              <span className="text-gray-500 text-sm">(128 đánh giá)</span>
            </div>
            <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>Đã xác minh</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold text-blue-600">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
              <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-gray-900">Khu vực làm việc</div>
                <div className="text-sm text-gray-600">Thủ Đức, TP. HCM</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
              <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-gray-900">Số điện thoại</div>
                <div className="text-sm text-gray-600">0123 456 789</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
              <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-gray-900">Email</div>
                <div className="text-sm text-gray-600">nguyenvana@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
              <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-gray-900">Thời gian làm việc</div>
                <div className="text-sm text-gray-600">Thứ 2 - CN (7:00 - 19:00)</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Dịch vụ cung cấp
            </h3>
            <div className="grid gap-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Preview */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" />
              Đánh giá gần đây
            </h3>
            <div className="space-y-3">
              {reviews.map((review, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-gray-900">{review.name}</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{review.comment}</p>
                  <div className="text-xs text-gray-400">{review.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={() => router.push("/sos/thanh-toan")}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all active:scale-95 shadow-md"
          >
            Tiếp tục đến thanh toán
          </button>
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/60">
          <h3 className="text-center font-semibold text-gray-900 mb-3">Handee Cam kết</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="text-xs text-gray-600">Bảo hành 12 tháng</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-xs text-gray-600">Đã xác minh</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-green-500" />
              <span className="text-xs text-gray-600">Chuyên nghiệp</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-500" />
              <span className="text-xs text-gray-600">Có mặt nhanh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 shadow-lg">
        <button className="flex flex-col items-center gap-1 text-xs text-gray-500">
          <div className="p-2 rounded-lg">
            <Home className="w-6 h-6" />
          </div>
          <span className="font-medium">Trang chủ</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 text-xs text-gray-500">
          <div className="p-2 rounded-lg">
            <Star className="w-6 h-6" />
          </div>
          <span className="font-medium">Đánh giá</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 text-xs text-blue-600">
          <div className="p-2 rounded-lg bg-blue-50">
            <Award className="w-6 h-6" />
          </div>
          <span className="font-medium">Thợ</span>
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