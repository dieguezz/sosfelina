import React from 'react'

export default function() {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="52N893YWB4RW6" />
      <input
        type="image"
        src="https://www.paypalobjects.com/es_ES/ES/i/btn/btn_donate_SM.gif"
        border="0"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Botón Donar con PayPal"
      />
      <img
        alt=""
        border="0"
        src="https://www.paypal.com/en_ES/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  )
}
