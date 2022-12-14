import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import './asset/Style/about.css'
import Laptap from './asset/Img/laptop.jpg'
import Map from './asset/Img/map.png'
import Food from './asset/Img/foods.png'
import Motor from './asset/Img/motor.png'
export default function About() {
    return (
        <>
            <Header />
            <ContextAbout />
            <Footer />
        </>
    )
}
function ContextAbout() {
    return (
        <section className="about">
            <section className="text">
                <strong><b>درباره</b> اسنپ‌فود</strong>
                <p>اسنپ‌فود، فرهنگ جدید سفارش غذاست که برای اولین بار در ایران معرفی و اجرا شده است. سفارش اینترنتی غذا در ايران تا قبل از راه‌اندازی اسنپ‌فود تنها یک رویا بود و کمتر کسی از مزایای آن خبر داشت. این رويا در سال ۱۳۸۸ به واقعيت تبديل شد و در این مدت طرفداران زیادی نيز بین مردم ایران پيدا كرده است. اسنپ‌فود اولین وب‌سایت ایرانی و متعلق به شرکت آوا نگار اطلس تجارت است که سفارش اینترنتی غذا را برای مردم ایران به ارمغان آورده است و امکانات متعددی به منظور راحتی هر چه بيشتر مردم و رستوران‌ها تدارک دیده و روز به روز بر اين امكانات خواهد افزود. كاربران ما می‌توانند به راحتی غذای مورد نظر خود را انتخاب کرده و یکی از سه روش پرداخت را تعيين و در نهايت غذای خود را تحویل بگیرند.</p>
            </section>
            <section className="aboutPic">
                <img src={Laptap} alt="" />
                <img src={Map} alt="" />
                <img src={Food} alt="" />
                <img src={Motor} alt="" />
            </section>
            <div className="aboutTextEnd">
                <div className="aboutTextEndRight"><p>اسنپ‌فود امکانات متفاوت و مطلوبی را به منظور صرفه‌جویی در وقت و هزینه در اختیار كاربران خود قرار می دهد. علاوه بر این می توان به بخشی از اين امكانات به شرح زیر اشاره نمود:</p></div>
                <div className="aboutTextEndLeft">
                    <ul>
                        <li>تنوع بی‌نظیر غذاها اعم از ایرانی، سنتی، فرنگی، چینی، دریایی، ایتالیایی، مغولی، فست‌فود، گیاهی، رژیمی و ...</li>
                        <li>روش‌های پرداخت متنوع (حضوری، اعتباری و آنلاین)
                        </li>
                        <li>روش‌های گوناگون جستجوی غذا بر اساس نوع رستوران، منطقه مورد نظر، غذای مورد علاقه و ...</li>
                        <li>امکان اضافه نمودن رستوران‌های مورد علاقه در پروفایل شخصی افراد</li>
                        <li>یکسان بودن قیمت منوها در سایت اسنپ‌فود با رستوران‌ها</li>
                        <li>تخفیف بر روی غذاهای رستوران‌های مختلف</li>
                        <li>شرکت در کمپین‌های اسنپ‌فود در مناسبت‌های مختلف</li>
                        <li>اضافه كردن رستوران‌های جدید متناسب با نظرات كاربران</li>
                        <li>مشاهده منوی به روز رستوران‌ها و عکس غذاها</li>
                        <li>آگاهی از رستوران‌های جدید</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
