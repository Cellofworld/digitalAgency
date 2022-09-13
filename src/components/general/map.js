import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export function Yanmap() {
return (
    <div className='maps'>
        <div className='fMap'>
        <YMaps >
    
    <Map 
       height= "250px"
       width= "500px"
       defaultState={{
       center: [38.846101, -77.306893],
       zoom: 9
    }}>
        <Placemark geometry={[38.846101, -77.306893]} />
      </Map>
    </YMaps>
        </div>
        </div>
)
}