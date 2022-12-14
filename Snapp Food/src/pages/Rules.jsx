import React from "react";
import './asset/Style/rules.css'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
export default function Rules() {
    return (
        <>
            <Header />
            <Rule />
            <Footer />
        </>
    )
}
function Rule() {
    return (
        <section className="backRule">
            <section className="boxRule">
                <p>قوانین استفاده از خدمات سامانه اسنپ‌فود</p>
              <ol>
              <li>اسنپ‌فود تابع قوانین و مقررات جمهوری اسلامی ایران است و درج هرگونه موارد سیاسی، غیر اخلاقی و مغایر با هنجارهای اجتماعی باعث حذف حساب کاربر مورد نظر خواهد شد.</li>
                <li>استفاده از نام و نام‌خانوادگی حقیقی افراد به منظور ثبت‌نام در سایت الزامی است. در صورت مشاهده کلمات رکیک و الفاظ نامناسب، حساب كاربر حذف خواهد شد.</li>
                <li>هنگام سفارش، ثبت یک شماره معتبر و قابل دسترس برای کاربران الزامی است.</li>
                <li>مسئولیت وارد کردن اطلاعات اشتباه و غیر واقعی از قبیل نام و نام‌خانوادگی، آدرس و شماره تماس به عهده کاربر است.</li>
                <li>در اسنپ‌فود همواره سعی کرده‌ایم، با بهترین و معتبرترین رستوران‌ها همکاری کنیم. ما در این زنجیره تنها نماینده‌ای برای برقراری ارتباط بهینه و موثر میان مشتریان و رستوران‌های سراسر ایران هستیم. اسنپ‌فود مسئولیتی در قبال کیفیت غذا و نحوه ارسال سفارش‌ها توسط رستوران‌ها عهده‌دار نیست اما همواره سعی کرده ایم با پیگیری و مذاکره با رستوران‌ها این مشکلات را به حداقل کاهش دهیم. البته در مورد سفارش‌های اکسپرس، تمام مسئولیت ارسال متوجه ماست و سعی در جبران هر گونه مشکل احتمالی خواهیم داشت.</li>
                <li>نشان تجاری اسنپ‌فود، در اداره کل ثبت شرکت‌ها و اداره کل مالکیت صنعتی به ثبت رسیده‌است و تحت پوشش قانون کپی‌رایت است.</li>
                <li>تمامی متن‌ها، طرح‌های گرافیکی و کدهای به کار گرفته شده در اسنپ‌فود جزو اموال شرکت «مدرن سامانه غذارسان اطلس» محسوب شده و هرگونه کپی برداری، نشر، نمایش، بازسازی و انتقال آن به هر صورت بدون اجازه مالک ممنوع بوده و پیگرد قانونی در پی خواهد داشت.</li>
                <li>جهت استفاده از تخفیف در اسنپ‌فود ( تخفیفات منو رستوران ها، کدهای تخفیف، بسته های خدماتی، کمپین‌ها، کوپن‌ها و هرگونه خدماتی که در جهت کاهش مبلغ نهایی پرداخت است) باید روش پرداخت آنلاین و یا اعتباری انتخاب شود و این خدمات در روش پرداخت نقدی اعمال نمی‌شود.</li>
              </ol>
            </section>
        </section>
    )
}