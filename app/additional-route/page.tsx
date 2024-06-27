import React from 'react';

export default function AdditionalRoute() {
  return <div id="iframe">
    <iframe
      title="widget"
      allowTransparency
      width="600px"
      height="800px"
      name="myIframe"
      style={{ border: 'none' }}
      src="https://demo.dev.secure.getborderless.com/widgets/add-external-contact?widgetId=Y2w5NW5lZ3I3NGd1ZTA4MzBkbnkwb3gzdTo1NWU4NjFhYS02YmIxLTQ2YmUtYjBkOS02ODFjYWZjMGI1OGY="
    />
  </div>
}
