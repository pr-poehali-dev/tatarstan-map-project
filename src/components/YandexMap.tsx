import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    ymaps: any;
  }
}

interface MapLocation {
  name: string;
  coords: [number, number];
  description: string;
}

const YandexMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = () => {
      if (!window.ymaps || !mapRef.current) return;

      window.ymaps.ready(() => {
        const map = new window.ymaps.Map(mapRef.current, {
          center: [55.79, 49.12],
          zoom: 7,
          controls: ['zoomControl', 'fullscreenControl']
        });

        const locations: MapLocation[] = [
          {
            name: 'Казанский Кремль',
            coords: [55.798551, 49.106324],
            description: 'Историческая крепость и главная достопримечательность Казани'
          },
          {
            name: 'Мечеть Кул-Шариф',
            coords: [55.798308, 49.105289],
            description: 'Главная мечеть Татарстана'
          },
          {
            name: 'Храм всех религий',
            coords: [55.742134, 49.200584],
            description: 'Уникальный архитектурный комплекс'
          },
          {
            name: 'Раифский монастырь',
            coords: [55.906667, 48.726944],
            description: 'Старейший действующий мужской монастырь в Татарстане'
          },
          {
            name: 'Свияжск',
            coords: [55.771111, 48.663611],
            description: 'Город-остров с богатой историей'
          },
          {
            name: 'Болгарский музей-заповедник',
            coords: [54.975556, 49.050278],
            description: 'Древний город Волжской Булгарии'
          },
          {
            name: 'Елабуга',
            coords: [55.756944, 52.041389],
            description: 'Исторический город с памятниками архитектуры'
          },
          {
            name: 'Чистополь',
            coords: [55.363611, 50.641944],
            description: 'Город купеческих особняков'
          },
          {
            name: 'Набережные Челны',
            coords: [55.743056, 52.411389],
            description: 'Крупный промышленный центр республики'
          }
        ];

        locations.forEach((location) => {
          const placemark = new window.ymaps.Placemark(
            location.coords,
            {
              balloonContentHeader: `<strong>${location.name}</strong>`,
              balloonContentBody: location.description,
              hintContent: location.name
            },
            {
              preset: 'islands#redDotIcon',
              iconColor: '#0ea5e9'
            }
          );
          map.geoObjects.add(placemark);
        });
      });
    };

    if (window.ymaps) {
      initMap();
    } else {
      const checkYmaps = setInterval(() => {
        if (window.ymaps) {
          clearInterval(checkYmaps);
          initMap();
        }
      }, 100);

      return () => clearInterval(checkYmaps);
    }
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[600px] rounded-lg overflow-hidden shadow-2xl"
    />
  );
};

export default YandexMap;
