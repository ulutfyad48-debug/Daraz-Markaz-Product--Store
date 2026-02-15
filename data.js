// siteConfig object
const siteConfig = {
    brandName: "SSelix",
    brandLogo: "logo.png",
    hadithUrdu: "سچا اور امانت دار تاجر (قیامت کے دن) انبیاء، صدیقین اور شہداء کے ساتھ ہوگا۔ (ترمذی: 1209)",
    hadithEnglish: "\"The honest and trustworthy merchant will be with the prophets, the truthful, and the martyrs.\" (Tirmidhi)",
    developerUrl: "https://digitalsiteshub.github.io/",
    contactEmail: "sselix418@gmail.com",
    contactPhone: "+923102890002",
    whatsappNumber: "+923102890002"
};

// Delivery charges config
const deliveryConfig = {
    peshawar: 100,
    khyberPakhtunkhwa: 200,
    otherProvinces: 300,
    freeDeliveryThreshold: 3000
};

// Products array – each product can have externalUrl (for catalog) or leave as "#" for internal cart
const products = [
    {
        id: 1,
        title: "Maybelline Fit Me Matte + Poreless Foundation 128 Warm Nude",
        category: "فاؤنڈیشن",
        price: 2850,
        priceFormatted: "2,850",
        description: "میبلین فٹ می فاؤنڈیشن - تیل والی جلد کے لیے بہترین، 12 گھنٹے تک میٹ فنش۔",
        image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=400",
        stock: 15,
        externalUrl: "#"   // internal – will show "Add to Cart"
    },
    {
        id: 2,
        title: "L'Oreal Paris Infallible Foundation 15 Rose Ivory",
        category: "فاؤنڈیشن",
        price: 3200,
        priceFormatted: "3,200",
        description: "لوریل انفیلبل فاؤنڈیشن - 24 گھنٹے تک قائم رہنے والی کوریج۔",
        image: "https://drive.google.com/uc?export=view&id=1LSiJoAjFbovl-QDzI8RqzkyZUv5vnQ0s",
        stock: 10,
        externalUrl: "https://www.daraz.pk/product-link"   // external – will open Daraz
    },
    {
        id: 3,
        title: "Sunscreen SPF 50 PA+++",
        category: "اسکن کیئر",
        price: 850,
        priceFormatted: "850",
        description: "واٹر بیس سن اسکرین - جلد کو UV شعاعوں سے بچائیں، ہلکی اور نان گریسی۔",
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400",
        stock: 25,
        externalUrl: "#"
    },
    {
        id: 4,
        title: "Vitamin C Serum 20%",
        category: "اسکن کیئر",
        price: 1250,
        priceFormatted: "1,250",
        description: "وٹامن سی سیرم - جلد کو نکھارے، داغ دھبے کم کرے، کولیجن بڑھائے۔",
        image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400",
        stock: 20,
        externalUrl: "https://www.markaz.com/product-link"
    },
    {
        id: 5,
        title: "Matte Liquid Lipstick - Rose Pink",
        category: "لپ اسٹک",
        price: 450,
        priceFormatted: "450",
        description: "میٹ لیکوئڈ لپ اسٹک - دیرپا، خشک نہیں ہوتی، گلاب گلابی رنگ۔",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
        stock: 30,
        externalUrl: "#"
    },
    {
        id: 6,
        title: "Eyelash Curler Mascara",
        category: "آئی میک اپ",
        price: 650,
        priceFormatted: "650",
        description: "کرلنگ مسکارا - پلکوں کو موڑ دے، حجم اور لمبائی دے۔",
        image: "https://images.unsplash.com/photo-1631730313056-6d5f05f3e0b0?w=400",
        stock: 18,
        externalUrl: "https://www.daraz.pk/another-link"
    }
    // Add more products as needed – always include externalUrl (set to "#" for internal)
];