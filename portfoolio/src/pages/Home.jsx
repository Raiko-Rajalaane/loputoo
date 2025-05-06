
import CarouselGallery from "../components/CarouselGallery"
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <div 
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: '80vh' }}
      >
        <h1 className="text-center">{t("home.header")}</h1>
        <p className="lead text-center">{t("home.subheader")}</p>
      </div>
      <div>
        <CarouselGallery />
      </div>
    </div>
  )
}

export default Home
