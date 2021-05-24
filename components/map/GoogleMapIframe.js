

const GoogleMapIframe = ({ addClass }) => {
  return (
    // <iframe
    //   width={width}
    //   height={height}
    //   loading="lazy"
    //   src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_STATIC_API_KEY}
    //     &q=Space+Needle,Seattle+WA`}
    //   className={addClass}
    //   >
    // </iframe>
    <iframe
      className={addClass}
      src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Centre%20Hospitalier%20Universitaire%20Ibn%20Rochd%20-%20Casablanca+(CHU%20IBN%20ROCH%20CASABLANCA)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
    </iframe>
  )
}

export default GoogleMapIframe