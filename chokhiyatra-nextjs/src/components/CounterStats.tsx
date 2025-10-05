'use client';

import React, { useEffect, useState } from 'react';
import { sanityClient } from '@/lib/sanity';

interface Stat {
  _key: string;
  number: number;
  label: string;
}

export default function CounterStats() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "counterStats"][0]{ stats[]{ _key, number, label } }`
        );

        if (data?.stats && data.stats.length > 0) {
          setStats(data.stats);
        } else {
          // Fallback to default stats
          setStats([
            { _key: '1', number: 145, label: 'Travel Tales' },
            { _key: '2', number: 74, label: 'Journey Bound' },
            { _key: '3', number: 134, label: 'Miles Away' },
            { _key: '4', number: 85, label: 'Escape Route' },
          ]);
        }
      } catch (error) {
        console.error('Error fetching counter stats:', error);
        // Fallback to default stats
        setStats([
          { _key: '1', number: 145, label: 'Travel Tales' },
          { _key: '2', number: 74, label: 'Journey Bound' },
          { _key: '3', number: 134, label: 'Miles Away' },
          { _key: '4', number: 85, label: 'Escape Route' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <section className="counter-two-area position-relative z-1">
        <div className="container">
          <div className="text-center py-5">
            <div className="spinner-border text-main-600" role="status">
              <span className="visually-hidden">Loading stats...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="counter-two-area position-relative z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="row">
              {stats.map((stat, index) => (
                <div key={stat._key} className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  <div
                    className="counter-wrap text-center tw-mb-8"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={200 + index * 100}
                  >
                    <div className="counter-content">
                      <h2 className="counter-title counter-two-title fw-semibold">
                        <span
                          className="purecounter"
                          data-purecounter-duration="1"
                          data-purecounter-end={stat.number}
                        ></span>
                      </h2>
                      <p className="counter-paragraph counter-two-paragraph tw-text-3xl tw-text-505 fw-bold text-capitalize">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="counter-two-shape position-absolute start-0 bottom-0 z-n1 w-100">
        <img className="w-100" src="assets/images/counter/counter-two-shape.png" alt="shape" />
      </div>
    </section>
  );
}
