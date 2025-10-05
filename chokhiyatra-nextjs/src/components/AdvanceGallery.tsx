'use client';

import React, { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '@/lib/sanity';

interface GalleryImage {
  _key: string;
  asset: any;
  alt?: string;
}

export default function AdvanceGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "advanceGallery"][0]{ images[]{ _key, asset, alt } }`
        );

        if (data?.images && data.images.length > 0) {
          setImages(data.images);
        } else {
          // Fallback to default images if no data in Sanity
          setImages([]);
        }
      } catch (error) {
        console.error('Error fetching advance gallery images:', error);
        setImages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="advance-area py-140 position-relative z-1">
        <div className="container-fluid">
          <div className="text-center">
            <div className="spinner-border text-main-600" role="status">
              <span className="visually-hidden">Loading gallery...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="advance-area py-140 position-relative z-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="advance-wrap advance-two-wrap">
                {/* Default fallback images */}
                <div className="advance-two-item">
                  <div className="advance-two-thumb">
                    <img src="assets/images/advance/advance-two-thumb1.jpg" alt="thumb" />
                  </div>
                </div>
                <div className="advance-two-item">
                  <div className="advance-two-thumb">
                    <img src="assets/images/advance/advance-two-thumb2.jpg" alt="thumb" />
                  </div>
                </div>
                <div className="advance-two-item">
                  <div className="advance-two-thumb">
                    <img src="assets/images/advance/advance-two-thumb3.jpg" alt="thumb" />
                  </div>
                </div>
                <div className="advance-two-item">
                  <div className="advance-two-thumb">
                    <img src="assets/images/advance/advance-two-thumb4.jpg" alt="thumb" />
                  </div>
                </div>
                <div className="advance-two-item">
                  <div className="advance-two-thumb">
                    <img src="assets/images/advance/advance-two-thumb5.jpg" alt="thumb" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="advance-area py-140 position-relative z-1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="advance-wrap advance-two-wrap">
              {images.map((image) => {
                const imageUrl = image.asset?._ref
                  ? urlFor(image.asset).width(400).height(600).url()
                  : 'assets/images/advance/advance-two-thumb1.jpg';

                return (
                  <div key={image._key} className="advance-two-item">
                    <div className="advance-two-thumb">
                      <img src={imageUrl} alt={image.alt || 'Gallery image'} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
