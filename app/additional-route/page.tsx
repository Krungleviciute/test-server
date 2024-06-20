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
      src="https://demo.dev.secure.getborderless.com/widgets/add-external-contact?widgetId=Y2w5N2J4MXdjNTd0YTA4MzA4cnl4MXdncDphM2FiYjlhYS1iYzNkLTQ1YmQtOWRlNC01MjE2NjBkZTNmZTA="
    />
  </div>
}