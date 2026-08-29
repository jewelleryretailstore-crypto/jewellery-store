import Header from '../../components/Header';
import ProductGallery from '../../components/ProductGallery';
import ProductConfigurator from '../../components/ProductConfigurator';
import styles from '../page.module.css';

export default function ProductPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <div className="text-sans" style={{ fontSize: '0.8rem', color: '#888', padding: '1rem 0' }}>
            Home / Engagement Rings / Solitaire Rings
          </div>
          
          <div className={styles.productLayout}>
            {/* Left Column: Media Gallery */}
            <div className={styles.galleryColumn}>
              <ProductGallery />
            </div>

            {/* Right Column: Details & Configurator */}
            <div className={styles.detailsColumn}>
              <ProductConfigurator />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
