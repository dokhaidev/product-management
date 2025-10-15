"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, CheckCircle, Shield, Clock, CreditCard, QrCode, Wallet, BadgePercent } from "lucide-react";
import { useState } from "react";

export default function ThanhToanPage() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState("momo");

  const paymentMethods = [
    { id: "momo", name: "Ví MoMo", icon: "💰", color: "from-pink-500 to-purple-500" },
    { id: "zalo", name: "Ví ZaloPay", icon: "💙", color: "from-blue-500 to-cyan-500" },
    { id: "bank", name: "Thẻ ngân hàng", icon: "💳", color: "from-green-500 to-emerald-500" },
    { id: "cash", name: "Tiền mặt", icon: "💵", color: "from-gray-500 to-gray-700" },
  ];

  const orderDetails = {
    id: "DV09876",
    technician: "Nguyễn Văn A",
    address: "123 Đường Tên Lửa, Q. Bình Tân, TP.HCM",
    service: "Sửa chữa điện khẩn cấp",
    basePrice: 300000,
    emergencyFee: 15000,
    total: 315000
  };

  const features = [
    { icon: Shield, text: "Bảo hành 12 tháng", color: "text-green-500" },
    { icon: Clock, text: "Hoàn tiền nếu không hài lòng", color: "text-blue-500" },
    { icon: CheckCircle, text: "Đã xác minh thợ", color: "text-purple-500" },
  ];

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('vi-VN') + ' VNĐ';
  };

  const handlePayment = () => {
    // Xử lý thanh toán
    alert("Thanh toán thành công! Thợ sẽ đến trong 10 phút.");
    router.push("/");
  };

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
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Xác nhận thanh toán</h1>
              <p className="text-xs text-gray-500">Dịch vụ khẩn cấp</p>
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
        {/* Order Summary */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/60">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            Thông tin đơn hàng
          </h2>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Mã đơn:</span>
              <span className="font-semibold text-gray-900">{orderDetails.id}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Thợ:</span>
              <span className="font-semibold text-gray-900">{orderDetails.technician}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-gray-600">Địa chỉ:</span>
              <span className="font-semibold text-gray-900 text-right">{orderDetails.address}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Dịch vụ:</span>
              <span className="font-semibold text-gray-900">{orderDetails.service}</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Giá thỏa thuận:</span>
              <span className="font-semibold text-gray-900">{formatCurrency(orderDetails.basePrice)}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 flex items-center gap-1">
                <BadgePercent className="w-4 h-4 text-orange-500" />
                Phí khẩn cấp:
              </span>
              <span className="font-semibold text-orange-600">{formatCurrency(orderDetails.emergencyFee)}</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-gray-200">
              <span className="text-lg font-bold text-gray-900">Tổng cộng:</span>
              <span className="text-xl font-bold text-green-600">{formatCurrency(orderDetails.total)}</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/60">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Wallet className="w-5 h-5 text-blue-500" />
            Phương thức thanh toán
          </h2>
          
          <div className="space-y-2">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${
                  selectedMethod === method.id 
                    ? "border-blue-500 bg-blue-50" 
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center text-white text-lg`}>
                  {method.icon}
                </div>
                <span className="font-semibold text-gray-900">{method.name}</span>
                {selectedMethod === method.id && (
                  <CheckCircle className="w-5 h-5 text-blue-500 ml-auto" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-3">
          {features.map(({ icon: Icon, text, color }, index) => (
            <div key={index} className="bg-white rounded-xl p-3 shadow-sm border border-gray-200/60 flex items-center gap-3">
              <div className={`w-8 h-8 bg-${color.split('-')[1]}-100 rounded-lg flex items-center justify-center`}>
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <span className="text-sm font-medium text-gray-700">{text}</span>
            </div>
          ))}
        </div>

        {/* QR Code for e-wallet */}
        {selectedMethod !== "cash" && selectedMethod !== "bank" && (
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/60 text-center">
            <div className="w-32 h-32 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <QrCode className="w-16 h-16 text-gray-400" />
            </div>
            <p className="text-sm text-gray-600">Quét QR code để thanh toán</p>
            <p className="text-xs text-gray-500 mt-1">{formatCurrency(orderDetails.total)}</p>
          </div>
        )}

        {/* Payment Button */}
        <button
          onClick={handlePayment}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all active:scale-95 shadow-md flex items-center justify-center gap-2"
        >
          <CheckCircle className="w-6 h-6" />
          XÁC NHẬN THANH TOÁN
        </button>

        {/* Security Notice */}
        <div className="text-center">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
            <Shield className="w-3 h-3" />
            Thông tin thanh toán được bảo mật an toàn
          </p>
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
        
        <button className="flex flex-col items-center gap-1 text-xs text-green-600">
          <div className="p-2 rounded-lg bg-green-50">
            <CreditCard className="w-6 h-6" />
          </div>
          <span className="font-medium">Thanh toán</span>
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