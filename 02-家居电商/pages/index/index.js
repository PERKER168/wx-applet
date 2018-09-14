//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/staic/swiper/swiper01.jpg',
      '../../images/staic/swiper/swiper02.jpg',
      '../../images/staic/swiper/swiper03.jpg',
      '../../images/staic/swiper/swiper04.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular:true,
    proList: [{
      imgUrl: "../../images/staic/product/product01.jpg",
      proName: "富安娜（FUANNA）",
      proPrice: 3669.88
    }, {
      imgUrl: "../../images/staic/product/product02.jpg",
      proName: "李安娜（FUANNA）",
      proPrice: 36779.00
    }, {
      imgUrl: "../../images/staic/product/product03.jpg",
      proName: "孙安娜（FUANNA）",
      proPrice: 36559.00
    }, {
      imgUrl: "../../images/staic/product/product04.jpg",
      proName: "赵安娜（FUANNA）",
      proPrice: 399.99
    }, {
      imgUrl: "../../images/staic/product/product05.jpg",
      proName: "钱安娜（FUANNA）",
      proPrice: 3889.00
    }, {
      imgUrl: "../../images/staic/product/product06.jpg",
      proName: "周安娜（FUANNA）",
      proPrice: 3630.00
    }, {
      imgUrl: "../../images/staic/product/product07.jpg",
      proName: "吴安娜（FUANNA）",
      proPrice: 3129.00
    }, {
      imgUrl: "../../images/staic/product/product08.jpg",
      proName: "郑安娜（FUANNA）",
      proPrice: 379.00
    }, {
      imgUrl: "../../images/staic/product/product09.jpg",
      proName: "王安娜（FUANNA）",
      proPrice: 399.00
    }, {
      imgUrl: "../../images/staic/product/product10.jpg",
      proName: "容安娜（FUANNA）",
      proPrice: 369.00
    }]
  },
})