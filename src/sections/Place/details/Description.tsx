import DetailSectionTitle from "@/components/Place/details/DetailSectionTitle";
import PageSection from "@/components/shared/PageSection";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { useEffect,useState} from "react";
import axios from '@/config/axios';

type PlaceProps = {
	lieu: any;
};

const PlaceDescription: FunctionComponent<PlaceProps> = ( {lieu}) => {
// declaration des structures 
  // chrger les coordonnée du map  google map

  console.log(" lieu ",lieu);
  const[lat,setLat]=useState(0);
  const[long,setLong]=useState(0);
  const[type,setType]=useState("Type");
  const[ouvert,setOuvert]=useState(false)
  let [idLieu ,setIdLieu]=useState<number>(1);

  function chargerMap() {
    const iFrameData = document.getElementById("map") as HTMLIFrameElement;
    console.log("getting iframe",iFrameData);
    // const lat = lieu.lat;
    const lat = long; 
    const lon = lat;
    if(iFrameData!=null ){
    iFrameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es&z=20&amp;&output=embed `;
    
    console.log(iFrameData.src);
    }
  }
  

  // charger la localisation du lieu
  useEffect(() => {
    if(lieu!=null){
    // setLat(lieu.locationId.split('_')[0] );
    // setLong(lieu.locationId.split('_')[1] );
    chargerMap();
    }
  },[lieu]);

   // recuperer les photos du Lieu
   const [photos, setPhotos] = useState([]);
   function getPhotos(idLieu:number) {
     axios.get(`/photos/${idLieu}`).then((res:any) => {
      
     });
   };

     // recupere les chemps ( clés etrangères ) externe en texte


  return (
    <PageSection
      name="PLaceDescription"
      className="h-[max(100vh,768px)] md:h-[max(100vh,640px)] mx-8 my-26
      "
    >
      <div className=" flex justify-between gap-8 my-2  relative h-full w-full p-20 sm:px-14 md:px-20  flex-row ">
        <div className=" flex-col justify-between gap-8  w-1/2">
          <div className="flex flex-row justify-between gap-8">
            <DetailSectionTitle title="Description" />

            <div>
              <svg
                width={43}
                height={51}
                viewBox="0 0 43 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[35.38px] h-[46.76px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M34.8199 16.0284C38.4452 16.0284 41.384 12.8881 41.384 9.01421C41.384 5.14037 38.4452 2 34.8199 2C31.1947 2 28.2559 5.14037 28.2559 9.01421C28.2559 12.8881 31.1947 16.0284 34.8199 16.0284Z"
                  stroke="#484848"
                  stroke-width="2.60336"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.56406 32.3941C12.1893 32.3941 15.1281 29.2537 15.1281 25.3799C15.1281 21.506 12.1893 18.3657 8.56406 18.3657C4.93883 18.3657 2 21.506 2 25.3799C2 29.2537 4.93883 32.3941 8.56406 32.3941Z"
                  stroke="#484848"
                  stroke-width="2.60336"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M34.8199 48.7608C38.4452 48.7608 41.384 45.6204 41.384 41.7466C41.384 37.8727 38.4452 34.7324 34.8199 34.7324C31.1947 34.7324 28.2559 37.8727 28.2559 41.7466C28.2559 45.6204 31.1947 48.7608 34.8199 48.7608Z"
                  stroke="#484848"
                  stroke-width="2.60336"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.2307 28.9117L29.1749 38.2172"
                  stroke="#484848"
                  stroke-width="2.60336"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.1523 12.5455L14.23 21.851"
                  stroke="#484848"
                  stroke-width="2.60336"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <svg
                width={48}
                height={42}
                viewBox="0 0 48 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-[42px] relative  top-[5px]"
                preserveAspectRatio="none"
              >
                <path
                  d="M44.1229 3.8992C41.6095 1.39764 38.2819 0.0303835 34.7305 0.0303835C31.1791 0.0303835 27.8414 1.40776 25.328 3.90933L24.0153 5.21582L22.6822 3.88908C20.1688 1.38751 16.8209 0 13.2695 0C9.72825 0 6.39054 1.37738 3.88726 3.86882C1.37381 6.37039 -0.0101202 9.69231 5.57206e-05 13.2269C5.57206e-05 16.7615 1.39416 20.0733 3.90762 22.5749L23.018 41.5949C23.2826 41.8582 23.6388 42 23.9847 42C24.3307 42 24.6869 41.8683 24.9515 41.605L44.1026 22.6154C46.616 20.1138 47.9999 16.7919 47.9999 13.2573C48.0101 9.72269 46.6364 6.40077 44.1229 3.8992ZM42.1691 20.681L23.9847 38.7085L5.84104 20.6506C3.84656 18.6655 2.74756 16.0323 2.74756 13.2269C2.74756 10.4215 3.83638 7.78828 5.83087 5.81336C7.81517 3.83844 10.4609 2.74464 13.2695 2.74464C16.0882 2.74464 18.7441 3.83844 20.7386 5.82349L23.0384 8.11237C23.5777 8.64914 24.4427 8.64914 24.982 8.11237L27.2614 5.84374C29.2559 3.85869 31.9118 2.76489 34.7203 2.76489C37.5289 2.76489 40.1747 3.85869 42.1691 5.83361C44.1636 7.81866 45.2524 10.4519 45.2524 13.2573C45.2626 16.0627 44.1636 18.6959 42.1691 20.681Z"
                  fill="#484848"
                />
              </svg>
            </div>
          </div>
          <div>
            <p className="  relative left-0  text-[26px] text-justify text-[#9a9a9a] my-8">
              Santa Cruz Fort is one of the three forts in Oran, the second
              largest port city of Algeria; the other two forts are Fort de la
              Moune at the western end of the port and Fort Saint-Philippe, a
              replacement of the old castle of the Saints known in Spanish as
              Castillo de los Santos, at the centre of Oran. The three forts are
              connected by tunnels. Fort Santa Cruz was built between 1577 and
              1604 by the Spaniards on the Pic d’Aidour above Gulf of Oran in
              the Mediterranean Sea, at an elevation of above 400 metres (1,312
              ft). In 1831, the French occupied Oran and the fort.
            </p>

            <p className=" relative  text-2xl font-medium text-right underline text-[#60b896]">
              Acceder à la documentation historique
            </p>
          </div>
        </div>
        {/* map */}
        <div className="relative mb-6 w-2/5">
         
          <div className="property-details-google-map h-full ">
            <iframe
              id="map"
              //src="https://maps.google.com/maps?q=+36.722766877219634,3.1850375926974666&hl=es&z=14&amp;output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
      ;
    </PageSection>
  );
};

export default PlaceDescription;
