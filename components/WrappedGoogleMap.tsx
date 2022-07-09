import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { GoogleMapProps } from '@react-google-maps/api/dist/index';
import { memo } from 'react';

// https://www.npmjs.com/package/@react-google-maps/api

function WrappedGoogleMap({ ...props }: GoogleMapProps) {
  return (
    <LoadScript googleMapsApiKey={''}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        {...props}
        options={{
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false,

          maxZoom: 17,

          gestureHandling: 'greedy',

          ...props.options,
        }}
        onLoad={(map) => {
          // gotta wait till `google` becomes available...
          map.setOptions({
            zoomControlOptions: {
              position: google.maps.ControlPosition.TOP_RIGHT,
            },
          });

          props.onLoad && props.onLoad(map);
        }}
      >
        {props.children}
      </GoogleMap>
    </LoadScript>
  );
}

export default memo(WrappedGoogleMap);
