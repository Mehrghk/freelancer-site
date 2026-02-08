import Navbar from "./components/Navbar";
import styles from "./App.module.css";
import { useState } from "react";
import ImgMediaCard from "./components/ImgMediaCard";
import { Grid,Container,createTheme, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {orange, grey} from '@mui/material/colors';
import {SwiperSlide, Swiper} from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
// import 'swiper/css/pagination';

const App = () => {
  {
    document.dir = "rtl";
    document.title = "FreeMoLancer";
  }
  const mainOptions = ["مهندسان", "کارفرمایان", " پروژه ها"];
  const allImpPages = ["مهندسان", "کارفرمایان", " پروژه ها", "درباره ما", "تعرفه ها"]
  const [showMenu, setShowMenu] = useState(false);
  const projectCategories1=["طراحی داخلی و دکوراسیون" ,"طراحی و اجرای نمای ساختمان" , "طراحی و نقشه کشی معماری (مسکونی، تجاری، صنعتی)", "محاسبات سازه و مقاوم سازی ساختمان"]
  const projectCategories2=["طراحی و اجرای سیستم های برق ساختمان", "نصب و تعمیر دوربین های مداربسته و شبکه های ارتباطی", "نصب و راه اندازی سیستم های روشنایی وامنیتی", "هوشمندسازی ساختمان و سیستم های کنترلی"];
  const projectCategories3=["تأسیسات لوله کشی آب و فاضلاب", "سیستم های تهیه مطبوع و هوشمندسازی ساختمان", "نصب و تعمیر آسانسور و پله برقی", "نصب و تعمیر سیستم های گرمایشی و سرمایشی"];
const projectCategories4=["اجرای پروژه های عمرانی(ساختمان سازی، جاده سازی، پل سازی)", "بازسازی و نوسازی ساختمان ها", "بهینه سازی مصرف انرژی در ساختمان", "مدیریت پروژه های ساختمانی"];
  const projectCategories5=["اتوماسیون صنعتی و بهینه سازی خطوط تولید", "تعمیر و نگهداری تجهیزات صنعتی", "طراحی و ساخت قطعات صنعتی", "مهندسی مواد و متالورژی"];
  const theme = createTheme({
    palette: {
      primary: {
        main: orange[900],
        dark: orange[800]
      },
      secondary: {
        light:grey[50],
        main: grey[500],
        dark: grey[900]
      }
    }
  });
  return (
    // <div className="d-flex flex-column justify-content-center">
    <Container maxWidth="xl">
      <ThemeProvider theme={theme}>
        <div className={styles.divBody}>
          {showMenu && (
            <div className={styles.menuMobile}>
              <header>
                <p className={styles.logo}>
                  Free<span className={styles.impWords}>Mo</span>Lancer
                </p>
                <button
                  className={styles.closeBtn}
                  onClick={() => setShowMenu(false)}
                >
                  ×
                </button>
              </header>
              <main>
                <ul className={styles.navliMobile}>
                  {allImpPages.map((item)=><li><a href={item}>{item}</a></li>)}
                </ul>
              </main>
            </div>
          )}
          <div className={styles.divBanner}>
            <div className={styles.navbarDiv}>
              <Navbar onClick={() => setShowMenu(true)} />
            </div>

            <div className={styles.bannerText}>
              <h1 className={styles.h1}>
                <span className={styles.impWords}>مهندس</span> مورد نظر خود را به
                سادگی پیدا کنید!
              </h1>
              <p>
                در فریمولنسر بهترین مهندسان و معماران را جست و جو کنید، نمونه
                کارهایشان را ببینید و با خیال راحت استخدام کنید.
              </p>
              <div>
                <div className={styles.outerDivInputBanner}>
                  <input
                    type="search"
                    name=""
                    placeholder="فرد مورد نظرتون رو پیدا کنید"
                  />
                  <div>
                    <select className={styles.dropdown} name="" id="">
                      {mainOptions.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                    <button type="submit">
                      Search
                      {/* <image href="src/assets/search logo.jpg"></image> */}
                    </button>
                    <button type="submit">🔎</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className={styles.h2}>
            مجموعه ای جامع از تمام خدمات مهندسی برای رفع تمام نیازهای شما
          </h2>
          <p>
            مجموعه ای تخصصی از برترین خدمات مهندسی را کاوش کنید، از طراحی و معماری
            گرفته تا مشاوره، ساخت و ساز و تعمیرات تخصصی. همین حالا متخصص مورد نظرتون
            رو پیدا کنید!
          </p>
          <div className={styles.horizantalCards}>
            <div className={styles.outerCardDivs}>
              <span>
                <h3>مهندس هستم!</h3>
                <p>از انجام پروژه های فریلنسری لذت ببرید!</p>
              </span>
              <span>
                <button>آغاز درآمدزایی</button>
                <button>راهنما</button>
              </span>
            </div>
            <div className={styles.outerCardDivs}>
              <span>
                <h3>کارفرما هستم!</h3>
                <p>برای پروژه خودتون مهندس انتخاب کنید!</p>
              </span>
              <span>
                <button>ثبت پروژه</button>
                <button>راهنما</button>
              </span>
            </div>
          </div>
          <div className={styles.zamineHayeKari}>
            <div className={styles.twoElement}>
              <h2>دسته بندی پروژه ها</h2>
              <a>مشاهده همه دسته بندی ها ←</a>
            </div>
            <Box sx={{display:'flex',justifyContent:"center" }}>
            <Grid container spacing={5} sx={{maxWidth:"100%"}}>
              <Swiper modules={[FreeMode, Pagination]}
                freeMode={true}
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                  320:{spaceBetween:40, slidesPerView: 3},
                  650:{spaceBetween:30, slidesPerView: 2.2},
                  790:{spaceBetween:30, slidesPerView: 2},
                  730:{spaceBetween:20, slidesPerView: 1.5},
                  800:{spaceBetween:20, slidesPerView: 2.1},
                  960:{spaceBetween:20, slidesPerView: 2.5},
                  1000:{spaceBetween:20, slidesPerView: 2.5},
                  1100:{spaceBetween:20, slidesPerView: 3},
                  1200:{spaceBetween:20, slidesPerView: 3.5},
                  1250:{spaceBetween:20, slidesPerView: 4},
                }}
                slidesPerView={3}
                // breakpoints={{
                //   320: { spaceBetween: 10, slidesPerView: 0.5 },
                //   600: { spaceBetween: 40, slidesPerView: 2 },
                //   750: { spaceBetween: 30, slidesPerView: 3 },
                //   900: { spaceBetween: 20, slidesPerView: 5 },
                // }}
                >
                <SwiperSlide>
                  <ImgMediaCard title="خدمات مهندسی و معماری" items={projectCategories1} image="src/assets/photos/خدمات مهندسی و معماری.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                  <ImgMediaCard title="خدمات مهندسی برق و الکترونیک" items={projectCategories2} image="src/assets/photos/برق و الکترونیک.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                  <ImgMediaCard title="خدمات مهندسی تأسیسات و مکانیک" items={projectCategories3} image="src/assets/photos/تاسیسات و مکانیک.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                  <ImgMediaCard title="خدمات مهندسی عمران و ساخت و ساز" items={projectCategories4} image="src/assets/photos/تاسیسات و مکانیک.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                  <ImgMediaCard title="خدمات مهندسی صنعتی و مکانیک" items={projectCategories5} image="src/assets/photos/تاسیسات و مکانیک.jpg"/>
                </SwiperSlide>
              </Swiper>
            </Grid>
            </Box>
          </div>
        </div>
      </ThemeProvider>
    </Container>
  );
};

export default App;
