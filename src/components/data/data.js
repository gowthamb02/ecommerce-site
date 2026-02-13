
const data={
  "sections": [
    {
      "sectionId": "mobiles",
      "sectionName": "Mobiles",
      "products": [
        { "id": "M1", "name": "iPhone 14", "price": 69999, "image": "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=400", "rating": 4.6, "details": "128GB, Super Retina XDR Display, A15 Bionic" },
        { "id": "M2", "name": "Samsung Galaxy S23", "price": 65999, "image": "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=400", "rating": 4.5, "details": "8GB RAM, 256GB Storage, Snapdragon 8 Gen 2" },
        { "id": "M3", "name": "OnePlus 11R", "price": 39999, "image": "https://images.unsplash.com/photo-1662627487911-a0d8546ab87d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T25lUGx1cyUyMHBob25lfGVufDB8fDB8fHww", "rating": 4.4, "details": "100W SuperVOOC Charging, 120Hz AMOLED" },
        { "id": "M4", "name": "Redmi Note 13 Pro", "price": 24999, "image": "https://images.unsplash.com/photo-1760087959509-67b15d5cf1c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlZG1pJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D", "rating": 4.3, "details": "200MP Camera, 1.5K Curved Display" },
        { "id": "M5", "name": "Realme GT Neo", "price": 29999, "image": "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400", "rating": 4.2, "details": "Mediatek Dimensity 8100, 80W Charging" },
        { "id": "M6", "name": "Vivo V29", "price": 32999, "image": "https://images.unsplash.com/photo-1755318535396-cdb062dc60bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dml2byUyMHBob25lfGVufDB8fDB8fHww", "rating": 4.1, "details": "Aura Light Portrait, 50MP Eye AF Selfie" },
        { "id": "M7", "name": "Oppo Reno 10", "price": 34999, "image": "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=400", "rating": 4.0, "details": "Telephoto Portrait Camera, 3D Curved Design" },
        { "id": "M8", "name": "Pixel 7a", "price": 42999, "image": "https://media.istockphoto.com/id/2242425818/photo/close-up-image-of-a-womans-hand-using-a-phone-concept-of-a-modern-communication-person-using.webp?a=1&b=1&s=612x612&w=0&k=20&c=w3EY-OBzsVG3ymKQVLkBNk0wmFMdN_zT0yGagoSS4ow=", "rating": 4.5, "details": "Tensor G2 Chip, Wireless Charging, IP67" }
      ]
    },
    {
      "sectionId": "laptops",
      "sectionName": "Laptops",
      "products": [
        { "id": "L1", "name": "MacBook Air M1", "price": 89999, "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400", "rating": 4.8, "details": "8GB RAM, 256GB SSD, Apple M1 Chip" },
        { "id": "L2", "name": "HP Pavilion", "price": 64999, "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400", "rating": 4.4, "details": "Ryzen 5 5600H, 16GB RAM, Backlit Keyboard" },
        { "id": "L3", "name": "Dell Inspiron", "price": 58999, "image": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400", "rating": 4.3, "details": "Intel i5 12th Gen, 512GB SSD, Windows 11" },
        { "id": "L4", "name": "Asus Vivobook", "price": 55999, "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400", "rating": 4.2, "details": "Fingerprint Sensor, Thin and Light Design" },
        { "id": "L5", "name": "Lenovo IdeaPad", "price": 52999, "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400", "rating": 4.1, "details": "Intel Core i3, 8GB RAM, Rapid Charge" },
        { "id": "L6", "name": "Acer Aspire 7", "price": 61999, "image": "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?w=400", "rating": 4.4, "details": "GTX 1650 Graphics, 15.6 inch FHD" },
        { "id": "L7", "name": "MSI Gaming GF63", "price": 74999, "image": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400", "rating": 4.5, "details": "i7 11th Gen, Aluminum Hairbrush Aesthetics" },
        { "id": "L8", "name": "Asus TUF Gaming", "price": 87999, "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400", "rating": 4.7, "details": "RTX 3050, 144Hz Refresh Rate, Military Grade" }
      ]
    },
    {
      "sectionId": "fashion",
      "sectionName": "Fashion",
      "products": [
        { "id": "F1", "name": "Casual Shirt", "price": 999, "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400", "rating": 4.2, "details": "100% Cotton, Slim Fit, Machine Wash" },
        { "id": "F2", "name": "Slim Jeans", "price": 1499, "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400", "rating": 4.3, "details": "Stretchable Denim, Dark Blue, Mid-rise" },
        { "id": "F3", "name": "Cotton T-Shirt", "price": 499, "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400", "rating": 4.1, "details": "Round Neck, Breathable Fabric, Solid Color" },
        { "id": "F4", "name": "Hoodie", "price": 1799, "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400", "rating": 4.3, "details": "Fleece Lined, Kangaroo Pockets, Winter Wear" },
        { "id": "F5", "name": "Leather Jacket", "price": 2499, "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400", "rating": 4.4, "details": "Faux Leather, Biker Style, Zipper Closure" },
        { "id": "F6", "name": "Kurta", "price": 1999, "image": "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400", "rating": 4.2, "details": "Ethnic Wear, Silk Blend, Embroidered" },
        { "id": "F7", "name": "Track Pants", "price": 1299, "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400", "rating": 4.1, "details": "Dry-Fit Material, Elastic Waistband" },
        { "id": "F8", "name": "Blazer", "price": 3499, "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400", "rating": 4.5, "details": "Formal Single Breasted, Notch Lapel" }
      ]
    },
    {
      "sectionId": "accessories",
      "sectionName": "Accessories",
      "products": [
        { "id": "A1", "name": "Smart Watch", "price": 4999, "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", "rating": 4.5, "details": "AMOLED Display, Heart Rate Monitor, 10-day Battery" },
        { "id": "A2", "name": "Wireless Earbuds", "price": 2999, "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400", "rating": 4.4, "details": "Active Noise Cancellation, Bluetooth 5.3" },
        { "id": "A3", "name": "Leather Wallet", "price": 899, "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400", "rating": 4.2, "details": "Genuine Leather, RFID Blocking, 6 Card Slots" },
        { "id": "A4", "name": "Sunglasses", "price": 1299, "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400", "rating": 4.3, "details": "UV400 Protection, Polarized Lenses, Aviator Style" },
        { "id": "A5", "name": "Backpack", "price": 2199, "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400", "rating": 4.6, "details": "Water Resistant, 15.6 inch Laptop Compartment" },
        { "id": "A6", "name": "Mechanical Keyboard", "price": 3599, "image": "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400", "rating": 4.7, "details": "RGB Backlit, Blue Switches, Wired USB" },
        { "id": "A7", "name": "Gaming Mouse", "price": 1499, "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400", "rating": 4.5, "details": "12000 DPI, Programmable Buttons, Ergonomic" },
        { "id": "A8", "name": "Power Bank", "price": 1999, "image": "https://images.unsplash.com/photo-1586253634019-c77872f966f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvd2VyYmFua3xlbnwwfHwwfHx8MA%3D%3D", "rating": 4.3, "details": "20000mAh, 22.5W Fast Charging, Dual Output" }
      ]
    },
    {
      "sectionId": "appliances",
      "sectionName": "Home Appliances",
      "products": [
        { "id": "H1", "name": "Coffee Maker", "price": 4500, "image": "https://images.unsplash.com/photo-1565452344518-47faca79dc69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwbWFrZXJ8ZW58MHx8MHx8fDA%3D", "rating": 4.4, "details": "Programmable Timer, 12-Cup Capacity" },
        { "id": "H2", "name": "Air Purifier", "price": 8999, "image": "https://images.unsplash.com/photo-1662454378069-fb8a9c6c0c88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFpciUyMHB1cmlmaWVyfGVufDB8fDB8fHww", "rating": 4.6, "details": "HEPA Filter, Real-time Air Quality Monitor" },
        { "id": "H3", "name": "Electric Kettle", "price": 1200, "image": "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400", "rating": 4.2, "details": "1.5L Stainless Steel, Auto Shut-off" },
        { "id": "H4", "name": "Microwave Oven", "price": 7200, "image": "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400", "rating": 4.5, "details": "20L Capacity, Solo Grill, Digital Display" },
        { "id": "H5", "name": "Vacuum Cleaner", "price": 5499, "image": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400", "rating": 4.3, "details": "Handheld Cordless, Powerful Suction" },
        { "id": "H6", "name": "Blender", "price": 2800, "image": "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400", "rating": 4.4, "details": "750W Motor, 3 Stainless Steel Jars" },
        { "id": "H7", "name": "Toaster", "price": 1500, "image": "https://plus.unsplash.com/premium_photo-1719452894874-3da9fa3b882c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "rating": 4.1, "details": "2-Slice, Variable Browning Control" },
        { "id": "H8", "name": "Refrigerator", "price": 999, "image": "https://plus.unsplash.com/premium_photo-1729431432431-fabe5caa7078?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJpZGdlfGVufDB8fDB8fHww", "rating": 4.0, "details": "Steam Spray, Non-stick Soleplate" }
      ]
    }
  ]
}
export default data;