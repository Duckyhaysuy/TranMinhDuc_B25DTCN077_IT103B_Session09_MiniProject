let iphoneList = ["Iphone13","Iphone14","Iphone15","Iphone16","Iphone17"];
let price = [480,499,505,640,720];
let stock = [10, 5, 0, 8, 15];
let choice;

do{
    choice = +prompt(`---HỆ THỐNG QUẢN LÝ KHO HÀNG---   
            1. Lọc sản phẩm cao cấp (>500)
            2. Kiểm định trạng thái dữ liệu (Hết hàng/Giá sàn)
            3. Phân tích giá trị vốn hóa (Tổng tài sản)
            4. Triển khai chiến dịch chiết khấu (Giảm 10%)
            5. Truy vấn sản phẩm theo từ khóa
            6. Báo cáo tình trạng tồn kho
            7. Thoát chương trình
            Vui lòng nhập lựa chọn của bạn (1-7):`);

        if(choice === null){
            alert("Bạn đã hủy lựa chọn, thoát chương trình!");
            break;
        }

        switch(choice){
            case 1: filterProducts(); break;
            case 2: checkStatus();   break;
            case 3: calAllOfStock(); break;
            case 4: discountProducts(); break;
            case 5: searchProducts(); break;
            case 6: reportStock();break;
            case 7:
                alert("Thoát!");
                break;
            default:
                alert("Lựa chọn không hợp lệ, vui lòng chọn lại!");       
        }

}while(choice !==7);

function filterProducts(){
    let premiumProducts = iphoneList.filter((element, index) => price[index] > 500);
    alert(`Sản phẩm có giá trị trên 500: ${premiumProducts.join(", ")}`);
    console.log(`Sản phẩm có giá trị trên 500: ${premiumProducts.join(", ")}`);
    
}

function checkStatus(){
    let checkStock = stock.some(s => s > 0);
    let checkPrice = price.every(p => p >= 500);
    alert(`Tình trạng tồn kho: ${checkStock ? "Đủ hàng" : "Hết hàng"}\n Gía cả >500: ${checkPrice ? "Giá các sản phẩm đều trên 500" : "Có sản phẩm dưới mức sàn 500"}`);
    console.log(`Tình trạng tồn kho: ${checkStock ? "Đủ hàng" : "Hết hàng"}\n Gía cả >500: ${checkPrice ? "Giá các sản phẩm đều trên 500" : "Có sản phẩm dưới mức sàn 500"}`);
    
}

function calAllOfStock(){
    let total = price.reduce((acc, cur, index) => acc + cur * stock[index], 0);
    alert(`Tổng giá trị vốn hóa của kho hàng: ${total} USD`);
    console.log(`Tổng giá trị vốn hóa của kho hàng: ${total} USD`);
}

function discountProducts(){
    let discount = price.forEach((p, index) => price[index] = p * 0.9);
    alert(`Gía sau khi giảm 10%: ${price.join("USD, ")}`);
    console.log(`Gía sau khi giảm 10%: ${price.join("USD, ")}`); 
}

function searchProducts(){
    let keyword = prompt("Nhập từ khóa để tìm kiếm sản phẩm:");
    let results = iphoneList.filter(product => product.toLowerCase().includes(keyword.toLowerCase()));
    if(results.length > 0){
        alert(`Kết quả tìm kiếm: ${results.join(", ")}`);
        console.log(`Kết quả tìm kiếm: ${results.join(", ")}`);
    } else {
        alert("Không tìm thấy sản phẩm nào phù hợp với từ khóa!");
        console.log("Không tìm thấy sản phẩm nào phù hợp với từ khóa!");
    }
}

function reportStock(){
    let report = iphoneList.map((product, index) => `${product}: ${stock[index]} chiếc`);
    alert(`Báo cáo tình trạng tồn kho:\n${report.join("\n")}`);
    console.log(`Báo cáo tình trạng tồn kho:\n${report.join("\n")}`);

} 
