# **1.Module 1: Quản lý danh sách chứng từ đã xóa** 
## **1.1. Mô tả tóm tắt**
* *Cho phép người dùng hệ thống có thể quản lý tất cả các tệp, chứng từ đã xóa trong thời gian 30 ngày kể từ ngày xóa từ 2 màn hình: Danh sách chứng từ, Quản lý chứng từ của tôi (phát triển sau)* 
* *Người dùng là người có quyền “Document_Delete” có thể thực hiện các chức năng xem, tìm kiếm, khôi phục một tệp/chứng từ đã xóa, xóa vĩnh viễn một tệp/chứng từ hoặc xóa vĩnh viễn tất cả các tệp/chứng từ đã xóa trong hệ thống.*
## **1.2. Yêu cầu giao diện**
![markdown](./image/Aspose.Words.85c484d6-cbe2-464d-aa30-6c15a9007e31.001.png)
Hình 1: Màn hình quản lý các tệp đã xóa
* *Hiển thị danh sách các tệp đã xóa theo dạng bảng.*
* *Các thông tin tệp đã xóa bao gồm: Thông tin tệp/Chứng từ, Vị trí gốc, Ngày xóa, Hành động.*
* *Công cụ tìm kiếm nằm trên danh sách các tệp đã xóa, bao gồm: ô nhập thông tin tìm kiếm (tìm theo tên tệp, mã chứng từ) nằm ở hàng dưới; danh sách chọn vị trí gốc (là nơi mà tệp hoặc chứng từ được xóa) nằm trên cùng hàng với ô nhập thông tin tìm kiếm; danh sách chọn loại tệp, chọn ngày xóa từ ngày đến ngày nằm trên một hàng trước ô nhập thông tin tìm kiếm.*
* *Nút “Tìm kiếm” danh sách các tệp đã xóa nằm dưới dòng cuối cùng, được canh lề trái và nằm cùng với công cụ tìm kiếm.*
* *Nút “Dọn sạch” nằm trên tiêu đề bảng “Danh sách các tệp đã xóa”, nằm trên baner và được canh lề phải.*
### **1.2.1. Màn hình Xem trước**
![markdown](./image/Aspose.Words.85c484d6-cbe2-464d-aa30-6c15a9007e31.002.png)

Hình 2: Màn hình Xem trước chứng từ trong danh sách đã xóa
* *Nội dung chi tiết của chứng từ được hiển thị*
* *Chức năng Xem thông tin chi tiết chứng từ, Danh sách người nhận, Chứng từ liên quan, Tệp tin đính kèm & Người dùng được chia sẻ, Tin nhắn trao đổi, Lịch sử chứng từ nằm canh lề bên phải màn hình (tương tự màn hình xem chứng từ màn hình Danh sách chứng từ)*
### **1.2.2. Màn hình xác nhận Dọn sách (xóa vĩnh viễn tất cả các tệp trong danh sách)**

![markdown](./image/Aspose.Words.85c484d6-cbe2-464d-aa30-6c15a9007e31.003.png)

Hình 3: Xác nhận xóa vĩnh viễn tất cả các tệp đã xóa
* *Hiển thị hộp hội thoại xác nhận có nội dung xác nhận thao tác xóa vĩnh viễn tất cả các tệp trong danh sách và 02 nút “Đóng” và “Xác nhận” bên trong phía dưới hộp hội thoại.*
### **1.2.3. Màn hình Xem danh sách các tệp đã xóa** 

![markdown](./image/Aspose.Words.85c484d6-cbe2-464d-aa30-6c15a9007e31.004.png)

Hình 3: Màn hình Xem danh sách các tệp đã xóa
* *Thông tin chi tiết của một tệp đã xóa được hiển thị trên từng dòng của danh sách. Bao gồm các thông tin: Tên tệp, Người tạo, Ngày xóa, Kích cỡ tệp, loại tệp, Hành động.*
* *Chức năng Xem chứng từ, Khôi phục, Xóa vĩnh viễn từng tệp đã xóa được đặt trên cùng dòng và nằm ở cột cuối cùng.*
### **1.2.4. Màn hình Xác nhận xóa vĩnh viễn một tệp đã xóa**

![markdown](./image/Aspose.Words.85c484d6-cbe2-464d-aa30-6c15a9007e31.005.png)

Hình 4: Màn hình xác nhận xóa vĩnh viễn một tệp đã xóa
* *Hiển thị hộp hội thoại xác nhận có nội dung xác nhận thao tác xóa vĩnh viễn một tệp cụ thể trong danh sách và 02 nút “Đóng” và “Xác nhận” bên trong phía dưới hộp hội thoại.*